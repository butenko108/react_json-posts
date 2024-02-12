import cn from 'classnames';

import { ChevronLeftURL } from 'assets';
import { Button } from 'shared/ui';

interface RenderCustomButtonsParams {
  page: number;
  type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next';
  currentPageNumber: number;
  total: number;
}

export const PaginationCustomButtons = ({ page, type, currentPageNumber, total }: RenderCustomButtonsParams) => {
  const isActive = page === currentPageNumber;
  const isPrevDisabled = currentPageNumber === 1;
  const isLastDisabled = currentPageNumber === total;

  switch (type) {
    case 'page':
      return (
        <Button
          className={
            isActive
              ? 'bg-white text-washed-black hover:bg-tangled-web'
              : 'bg-dark-elf text-white-smoke hover:bg-night-black'
          }
        >
          {page}
        </Button>
      );

    case 'prev':
      return (
        <Button
          className={cn('mr-1', isPrevDisabled ? 'bg-mortar-grey' : 'bg-white hover:bg-tangled-web')}
          isDisabled={isPrevDisabled}
        >
          <img
            src={ChevronLeftURL}
            alt="chevron left"
            className={cn('fill-night-sky', { 'opacity-60': isPrevDisabled })}
          />
        </Button>
      );

    case 'next':
      return (
        <Button
          className={cn('ml-1', isLastDisabled ? 'bg-mortar-grey' : 'bg-white hover:bg-tangled-web')}
          isDisabled={isLastDisabled}
        >
          <img
            src={ChevronLeftURL}
            alt="chevron left"
            className={cn('rotate-180 fill-night-sky', { 'opacity-60': isLastDisabled })}
          />
        </Button>
      );

    case 'jump-prev':
    case 'jump-next':
      return <Button className={'bg-dark-elf text-white-smoke hover:bg-night-black'}>...</Button>;

    default:
      return <></>;
  }
};
