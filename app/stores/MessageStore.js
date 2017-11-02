import { ReduceStore } from 'flux/utils';
import Dispatcher from '../dispatcher/AppDispatcher';

class MessageStore extends ReduceStore {
  getInitialState() {
    return { message: 'Hello World' };
  }

  getMessage() {
    return this.getState().message;
  }

  reduce(state, action) {
    switch (action.type) {
    case 'UPDATE_MESSAGE':
      return Object.assign({}, state, {
        message: action.message
      });

    default:
      return state;
    }
  }
}
export default (new MessageStore(Dispatcher));
