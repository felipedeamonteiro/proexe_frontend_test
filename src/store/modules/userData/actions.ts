import { ActionTypes, IUser } from './types';

export function addUsersToState(users: IUser[]): any {
  return {
    type: ActionTypes.addUsersToState,
    payload: users,
  };
}

export function addUserAction(user: any): any {
  return {
    type: ActionTypes.addUserToTable,
    payload: user,
  };
}

export function removeUserAction(id: number): any {
  return {
    type: ActionTypes.removeUserFromTable,
    payload: id,
  };
}

export function updateUserAction(user: any): any {
  return {
    type: ActionTypes.updateUserInfo,
    payload: user,
  };
}
