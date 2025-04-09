import { InputHTMLAttributes } from "react";
import { CaretButton } from "../CaretButton";

type NumberButtonsProps = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "disabled"
> & {
  onChange: (value: string) => void;
};
export const NumberButtons = ({
  disabled,
  value,
  onChange,
}: NumberButtonsProps) => {
  const number = Number(value);
  console.log(number);

  const increment = () => {
    if (disabled || isNaN(number)) return;
    onChange(String(number + 1));
  };

  const decrement = () => {
    if (disabled || isNaN(number)) return;
    onChange(String(number - 1));
  };

  return (
    <div>
      <CaretButton disabled={disabled} direction="up" onClick={increment} />
      <CaretButton disabled={disabled} direction="down" onClick={decrement} />
    </div>
  );
};
