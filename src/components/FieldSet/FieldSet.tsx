import { PropsWithChildren } from "react";
import styles from "./FieldSet.module.scss";
import { Text } from "../Text";

export type FieldSetProps = {
  label?: string;
};

export const FieldSet = ({
  children,
  label,
}: PropsWithChildren<FieldSetProps>) => {
  return (
    <fieldset className={styles.fieldSet}>
      {label && (
        <legend className={styles.legend}>
          <Text>{label}</Text>
        </legend>
      )}
      {children}
    </fieldset>
  );
};
