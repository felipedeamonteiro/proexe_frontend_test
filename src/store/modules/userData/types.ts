export enum ActionTypes {
  addUsersToState = '@usersData/ADD_USER_TO_STATE',
  addUserToTable = '@usersData/ADD_USER_TO_TABLE',
  removeUserFromTable = '@usersData/REMOVE_USER_FROM_TABLE',
  updateUserInfo = '@usersData/UPDATE_USER_INFO',
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    city: string;
  }
}

export interface IUserState {
  users: IUser[];
}
