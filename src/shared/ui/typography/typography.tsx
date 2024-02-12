import cn from 'classnames';
import { ElementType, HTMLAttributes, ReactNode } from 'react';

type TypographyVariant = 'h1' | 'h2' | 'p1' | 'p2';

type Props = HTMLAttributes<ElementType> & {
  className?: string;
  as?: ElementType;
  variant?: TypographyVariant;
  children?: ReactNode;
};

export const Typography = ({ className, as: Component = 'p', variant = 'p1', children, ...props }: Props) => (
  <Component
    {...props}
    className={cn(
      'font-roboto',

      { 'text-4xl font-bold': variant === 'h1' },
      { 'text-2xl font-medium': variant === 'h2' },

      { 'text-lg': variant === 'p1' },
      className,
    )}
  >
    {children}
  </Component>
);
