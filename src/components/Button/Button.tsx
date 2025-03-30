import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import styles from "./Button.module.scss";
import { Clickable } from "../Clickable";
import classNames from "classnames";

type ButtonProps = {
  variant?: "normal" | "primary";
  size?: "medium" | "large";
  loading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  variant = "normal",
  size = "large",
  loading = false,
  ...commonProps
}: PropsWithChildren<ButtonProps>) => (
  <Clickable
    {...commonProps}
    className={classNames(
      styles.button,
      styles[variant],
      styles[size],
      loading && styles.loading,
      commonProps.disabled && styles.disabled
    )}
  >
    <span className={styles.text}>{children}</span>
  </Clickable>
);

type ArrowButtonProps = {
  variant?: "normal" | "primary";
  size?: "small" | "medium" | "large";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const ArrowButton = ({ ...commonProps }: ArrowButtonProps) => (
  <Clickable
    {...commonProps}
    className={classNames(styles.button, styles.arrowButton, styles.medium)}
  >
    <span className={classNames(styles.text, styles.arrow)} />
  </Clickable>
);
