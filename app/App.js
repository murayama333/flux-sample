import React from "react";
import ReactDOM from "react-dom";
import { Container } from 'flux/utils';
import Message from "./components/Message.js";
import MessageStore from "./stores/MessageStore.js";
import ActionCreator from "./actions/ActionCreator.js";

class App extends React.Component{

  render() {
    const { message } = this.state;
    return (
      <div>
        <h1>Flux Sample.</h1>
        <Message text={message} onClick={ActionCreator.updateMessage} />
      </div>
    );
  }

  static getStores() {
    return [ MessageStore ];
  }

  static calculateState(_prevState) {
    return {
      message: MessageStore.getMessage()
    };
  }
}

const AppContainer = Container.create(App);

ReactDOM.render(
  <AppContainer />,
  document.getElementById('root')
);
