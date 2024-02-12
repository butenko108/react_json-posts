import cn from 'classnames';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  isDisabled?: boolean;
}

export const Button = ({ children, className, isDisabled = false }: Props) => (
  <button
    className={cn('flex h-8 w-8 items-center justify-center rounded duration-300', className)}
    disabled={isDisabled}
  >
    {children}
  </button>
);
