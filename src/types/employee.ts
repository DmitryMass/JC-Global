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
  schedule: any[];
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
