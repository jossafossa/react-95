import classNames from "classnames";
import { Button, ButtonProps } from "../Button";
import styles from "./CaretButton.module.scss";

export type CaretButtonProps = Omit<ButtonProps, "size"> & {
  direction?: "up" | "down";
};

export const CaretButton = ({
  variant = "normal",
  direction = "down",
  disabled,
  ...commonProps
}: CaretButtonProps) => {
  return (
    <Button
      variant={variant}
      size="medium"
      disabled={disabled}
      className={classNames(
        styles.caretButton,
        styles[direction],
        disabled && styles.disabled
      )}
      {...commonProps}
    >
      <span className={styles.caret} />
    </Button>
  );
};
