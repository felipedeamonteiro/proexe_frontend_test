import { Reducer } from 'redux';
import produce from 'immer';
import { ActionTypes, IUserState } from './types';

const INITIAL_STATE: IUserState = {
  users: [],
}

const userData: Reducer<IUserState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypes.addUsersToState: {
        const users = action.payload;
        console.log('redu users', users);
        users.forEach((user: any) => draft.users.push(user));
        break;
      }

      case ActionTypes.addUserToTable: {
        const user = action.payload;
        draft.users.push({
          id: state.users.length + 1,
          name: user.name,
          username: user.username,
          email: user.email,
          address: {
            city: user.city,
          },
        });
        break;
      }

      case ActionTypes.removeUserFromTable: {
        const id = action.payload;

        const userIndex = draft.users.findIndex(user => user.id === id);

        if (userIndex) {
          draft.users.splice(userIndex, 1);
        }
        break;
      }

      case ActionTypes.updateUserInfo: {
        const user = action.payload;

        const userIndex = draft.users.findIndex(innerUser => innerUser.id === user.id);

        if (userIndex) {
          draft.users.splice(userIndex, 1);
        }

        draft.users.push(user);
        break;
      }

      default: {
        return draft;
      }
    }
  });
};

export default userData;
