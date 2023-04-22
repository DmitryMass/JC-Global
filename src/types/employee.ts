export interface IEmployee {
  _id?: string;
  role?: string;
  email: string;
  fullName: string;
  phoneNumber: string;
  photoPath: string;
  jobTitle: string;
  vacation?: string;
  category: string;
  plans: IPlans[];
  schedule: IEmployeeMonthSchedule[];
  createdAt?: string;
}

export interface IPlans {
  month: string;
  front?: {
    plan: string;
    active: string;
  };
  back?: {
    plan: string;
    active: string;
  };
}

export interface IEmployeeMonthSchedule {
  [month: string]: EmployeeDaySchedule[];
}

export interface EmployeeDaySchedule {
  date: string;
  dayWorked: boolean;
  dayWorkedCount: number;
  schedule: string;
}
