import Dispatcher from '../dispatcher/AppDispatcher';

class ActionCreator {
  static updateMessage() {
    const message = 'IT CARET';
    Dispatcher.dispatch({
      type:  'UPDATE_MESSAGE',
      message: message
    });
  }
}

export default ActionCreator;
