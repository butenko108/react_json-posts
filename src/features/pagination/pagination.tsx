import ReactPagination from 'rc-pagination/lib/Pagination';
import { Dispatch, SetStateAction } from 'react';

import { BREAKPOINTS } from 'shared/constants';
import { useMediaQuery } from 'shared/hooks';

import { PaginationCustomButtons } from './ui';

interface Props {
  currentPageNumber: number;
  onChange: Dispatch<SetStateAction<number>>;
  total: number;
}

export const Pagination = ({ currentPageNumber, onChange, total }: Props) => {
  const sm = useMediaQuery(BREAKPOINTS.sm);

  return (
    <div className="flex items-center justify-center">
      <ReactPagination
        showTitle={false}
        pageSize={1}
        showPrevNextJumpers={sm}
        showLessItems={!sm}
        total={total}
        current={currentPageNumber}
        onChange={onChange}
        className="flex items-center gap-[10px]"
        itemRender={(page, type) => (
          <PaginationCustomButtons page={page} type={type} currentPageNumber={currentPageNumber} total={total} />
        )}
      />
    </div>
  );
};
