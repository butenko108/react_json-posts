import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { POSTS_BASE_URL } from './base-urls';

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

interface GetPostsByPage {
  posts: Post[];
  totalPosts: string;
}

export const postsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: POSTS_BASE_URL }),
  endpoints: builder => ({
    getPostsByPage: builder.query<GetPostsByPage, number | void>({
      query: (page = 1) => `?_page=${page}`,
      extraOptions: { maxRetries: 2 },
      transformResponse: (response: Post[], meta) => {
        const totalPosts = meta?.response?.headers.get('x-total-count') as string;

        return { posts: response, totalPosts };
      },
    }),
  }),
});

export const { useGetPostsByPageQuery } = postsApi;
