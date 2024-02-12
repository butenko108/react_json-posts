import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Post } from 'shared/types';

import { BASE_URL } from './base-url';

const POST_URL = 'posts/';

interface GetPostsByPage {
  posts: Post[];
  totalPosts: string;
}

export const postsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: builder => ({
    getPostsByPage: builder.query<GetPostsByPage, number | void>({
      query: (page = 1) => `${POST_URL}?_page=${page}`,
      extraOptions: { maxRetries: 2 },
      transformResponse: (response: Post[], meta) => {
        const totalPosts = meta?.response?.headers.get('x-total-count') as string;

        return { posts: response, totalPosts };
      },
    }),
  }),
});

export const { useGetPostsByPageQuery } = postsApi;
