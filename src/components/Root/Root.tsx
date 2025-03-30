import { CSSProperties, PropsWithChildren } from "react";
import styles from "./Root.module.scss";

export type RootProps = {
  style?: CSSProperties;
};

export const Root = ( { children, style }: PropsWithChildren<RootProps>) => {
  return (
    <div style={style} className={ styles.root }>
      { children }
    </div>
  );
};