import React, { Component } from "react";
import MortgageForm from "../components/MortgageForm";
import MortgageResult from "../components/MortgageResult";

class MortgageCalculator extends Component {
  constructor(props){
    super(props);
    this.state = {
      mortgageResult: []
    }
    this.handleAffordabilitySubmit = this.handleAffordabilitySubmit.bind(this)
  }


  handleAffordabilitySubmit(submittedInputSet){
    this.setState({ mortgageResult: submittedInputSet })
  }


  render (){
    return (
      <div className="mortgage-calculator">
      <h2>Mortgage Calculator</h2>
      <MortgageForm onSubmittedInputSet={this.handleAffordabilitySubmit}/>
      <MortgageResult mortgageResult={this.state.mortgageResult} />
      </div>
    )
  }
}

export default MortgageCalculator;
