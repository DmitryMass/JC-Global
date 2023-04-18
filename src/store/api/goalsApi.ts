import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IEditGoalData, IGoalsTypes } from '@/types/goalsTypes';

const URL = 'http://localhost:5005';

export const goalsApi = createApi({
  reducerPath: 'goalsApi',
  tagTypes: ['Goals', 'Arhive'],
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
    createGoals: build.mutation<{ msg: string }, FormData>({
      query: (body) => ({
        url: '/admin/goals',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Goals', id: 'goalsList' }],
    }),
    deleteGoal: build.mutation<{ msg: string }, { id: string; goalId: string }>(
      {
        query: ({ id, goalId }) => ({
          url: `/admin/goals/${id}`,
          method: 'DELETE',
          headers: {
            goalid: goalId,
          },
        }),
        invalidatesTags: [{ type: 'Goals', id: 'goalsList' }],
      }
    ),
    editGoal: build.mutation<{ msg: string }, IEditGoalData>({
      query: (body) => ({
        url: `/admin/goals/${body.id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: [{ type: 'Goals', id: 'goalsList' }],
    }),
    archivedCompanyGoal: build.mutation<{ msg: string }, string>({
      query: (id) => ({
        url: `/admin/goals/${id}`,
        method: 'PATCH',
      }),
      invalidatesTags: [
        { type: 'Goals', id: 'goalsList' },
        { type: 'Arhive', id: 'archiveList' },
      ],
    }),
    getArchiveCompanyGoals: build.query<IGoalsTypes[], void>({
      query: () => ({
        url: '/admin/archivedGoals',
      }),
      providesTags: (result: IGoalsTypes[] | any) =>
        result
          ? [
              ...result.map(({ id }: any) => ({ type: 'Arhive', id })),
              { type: 'Arhive', id: 'archiveList' },
            ]
          : [{ type: 'Arhive', id: 'archiveList' }],
    }),
  }),
});

export const {
  useGetGoalsQuery,
  useDeleteGoalMutation,
  useEditGoalMutation,
  useArchivedCompanyGoalMutation,
  useGetArchiveCompanyGoalsQuery,
  useCreateGoalsMutation,
} = goalsApi;
