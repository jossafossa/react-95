import { InputHTMLAttributes } from "react";
import styles from "./Input.module.scss";
import { ArrowButton } from "../Button/Button";

export type InputProps = {
  options?: {
    label: string;
    value: string;
  }[];
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ options, ...commonProps }: InputProps) => {
  return (
    <div className={styles.wrapper}>
      <input className={styles.input} {...commonProps} />
      {options && <ArrowButton />}
    </div>
  );
};
