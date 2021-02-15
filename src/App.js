import React, { Component } from "react";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ConfigureStore } from './redux/createStore';
import Main from './components/Main';

const store = ConfigureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Header />
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;