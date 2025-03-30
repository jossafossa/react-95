import { InputHTMLAttributes, PropsWithChildren } from "react";
import styles from "./Checkbox.module.scss";
import { Text } from "../Text";
import classNames from "classnames";

export type CheckboxProps = {} & InputHTMLAttributes<HTMLInputElement>;

export const Checkbox = ({
  children,
  id: initialId,
  disabled,
  ...commonProps
}: PropsWithChildren<CheckboxProps>) => {
  const id =
    initialId || `checkbox-${Math.random().toString(36).substring(2, 15)}`;
  return (
    <label
      className={classNames(styles.wrapper, disabled && styles.disabled)}
      htmlFor={id}
    >
      <input
        className={styles.originalCheckbox}
        id={id}
        disabled={disabled}
        {...commonProps}
        type="checkbox"
      />
      <span className={styles.checkbox}></span>
      <span className={styles.label}>
        <Text>{children}</Text>
      </span>
    </label>
  );
};
