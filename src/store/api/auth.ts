import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const URL = 'http://localhost:5005';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (build) => ({
    register: build.mutation<{ msg: string }, FormData>({
      query: (body) => ({
        url: '/admin/register',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useRegisterMutation } = authApi;
