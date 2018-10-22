import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import Buttons from "./components/Buttons.jsx";
import Historyboard from "./components/Historyboard.jsx";

class App extends Component {
  state = {
    result: undefined
  };
  render() {
    return (
      <div className="App">
      <Historyboard history={window.localStorage}/>

        <Buttons calculate={this.calculate} result={this.state.result} clearResult={this.clearResult} />
      </div>
    );
  }
  calculate = (exp) => {
    let date = Date.now();
    window.localStorage.setItem(`expression${date}`, exp);
    window.localStorage.getItem(`expression1`);
    const newResult = eval(exp);
    console.log(newResult);
     this.setState({
       result:newResult
     })
  }
  clearResult = () =>{
    this.setState({
      result:undefined
    })
  }
}

export default App;
