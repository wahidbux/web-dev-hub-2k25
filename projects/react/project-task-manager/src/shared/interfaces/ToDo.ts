export interface IToDoItem {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: object;
  phone: string;
  website: string;
  company: object;
}

export type TOrder = "asc" | "desc";
