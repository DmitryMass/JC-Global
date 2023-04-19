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
    createGoals: build.mutation<
      { msg: string },
      { body: FormData; role: string }
    >({
      query: (body) => ({
        url: '/admin/goals',
        method: 'POST',
        body: body.body,
        headers: {
          role: body.role,
        },
      }),
      invalidatesTags: [{ type: 'Goals', id: 'goalsList' }],
    }),
    deleteGoal: build.mutation<
      { msg: string },
      { id: string; goalId: string; role: string }
    >({
      query: ({ id, goalId, role }) => ({
        url: `/admin/goals/${id}`,
        method: 'DELETE',
        headers: {
          goalid: goalId,
          role,
        },
      }),
      invalidatesTags: [{ type: 'Goals', id: 'goalsList' }],
    }),
    editGoal: build.mutation<{ msg: string }, IEditGoalData>({
      query: (body) => ({
        url: `/admin/goals/${body.id}`,
        method: 'PUT',
        body,
        headers: {
          role: body.role,
        },
      }),
      invalidatesTags: [{ type: 'Goals', id: 'goalsList' }],
    }),
    archivedCompanyGoal: build.mutation<
      { msg: string },
      { id: string; role: string }
    >({
      query: ({ id, role }) => ({
        url: `/admin/goals/${id}`,
        method: 'PATCH',
        headers: {
          role: role,
        },
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
