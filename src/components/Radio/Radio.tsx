import { InputHTMLAttributes, PropsWithChildren } from "react";
import styles from "./Radio.module.scss";
import { Text } from "../Text";

export type RadioProps = {} & InputHTMLAttributes<HTMLInputElement>;

export const Radio = ({
  children,
  id: initialId,
  ...commonProps
}: PropsWithChildren<RadioProps>) => {
  const id =
    initialId || `radio-${Math.random().toString(36).substring(2, 15)}`;
  return (
    <label className={styles.wrapper} htmlFor={id}>
      <input
        className={styles.originalRadio}
        id={id}
        {...commonProps}
        type="radio"
      />
      <span className={styles.radio}>
        <span className={styles.highlight}></span>
        <span className={styles.shadow}></span>
        <span className={styles.dot}></span>
      </span>
      <span className={styles.label}>
        <Text>{children}</Text>
      </span>
    </label>
  );
};
