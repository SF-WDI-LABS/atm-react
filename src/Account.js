import React, { Component } from 'react';

export default class Account extends Component {
  constructor() {
    super();
    this.state = {
      balance: 0,
      error: "",
    };
  }

  depositMoney() {
    let val = this.textBox.value;
    console.log(val);
    this.setState( oldState => {
      return { balance: (oldState.balance + (val * 100))}
    });
    this.textBox.value = "";
    this.setState({error: ""});
  }

  withdrawMoney() {
    let val = this.textBox.value * 100;
    console.log(val);
    if (this.state.balance >= val) {
      this.setState( oldState => {
        return { balance: (oldState.balance - val)}
      });
      this.setState({error: ""});
    } else {
      this.setState({error: "ERROR: WITHDRAWAL TOO LARGE"});
    }
    this.textBox.value = "";
  }
  render() {
    return (
      <div className="account">
        <h2>{ this.props.title }</h2>
        <div className="error">{ this.state.error }</div>
        <div className={this.state.balance === 0 ? "balance zero" : "balance"}>${ this.state.balance / 100 }</div>
        <input type="number" placeholder="enter an amount" ref={ (thing) => this.textBox = thing }/>
        <input type="button" value="Deposit" onClick={(e) => this.depositMoney() }/>
        <input type="button" value="Withdraw" onClick={(e) => this.withdrawMoney() }/>
      </div>
    )
  }
}
