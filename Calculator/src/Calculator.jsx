// create a react class based component that implement
// a calculator, implement a grid of buttons to display
// basic calculator. display a textbox that will be disabled
// and it will be used to display userinput
// perform basic operations and display the result
// +,-,*,/,%,**
// operand1, operand2, operator, result
import React, { Component } from "react";
class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      op1: "",
      op2: "",
      operator: "",
      result: "",
      v1: true,
    };
  }
  onButtonClick = (value) => {
    this.setState((prevState) => {
      if (prevState.v1) {
        return {
          op1: prevState.op1 + value,
          result: prevState.result + value,
        };
      } else {
        return {
          op2: prevState.op2 + value,
          result: prevState.result + value,
        };
      }
    });
  };
  onOperatorClick = (operator) => {
    this.setState({
      operator: operator,
      v1: false,
      result: this.state.result + operator,
    });
  };
  onEvaluteClick = () => {
    const { op1, op2, operator } = this.state;
    var t1 = parseInt(op1);
    var t2 = parseInt(op2);
    switch (operator) {
      case "+":
        this.setState({ result: t1 + t2 });
        break;
      case "-":
        this.setState({ result: t1 - t2 });
        break;
      case "*":
        this.setState({ result: t1 * t2 });
        break;
      case "/":
        this.setState({ result: t1 / t2 });
        break;
      case "%":
        this.setState({ result: t1 % t2 });
        break;
      case "**":
        this.setState({ result: t1 ** t2 });
        break;
    }
  };
  render() {
    const { result } = this.state;
    return (
      <>
        <input type="text" disabled value={result} />
        <br />
        <button onClick={() => this.onButtonClick("1")}>1</button>
        <button onClick={() => this.onButtonClick("2")}>2</button>
        <button onClick={() => this.onButtonClick("3")}>3</button>
        <button onClick={() => this.vonButtonClick("4")}>4</button>
        <br />
        <button onClick={() => this.onButtonClick("5")}>5</button>
        <button onClick={() => this.onButtonClick("6")}>6</button>
        <button onClick={() => this.onButtonClick("7")}>7</button>
        <button onClick={() => this.onButtonClick("8")}>8</button>
        <br />
        <button onClick={() => this.onButtonClick("9")}>9</button>
        <button onClick={() => this.onButtonClick("0")}>0</button>
        <button onClick={() => this.onOperatorClick("+")}>+</button>
        <button onClick={() => this.onOperatorClick("-")}>-</button>
        <br />
        <button onClick={() => this.onOperatorClick("*")}>*</button>
        <button onClick={() => this.onOperatorClick("/")}>//</button>
        <button onClick={() => this.onOperatorClick("**")}>**</button>
        <button onClick={() => this.onEvaluteClick()}>=</button>
      </>
    );
  }
}
export default Calculator;
