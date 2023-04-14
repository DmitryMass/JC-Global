import { IEmployee } from './employee';

export interface IEmployeesCategory {
  _id?: string;
  sales: IEmployee[];
  hr: IEmployee[];
  accountants: IEmployee[];
}
