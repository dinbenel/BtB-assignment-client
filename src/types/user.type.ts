export interface IUser {
  id: string;
  email: string;
  firsName: string;
  lastName: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

export interface IUserResponse {
  user: IUser;
  token: string;
}
