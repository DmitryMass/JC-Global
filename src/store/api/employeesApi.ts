import { IEmployee } from '@/types/employee';
import { IEmployeesCategory } from '@/types/employeesCategory';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const URL = 'http://localhost:5005';

interface IPlanData {
  frontPlan?: string;
  backPlan?: string;
  month: string;
}

export const employeesApi = createApi({
  reducerPath: 'employeesApi',
  tagTypes: ['Employees'],
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (build) => ({
    getCategories: build.query<IEmployeesCategory, void>({
      query: () => ({
        url: '/employees/categories',
      }),
      transformResponse: (response: IEmployeesCategory[]): IEmployeesCategory =>
        Object.values(response)[0],
    }),
    getEmployee: build.query<IEmployee, string>({
      query: (id) => ({
        url: `/employees/employee/${id}`,
        providesTags: [
          { type: 'Employee', id: (employeeId: any) => employeeId },
        ],
      }),
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
      invalidatesTags: [{ type: 'Employees', id: 'employeeId' }],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetEmployeeQuery,
  useCreateEmployeePlanMutation,
} = employeesApi;
