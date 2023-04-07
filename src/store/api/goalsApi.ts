import { IGoalsTypes } from '@/types/goalsTypes';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const URL = 'http://localhost:5005';

export const goalsApi = createApi({
  reducerPath: 'goalsApi',
  tagTypes: ['Goals'],
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (build) => ({
    getGoals: build.query<IGoalsTypes[], void>({
      query: () => ({
        url: '/admin/goals',
      }),
      providesTags: (result: IGoalsTypes[] | any) =>
        result
          ? [
              ...result.map(({ id }: any) => ({ type: 'Goals', id })),
              { type: 'Goals', id: 'goalsList' },
            ]
          : [{ type: 'Goals', id: 'goalsList' }],
    }),
  }),
});

export const { useGetGoalsQuery } = goalsApi;
