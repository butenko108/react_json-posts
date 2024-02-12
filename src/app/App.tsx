import { useState } from 'react';

import { useGetPostsByPageQuery } from './store/posts-api';

function App() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching, refetch, error } = useGetPostsByPageQuery(page);

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>No posts</div>;
  }

  return (
    <div>
      <h1 className="text-5xl font-bold underline">Hello world!</h1>
      <button onClick={() => setPage(page + 1)}>Next</button>

      {data?.posts.map(post => <p key={post.id}>{post.id}</p>)}
    </div>
  );
}

export default App;
