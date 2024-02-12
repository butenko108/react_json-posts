import { useState } from 'react';

import { LoadingError, Pagination, PostsList } from 'features';
import { Container } from 'shared/ui';

import { useGetPostsByPageQuery } from './redux/posts-api';

function App() {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const { data, isLoading, isError, refetch } = useGetPostsByPageQuery(currentPageNumber);

  return (
    <main className="min-h-screen bg-night-sky">
      <LoadingError isLoading={isLoading} isError={isError} size="l">
        <Container isPadding className="py-10">
          {data && <PostsList posts={data.posts} className="mb-10" onRefetch={refetch} />}
          {data && (
            <Pagination currentPageNumber={currentPageNumber} onChange={setCurrentPageNumber} total={data.totalPages} />
          )}
        </Container>
      </LoadingError>
    </main>
  );
}

export default App;
