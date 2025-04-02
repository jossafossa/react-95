import React, {
  AnchorHTMLAttributes,
  Children,
  cloneElement,
  createContext,
  isValidElement,
  KeyboardEvent,
  PropsWithChildren,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./Tabs.module.scss";
import { Clickable } from "../Clickable";
import classNames from "classnames";

const TabsContext = createContext<Partial<ReturnType<typeof useTabs>>>({});

type useTabsProps = {
  initialActiveTab: number;
};

const useTabs = ({ initialActiveTab }: useTabsProps) => {
  const [activeTab, setActiveTab] = useState<number>(initialActiveTab);

  return {
    activeTab,
    setActiveTab,
  };
};

const useTabsContext = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs components must be used within a TabsProvider");
  }
  return context as ReturnType<typeof useTabs>;
};

export type TabsProps = {
  initialActiveTab?: number;
};

const Tabs = ({
  children,
  initialActiveTab = 0,
}: PropsWithChildren<TabsProps>) => {
  const context = useTabs({ initialActiveTab });

  return (
    <TabsContext.Provider value={context}>
      <div className={styles.tabs}>{children}</div>
    </TabsContext.Provider>
  );
};

const Items = ({ children }: PropsWithChildren) => {
  const { activeTab, setActiveTab } = useTabsContext();

  const handleKeyDown = (event: KeyboardEvent) => {
    let currentIndex = activeTab;
    if (event.key === "ArrowRight") {
      currentIndex++;
    } else if (event.key === "ArrowLeft") {
      currentIndex--;
    }

    currentIndex = Math.max(
      0,
      Math.min(Children.count(children) - 1, currentIndex)
    );

    setActiveTab(currentIndex);
  };

  return (
    <div className={styles.items} onKeyDown={handleKeyDown}>
      {Children.map(children, (child, index) => {
        if (isValidElement<ItemProps>(child)) {
          return cloneElement(child, { index });
        }
        return child;
      })}
    </div>
  );
};

type ItemProps = {
  index?: number;
};

const Item = ({ index, children }: PropsWithChildren<ItemProps>) => {
  const { activeTab, setActiveTab } = useTabsContext();
  const item = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (activeTab === index) {
      item.current?.focus();
    }
  }, [activeTab, index]);

  return (
    <Clickable
      ref={item}
      onClick={() => setActiveTab(index!)}
      className={classNames(styles.item, activeTab === index && styles.active)}
    >
      {children}
    </Clickable>
  );
};

const Panels = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.panels}>
      {Children.map(children, (child, index) => {
        if (isValidElement<ItemProps>(child)) {
          return cloneElement(child, { index });
        }
        return child;
      })}
    </div>
  );
};

type PanelProps = {
  index?: number;
};

const Panel = ({ index, children }: PropsWithChildren<PanelProps>) => {
  const { activeTab } = useTabsContext();

  return activeTab === index && <div className={styles.panel}>{children}</div>;
};

Tabs.Items = Items;
Tabs.Item = Item;
Tabs.Panels = Panels;
Tabs.Panel = Panel;
export { Tabs };
