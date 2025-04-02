import { createContext, PropsWithChildren, useContext, useState } from "react";
import styles from "./Tabs.module.scss";
import { Clickable } from "../Clickable";
import classNames from "classnames";

const TabsContext = createContext<Partial<ReturnType<typeof useTabs>>>({});

type useTabsProps = {
  initialActiveTab: string;
};

const useTabs = ({ initialActiveTab }: useTabsProps) => {
  const [activeTab, setActiveTab] = useState<string>(initialActiveTab);

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
  initialActiveTab: string;
};

const Tabs = ({ children, initialActiveTab }: PropsWithChildren<TabsProps>) => {
  const context = useTabs({ initialActiveTab });

  return (
    <TabsContext.Provider value={context}>
      <div className={styles.tabs}>{children}</div>
    </TabsContext.Provider>
  );
};

const TabsMenu = ({ children }: PropsWithChildren) => {
  return <div className={styles.menu}>{children}</div>;
};

type TabsItemProps = {
  name: string;
};

const TabsItem = ({ name, children }: PropsWithChildren<TabsItemProps>) => {
  const { activeTab, setActiveTab } = useTabsContext();

  return (
    <Clickable
      onClick={() => setActiveTab(name)}
      className={classNames(styles.item, activeTab === name && styles.active)}
    >
      {children}
    </Clickable>
  );
};

const TabsPanels = ({ children }: PropsWithChildren) => {
  return <div className={styles.panels}>{children}</div>;
};

const TabsPanel = ({ name, children }: PropsWithChildren<{ name: string }>) => {
  const { activeTab } = useTabsContext();

  return activeTab === name && <div className={styles.panel}>{children}</div>;
};

Tabs.Menu = TabsMenu;
Tabs.Item = TabsItem;
Tabs.Panels = TabsPanels;
Tabs.Panel = TabsPanel;
export { Tabs };
