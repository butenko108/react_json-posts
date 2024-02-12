import cn from 'classnames';
import { ReactNode } from 'react';

import { Spinner, SpinnerProps, Typography } from 'shared/ui';

interface Props extends SpinnerProps {
  children: ReactNode;
  spinnerClassName?: string;
  isFullHeight?: boolean;
  isError?: boolean;
}

export const LoadingError = ({
  isLoading,
  children,
  className,
  color,
  size,
  spinnerClassName,
  isFullHeight = true,
  isError = false,
}: Props) => (
  <>
    {isLoading ? (
      <div className={cn('flex items-center justify-center', { 'h-screen': isFullHeight }, className)}>
        <Spinner className={spinnerClassName} color={color} size={size} />
      </div>
    ) : isError ? (
      <div className={cn('flex items-center justify-center', { 'h-screen': isFullHeight }, className)}>
        <Typography as="h2" variant="h2" className="text-white-smoke">
          Ops! Something went wrong... Please, try reload the page.
        </Typography>
      </div>
    ) : (
      <>{children}</>
    )}
  </>
);
