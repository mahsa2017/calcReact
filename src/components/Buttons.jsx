import React, { Component } from "react";
import "./Buttons.css";

class Buttons extends Component {
  state = {
    expression: ``
  };

  render() {
    // console.log(this.props.result, "<<<<<<");
    return <div>
        <br /> <br /> <br />
        <input defaultValue={this.props.result || this.props.result === 0 ? this.props.result : this.state.expression} className="in" type="text" name="" id="" />
        <div className="buttons">
          <button type="submit" value="1" onClick={this.handleClick}>
            1
          </button>
          <button type="submit" value="2" onClick={this.handleClick}>
            2
          </button>
          <button type="submit" value="3" onClick={this.handleClick}>
            3
          </button> <br />
          <button type="submit" value="4" onClick={this.handleClick}>
            4
          </button>
          <button type="submit" value="5" onClick={this.handleClick}>
            5
          </button>
          <button type="submit" value="6" onClick={this.handleClick}>
            6
          </button> <br />
          <button value="7" onClick={this.handleClick} type="submit">
            7
          </button>
          <button value="8" onClick={this.handleClick} type="submit">
            8
          </button>
          <button value="9" onClick={this.handleClick} type="submit">
            9
          </button> <br />
          <button value="0" onClick={this.handleClick} type="submit">
            0
          </button>
          <button value="-" onClick={this.handleClick} type="submit">
            -
          </button>
          <button value="+" onClick={this.handleClick} type="submit">
            +
          </button>
          <br />
          <button value="*" onClick={this.handleClick} type="submit">
            *
          </button>
          <button value="/" onClick={this.handleClick} type="submit">
            /
          </button>
          <button onClick={this.clearInput} type="submit">
            Clear
          </button> <br/>
          <button onClick={() => this.props.calculate(this.state.expression)} type="submit" id="enter">
            Enter
          </button>
          <br />
        </div>
      </div>;
  }
  handleClick = e => {
    const newExpression = this.state.expression;
    // console.log(localStorage);
    this.setState({
      expression: newExpression.concat(`${e.target.value}`)
    });
  };
   clearInput = () => {
   this.props.clearResult()
   this.setState({
     expression:``
   })
}
}

export default Buttons;
