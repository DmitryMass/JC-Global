import { INews } from '@/types/newsTypes';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const URL = 'http://localhost:5005';

export const newsApi = createApi({
  reducerPath: 'newsApi',
  tagTypes: ['News'],
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (build) => ({
    getNews: build.query<INews[], void>({
      query: () => ({
        url: '/admin/news',
      }),
      providesTags: (result: INews[] | any) =>
        result
          ? [
              ...result.map(({ id }: any) => ({ type: 'News', id })),
              { type: 'News', id: 'newsList' },
            ]
          : [{ type: 'News', id: 'newsList' }],
    }),
    createNews: build.mutation<
      { msg: string },
      { data: FormData; role: string }
    >({
      query: (body) => ({
        url: '/admin/news',
        method: 'POST',
        body: body.data,
        headers: {
          role: body.role,
        },
      }),
      invalidatesTags: [{ type: 'News', id: 'newsList' }],
    }),
    deleteNews: build.mutation<{ msg: string }, { id: string; role: string }>({
      query: ({ id, role }) => ({
        url: `/admin/news/${id}`,
        method: 'DELETE',
        headers: {
          role,
        },
      }),
      invalidatesTags: [{ type: 'News', id: 'newsList' }],
    }),
  }),
});

export const { useCreateNewsMutation, useGetNewsQuery, useDeleteNewsMutation } =
  newsApi;
