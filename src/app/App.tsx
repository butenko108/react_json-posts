import { useState } from 'react';

import { LoadingError, Pagination, PostsList } from 'features';
import { Container } from 'shared/ui';

import { useGetPostsByPageQuery } from './redux/posts-api';

function App() {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const { data, isLoading, isError, refetch, isFetching } = useGetPostsByPageQuery(currentPageNumber);

  return (
    <main className="min-h-screen bg-night-sky">
      <Container isPadding className="py-10">
        <LoadingError isLoading={isLoading} isError={isError} size="l">
          {data && (
            <>
              <PostsList posts={data?.posts} className="mb-10" onRefetch={refetch} isFetching={isFetching} />

              <Pagination
                currentPageNumber={currentPageNumber}
                onChange={setCurrentPageNumber}
                total={data.totalPages}
              />
            </>
          )}
        </LoadingError>
      </Container>
    </main>
  );
}

export default App;
