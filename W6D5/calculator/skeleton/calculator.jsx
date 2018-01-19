import React from 'react';

class Calculator extends React.Component{
  constructor(props){
    super(props);
    //your code here
    this.state = {
      num1: "",
      num2: "",
      result: "",
    };

    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.add = this.add.bind(this);
    this.sub = this.sub.bind(this);
    this.div = this.div.bind(this);
    this.mult = this.mult.bind(this);
    this.clear = this.clear.bind(this);
  }

  setNum1(e) {
    e.preventDefault();

    this.setState({
      num1: parseInt(e.target.value)
    });
  }

  setNum2(e) {
    e.preventDefault();

    this.setState({
      num2: parseInt(e.target.value)
    });
  }
  //your code here
  add(e) {
    e.preventDefault();

    this.setState({
      result: this.state.num1 + this.state.num2
    });
  }

  sub(e) {
    e.preventDefault();

    this.setState({
      result: this.state.num1 - this.state.num2
    });
  }

  mult(e) {
    e.preventDefault();

    this.setState({
      result: this.state.num1 * this.state.num2
    });
  }

  div(e) {
    e.preventDefault();

    this.setState({
      result: this.state.num1 / this.state.num2
    });
  }

  clear(e) {
    e.preventDefault();

    this.setState({
      num1: "",
      num2: "",
      result: ""
    });
  }

  render(){
    const {num1, num2, result} = this.state;

    return (
      <div>
        <input type="text" value={num1} onChange={this.setNum1}></input>
        <input type="text" value={num2} onChange={this.setNum2}></input>
        <button onClick={this.add}>+</button>
        <button onClick={this.sub}>-</button>
        <button onClick={this.mult}>*</button>
        <button onClick={this.div}>/</button>
        <button onClick={this.clear}>A/C</button>
        <h1>{result}</h1>
      </div>
    );
  }
}

export default Calculator;
