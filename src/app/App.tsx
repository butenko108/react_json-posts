import { useState } from 'react';

import { LoadingError, PostsList } from 'features';
import { Container } from 'shared/ui';

import { useGetPostsByPageQuery } from './redux/posts-api';

function App() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, refetch } = useGetPostsByPageQuery(page);

  return (
    <main className="min-h-screen bg-night-sky">
      <LoadingError isLoading={isLoading} size="l" isError={isError}>
        <Container isPadding className="py-10">
          {data?.posts && <PostsList posts={data.posts} />}
        </Container>
      </LoadingError>
    </main>
  );
}

export default App;
