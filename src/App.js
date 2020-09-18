import React, { Component } from "react";
import "./App.css";
import Main from "./component/Maincomponent";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { configStore } from './Redux/configStore';

const store = configStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
