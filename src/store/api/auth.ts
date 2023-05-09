import { ILoginData } from '@/types/authTypes';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const URL = 'http://localhost:5005';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (build) => ({
    register: build.mutation<{ msg: string }, { data: FormData; role: string }>(
      {
        query: ({ data, role }) => ({
          url: '/admin/register',
          method: 'POST',
          body: data,
          headers: {
            role,
          },
        }),
      }
    ),
    login: build.mutation<ILoginData, FormData>({
      query: (body) => ({
        url: '/employees/login',
        method: 'POST',
        body,
      }),
    }),
    resetPass: build.mutation<
      { msg: string },
      { data: FormData; role: string }
    >({
      query: ({ data, role }) => ({
        url: '/admin/resetpassword',
        method: 'POST',
        body: data,
        headers: {
          role,
        },
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useResetPassMutation } =
  authApi;
