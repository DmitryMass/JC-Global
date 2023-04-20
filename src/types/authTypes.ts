export interface ILoginData {
  userData: ILogin;
}

export interface ILogin {
  email: string;
  fullName: string;
  role: string;
  token: string;
  id: string;
}
