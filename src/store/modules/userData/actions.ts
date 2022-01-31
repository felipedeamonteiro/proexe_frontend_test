import { ActionTypes, IUser } from './types';

export function addUsersToState(users: IUser[]): any {
  return {
    type: ActionTypes.addUsersToState,
    payload: users,
  };
}

export function addUserAction(user: IUser): any {
  return {
    type: ActionTypes.addUserToTable,
    payload: user,
  };
}

export function removeUserAction(user: IUser): any {
  return {
    type: ActionTypes.removeUserFromTable,
    payload: user.id,
  };
}

export function updateUserAction(user: IUser): any {
  return {
    type: ActionTypes.updateUserInfo,
    payload: user,
  };
}
