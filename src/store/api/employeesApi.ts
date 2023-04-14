import { IEmployee } from '@/types/employee';
import { IEmployeesCategory } from '@/types/employeesCategory';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const URL = 'http://localhost:5005';

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
      }),
    }),
  }),
});

export const { useGetCategoriesQuery, useGetEmployeeQuery } = employeesApi;
