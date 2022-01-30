export enum ActionTypes {
  addUserToTable = 'ADD_USER_TO_TABLE',
  removeUserFromTable = 'REMOVE_USER_FROM_TABLE',
  updateUserInfo = 'UPDATE_USER_INFO',
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  city: string;
}

export interface ITableState {
  users: IUser[];
}
