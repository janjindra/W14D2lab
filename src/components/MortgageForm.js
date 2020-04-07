import React , { Component } from 'react';

class MortgageForm extends Component {
constructor(props) {
  super(props);

  this.state = {
    name: '',
    income1: '',
    income2: '',
    deposit: '',
    otherCommitments: '',
    interestRate: '',
    term: ''
  };

  this.handleNameChange = this.handleNameChange.bind(this);
  this.handleIncome1Change= this.handleIncome1Change.bind(this);
  this.handleIncome2Change= this.handleIncome2Change.bind(this);
  this.handleDepositChange= this.handleDepositChange.bind(this);
  this.handleOtherCommitmentsChange= this.handleOtherCommitmentsChange.bind(this);
  this.handleInterestRateChange= this.handleInterestRateChange.bind(this);
  this.handleTermChange= this.handleTermChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleNameChange(event){
  this.setState({ name: event.target.value })
}

handleIncome1Change(event){
  this.setState({income1: event.target.value})
}

handleIncome2Change(event){
  this.setState({income2: event.target.value})
}

handleDepositChange(event){
  this.setState({deposit: event.target.value})
}

handleOtherCommitmentsChange(event){
  this.setState({otherCommitments: event.target.value})
}

handleInterestRateChange(event){
  this.setState({interestRate: event.target.value})
}

handleTermChange(event){
  this.setState({term: event.target.value})
}

handleSubmit(event){
  event.preventDefault();
  const name = this.state.name.trim();
  const income1 = this.state.income1.trim();
  const income2 = this.state.income2.trim();
  const deposit = this.state.deposit.trim();
  const otherCommitments = this.state.otherCommitments.trim();
  const interestRate = this.state.interestRate.trim();
  const term = this.state.term.trim();

  if (!name || !income1 || !income2){
    return;
  }
  //update thel sit comments in comment box.
this.props.onSubmittedInputSet({
  name: name,
  income1: income1,
  income2: income2,
  deposit: deposit,
  otherCommitments: otherCommitments,
  interestRate: interestRate,
  term: term
});

  //reset the form to empty values
  this.setState({
    name: '',
    income1: '',
    income2: '',
    deposit: '',
    otherCommitments: '',
    interestRate: '',
    term: '',
  })
}


render(){
  return (
    <form className="mortgage-form" onSubmit={this.handleSubmit}>
      <input type="text" placeholder="Your Name" value={this.state.name} onChange = {this.handleNameChange}/>

      <input type="number" placeholder="Your income 1" value={this.state.income1} onChange = {this.handleIncome1Change} />

      <input type="number" placeholder="Your income 2" value={this.state.income2} onChange = {this.handleIncome2Change} />

      <input type="number" placeholder="Deposit" value={this.state.deposit} onChange = {this.handleDepositChange} />

      <input type="number" placeholder="Other expenses" value={this.state.otherCommitments} onChange = {this.handleOtherCommitmentsChange} />

      <input type="number" placeholder="Interest rate (in %)" value={this.state.interestRate} onChange = {this.handleInterestRateChange} />
      <input type="number" placeholder="Term (in months)" value={this.state.term} onChange = {this.handleTermChange} />

      <input type="submit" value="Calculate!" />
    </form>
  )
}

}

export default MortgageForm;
