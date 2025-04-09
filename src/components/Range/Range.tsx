import { InputHTMLAttributes, useState } from "react";
import styles from "./Range.module.scss";

export type RangeProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "value" | "min" | "max"
> & {
  value: number;
  min: number;
  max: number;
};

export const Range = ({ min, max, value, ...commonProps }: RangeProps) => {
  const progress = ((value - min) / (max - min)) * 100;

  return (
    <>
      <input className={styles.rangeInput} type="range" {...commonProps} />
      <div className={styles.range}>
        <div className={styles.track} />
        <div className={styles.thumb} style={{ "--progress": progress }} />
      </div>
    </>
  );
};
