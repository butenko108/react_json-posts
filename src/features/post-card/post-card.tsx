import { Post } from 'shared/types';
import { Typography } from 'shared/ui';

interface Props {
  post: Post;
}

export const PostCard = ({ post }: Props) => (
  <div className="h-full rounded-lg bg-dark-elf px-4 py-3 duration-300 hover:bg-night-black">
    <Typography as="h2" variant="h2" className="mb-3 truncate text-white-smoke first-letter:uppercase">
      {post.title}
    </Typography>

    <Typography className="text-white first-letter:uppercase">{post.body}</Typography>
  </div>
);
