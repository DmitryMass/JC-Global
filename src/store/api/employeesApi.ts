import { IEmployee } from '@/types/employee';
import { IEmployeesCategory } from '@/types/employeesCategory';
import { IArchiveScheduleData, IMarkTheShiftData } from '@/types/scheduleTypes';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const URL = 'http://localhost:5005';

export const employeesApi = createApi({
  reducerPath: 'employeesApi',
  tagTypes: ['Employee'],
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (build) => ({
    getCategories: build.query<IEmployeesCategory, void>({
      query: () => ({
        url: '/employees/categories',
      }),
      transformResponse: (response: IEmployeesCategory[]): IEmployeesCategory =>
        Object.values(response)[0],
      providesTags: [{ type: 'Employee', id: 'categories' }],
    }),
    getEmployee: build.query<IEmployee, string>({
      query: (id) => ({
        url: `/employees/employee/${id}`,
      }),
      providesTags: [{ type: 'Employee', id: 'employeeId' }],
    }),
    createEmployeePlan: build.mutation<
      any,
      { data: FormData; id: string; role: string }
    >({
      query: ({ data, id, role }) => ({
        url: `/admin/plan/${id}`,
        method: 'POST',
        body: data,
        headers: {
          role,
        },
      }),
      invalidatesTags: [{ type: 'Employee', id: 'employeeId' }],
    }),
    setEmployeePlanActive: build.mutation<any, { data: FormData; id: string }>({
      query: ({ data, id }) => ({
        url: `/admin/employeePlan/${id}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: [{ type: 'Employee', id: 'employeeId' }],
    }),
    markTheShift: build.mutation<{ msg: string }, IMarkTheShiftData>({
      query: ({ id, dayWorked, dayWorkedCount, date, month, schedule }) => ({
        url: `/admin/schedule/${id}`,
        method: 'PUT',
        body: { dayWorked, dayWorkedCount, date, month, schedule },
      }),
      invalidatesTags: [{ type: 'Employee', id: 'employeeId' }],
    }),
    setEmployeeSchedule: build.mutation<
      { msg: string },
      { data: FormData; id: string; role: string }
    >({
      query: ({ data, id, role }) => ({
        url: `/admin/schedule/${id}`,
        method: 'POST',
        body: data,
        headers: {
          role,
        },
      }),
      invalidatesTags: [{ type: 'Employee', id: 'employeeId' }],
    }),
    setArchiveEmployeeSchedule: build.mutation<
      { msg: string },
      IArchiveScheduleData
    >({
      query: ({ month, date, id, role }) => ({
        url: `/admin/schedule/archive/${id}`,
        method: 'POST',
        body: { month, date },
        headers: {
          role,
        },
      }),
      invalidatesTags: [{ type: 'Employee', id: 'employeeId' }],
    }),
    fireEmployee: build.mutation<{ msg: string }, string>({
      query: (id) => ({
        url: `/employees/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [
        { type: 'Employee', id: 'employeeId' },
        { type: 'Employee', id: 'categories' },
      ],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetEmployeeQuery,
  useCreateEmployeePlanMutation,
  useSetEmployeePlanActiveMutation,
  useMarkTheShiftMutation,
  useSetEmployeeScheduleMutation,
  useSetArchiveEmployeeScheduleMutation,
  useFireEmployeeMutation,
} = employeesApi;
