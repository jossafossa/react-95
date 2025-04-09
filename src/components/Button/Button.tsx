import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import styles from "./Button.module.scss";
import { Clickable } from "../Clickable";
import classNames from "classnames";

export type ButtonProps = {
  variant?: "normal" | "primary";
  size?: "medium" | "large";
  loading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  variant = "normal",
  size = "large",
  loading = false,
  className,
  ...commonProps
}: PropsWithChildren<ButtonProps>) => (
  <Clickable
    {...commonProps}
    className={classNames(
      styles.button,
      styles[variant],
      styles[size],
      loading && styles.loading,
      commonProps.disabled && styles.disabled,
      className
    )}
  >
    <span className={styles.text}>{children}</span>
  </Clickable>
);
