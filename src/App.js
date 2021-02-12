import React, { Component } from "react";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import Main from './components/Main';

class App extends Component {
  render() {
    return (
     
        <BrowserRouter>
          <div className="App">
            <Header />
           <Main />
          </div>
        </BrowserRouter>
      
    );
  }
}

export default App;