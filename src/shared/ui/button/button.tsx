import cn from 'classnames';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  isDisabled?: boolean;
  onClick?: () => void;
}

export const Button = ({ children, className, isDisabled = false, onClick }: Props) => (
  <button
    className={cn('flex h-8 w-8 items-center justify-center rounded duration-300', className)}
    disabled={isDisabled}
    onClick={onClick}
  >
    {children}
  </button>
);
