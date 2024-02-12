import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { POSTS_ON_PAGE } from 'shared/constants';
import { Post } from 'shared/types';

import { BASE_URL } from './base-url';

const POST_URL = 'posts/';

interface GetPostsByPage {
  posts: Post[];
  totalPages: number;
}

export const postsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: builder => ({
    getPostsByPage: builder.query<GetPostsByPage, number | void>({
      query: (page = 1) => `${POST_URL}?_page=${page}`,
      extraOptions: { maxRetries: 2 },
      transformResponse: (response: Post[], meta) => {
        const totalPages = Number(meta?.response?.headers.get('x-total-count')) / POSTS_ON_PAGE;

        return { posts: response, totalPages };
      },
    }),
  }),
});

export const { useGetPostsByPageQuery } = postsApi;
