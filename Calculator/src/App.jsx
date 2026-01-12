import React, { Component } from "react";
import "./Calculator.css";

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
    this.setState((prev) =>
      prev.v1
        ? { op1: prev.op1 + value, result: prev.result + value }
        : { op2: prev.op2 + value, result: prev.result + value }
    );
  };

  onOperatorClick = (operator) => {
    this.setState({
      operator,
      v1: false,
      result: this.state.result + operator,
    });
  };

  onEvaluateClick = () => {
    const { op1, op2, operator } = this.state;
    const t1 = parseInt(op1);
    const t2 = parseInt(op2);

    let res = "";
    switch (operator) {
      case "+": res = t1 + t2; break;
      case "-": res = t1 - t2; break;
      case "*": res = t1 * t2; break;
      case "/": res = t1 / t2; break;
      case "%": res = t1 % t2; break;
      case "**": res = t1 ** t2; break;
      default: return;
    }
    this.setState({ result: res.toString() });
  };

  render() {
    return (
      <div className="calculator">
        <input type="text" value={this.state.result} disabled />

        <div className="grid">
          {[1,2,3,4,5,6,7,8,9,0].map((n) => (
            <button key={n} onClick={() => this.onButtonClick(n.toString())}>
              {n}
            </button>
          ))}

          <button onClick={() => this.onOperatorClick("+")}>+</button>
          <button onClick={() => this.onOperatorClick("-")}>-</button>
          <button onClick={() => this.onOperatorClick("*")}>*</button>
          <button onClick={() => this.onOperatorClick("/")}>/</button>
          <button onClick={() => this.onOperatorClick("%")}>%</button>
          <button onClick={() => this.onOperatorClick("**")}>**</button>
          <button className="equal" onClick={this.onEvaluateClick}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
