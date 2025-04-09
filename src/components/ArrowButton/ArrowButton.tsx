import { Button, ButtonProps } from "../Button";
import styles from "./ArrowButton.module.scss";
import classNames from "classnames";

export type ArrowButtonProps = Omit<ButtonProps, "size">;

export const ArrowButton = ({
  variant = "normal",
  disabled,
  ...commonProps
}: ArrowButtonProps) => {
  return (
    <Button
      variant={variant}
      size="medium"
      className={classNames(styles.arrowButton, disabled && styles.disabled)}
      disabled={disabled}
      {...commonProps}
    >
      <span className={styles.arrow} />
    </Button>
  );
};
