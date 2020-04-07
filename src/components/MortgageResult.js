import React from "react";

const MortgageResult = (props) => {

  if(!props.mortgageResult.name) return null;
  return (
    <div>
    <h2>You affordability result:</h2>
    <h4>Your Name: {props.mortgageResult.name}</h4>
    <p>Income #1: {props.mortgageResult.income1}</p>
    <p>Income #2 / Bonus: {props.mortgageResult.income2}</p>
    <p>Deposit: {props.mortgageResult.deposit}</p>
    <p>Other Expenses: {props.mortgageResult.otherCommitments}</p>

    <h4>Max Value of the property you can afford:
    {(parseInt(props.mortgageResult.income1)+parseInt(props.mortgageResult.income2))*3 + parseInt(props.mortgageResult.deposit) - parseInt(props.mortgageResult.otherCommitments)}</h4>

    <p>Interest rate: {props.mortgageResult.interestRate}%</p>
    <p>Length of the repayment term: {props.mortgageResult.term}</p>

    <h4>Your monthly repayments would be:</h4>



    </div>
  )
}

export default MortgageResult;
