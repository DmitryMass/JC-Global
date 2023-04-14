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
  plans: any[];
  schedule: any[];
  createdAt?: string;
}
