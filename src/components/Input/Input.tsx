import { InputHTMLAttributes, useRef, useState } from "react";
import styles from "./Input.module.scss";
import { ArrowButton } from "../ArrowButton";
import { Clickable } from "../Clickable";
import classNames from "classnames";
import { Text } from "../Text";
import { NumberButtons } from "./NumberButtons";

export type InputProps = {
  options?: string[];
  onChange: (value: string) => void;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">;

export function Input({
  options,
  onChange,
  disabled,
  type = "text",
  value,
  ...commonProps
}: InputProps) {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const dropdown = useRef<HTMLUListElement>(null);
  const input = useRef<HTMLInputElement>(null);

  const handleKeyboardNavigation = (event: React.KeyboardEvent) => {
    if (!options) return;
    const key = event.key;

    event.preventDefault();
    let index = selectedIndex;
    if (key === "ArrowDown") index++;
    if (key === "ArrowUp") index--;
    index = Math.min(options?.length - 1, Math.max(index, 0));
    setSelectedIndex(index);

    if (key === "Enter" || key === " ") {
      setValue(options[index])();
    }

    if (key === "Escape") {
      focusInput();
    }
  };

  const setValue = (value: string) => () => {
    focusInput();
    if (onChange) {
      onChange(value);
    }
  };

  const focusInput = () => {
    if (!input.current) return;
    const current = input.current;
    current.focus();
  };

  const focusDropdown = () => {
    if (!dropdown.current) return;
    dropdown.current.focus();
  };

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        ref={input}
        onChange={({ target }) => onChange?.(target.value)}
        disabled={disabled}
        type={type}
        value={value}
        {...commonProps}
      />
      {type === "number" && (
        <NumberButtons disabled={disabled} value={value} onChange={onChange} />
      )}
      {options && <ArrowButton disabled={disabled} onClick={focusDropdown} />}
      {options && !disabled && (
        <ul
          className={styles.options}
          onKeyDown={handleKeyboardNavigation}
          ref={dropdown}
          tabIndex={0}
        >
          {options.map((value, index) => (
            <li key={value}>
              <Clickable
                className={classNames(
                  styles.option,
                  selectedIndex === index && styles.selected
                )}
                onClick={setValue(value)}
                onMouseEnter={() => setSelectedIndex(index)}
              >
                <Text>{value}</Text>
              </Clickable>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
