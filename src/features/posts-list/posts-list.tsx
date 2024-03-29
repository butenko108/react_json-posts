import { CircleArrowURL } from 'assets';
import { LoadingError, PostCard } from 'features';
import { Post } from 'shared/types';
import { Button, Typography } from 'shared/ui';

interface Props {
  posts: Post[];
  className?: string;
  onRefetch: () => void;
  isFetching: boolean;
}

export const PostsList = ({ posts, className, onRefetch, isFetching }: Props) => {
  return (
    <div className={className}>
      <div className="mb-10 flex items-center justify-between">
        <Typography as="h1" variant="h1" className="text-white-smoke">
          Posts list
        </Typography>

        <Button onClick={onRefetch} isDisabled={isFetching}>
          <img
            src={CircleArrowURL}
            alt="refetch posts button"
            className="h-8 w-8 stroke-white duration-300 hover:rotate-[360deg]"
          />
        </Button>
      </div>

      <LoadingError isLoading={isFetching} isFullHeight={false} className="min-h-[1384px] md:min-h-[684px]">
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {posts.map(post => (
            <li key={post.id}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      </LoadingError>
    </div>
  );
};
