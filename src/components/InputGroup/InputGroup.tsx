import { PropsWithChildren } from "react";
import styles from "./InputGroup.module.scss";

export const InputGroup = ({ children }: PropsWithChildren) => {
  return <div className={styles.inputGroup}>{children}</div>;
};
