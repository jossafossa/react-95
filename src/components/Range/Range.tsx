import { PropsWithChildren } from "react";
import styles from "./Range.module.scss";

export type RangeProps = PropsWithChildren;

export const Range = ({ children }: RangeProps) => {
  return <div className={styles.range}>{children}</div>;
};
