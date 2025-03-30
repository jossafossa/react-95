import { PropsWithChildren } from 'react';
import styles from './Text.module.scss';
import classNames from 'classnames';

export type TextProps = PropsWithChildren<{
  className?: string;
  as?: 'p' | 'span';
  size?: 'small' | 'medium' | 'large';
  muted?: boolean;
}>;

export const Text = ({
  children,
  size = 'medium',
  className,
  as = 'span',
  muted = false,
}: TextProps) => {
  const Component = as;
  return (
    <Component className={classNames(className, styles.text, styles.reset, styles[size], muted && styles.muted)}>
      {children}
    </Component>
  );
};
