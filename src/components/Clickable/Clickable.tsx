import {
  ForwardedRef,
  forwardRef,
  HTMLAttributes,
  PropsWithChildren,
} from "react";
import { Link, LinkProps } from "react-router-dom";
import styles from "./Clickable.module.scss";
import classNames from "classnames";

type SpanProps = HTMLAttributes<HTMLElement>;

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  onClick: () => void;
  className?: string;
};

export type ClickableProps = LinkProps | ButtonProps | SpanProps;

export const Clickable = forwardRef(
  (
    { className, ...props }: PropsWithChildren<ClickableProps>,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    const classes = classNames(styles.clickable, className);

    function isLinkProps(
      props: PropsWithChildren<ClickableProps>
    ): props is LinkProps {
      return ["to", "href"].some((prop) => prop in props);
    }

    function isButtonProps(
      props: PropsWithChildren<ClickableProps>
    ): props is ButtonProps {
      return "onClick" in props;
    }

    if (isLinkProps(props))
      return <Link className={classNames(classes, styles.anchor)} {...props} />;
    if (isButtonProps(props))
      return (
        <button
          className={classNames(classes, styles.button)}
          {...props}
          ref={ref}
        />
      );

    return <span className={classNames(classes)} {...props} ref={ref} />;
  }
);
