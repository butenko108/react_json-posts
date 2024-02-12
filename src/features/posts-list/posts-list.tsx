import { PostCard } from 'features';
import { Post } from 'shared/types';
import { Typography } from 'shared/ui';

interface Props {
  posts: Post[];
}

export const PostsList = ({ posts }: Props) => {
  return (
    <div>
      <Typography as="h1" variant="h1" className="mb-10 text-white-smoke">
        Posts list
      </Typography>

      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {posts.map(post => (
          <li key={post.id}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
};
