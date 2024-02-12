import cn from 'classnames';
import { ReactNode } from 'react';

interface Props {
  className?: string;
  isPadding?: boolean;
  children: ReactNode;
  isFullWidth?: boolean;
}

export const Container = ({ className, isPadding = false, children, isFullWidth = true }: Props) => (
  <section className={cn('mx-auto w-full', { 'px-4 md:px-10': isPadding, 'max-w-[1268px]': isFullWidth }, className)}>
    {children}
  </section>
);
