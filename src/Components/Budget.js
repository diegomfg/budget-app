import React from "react";
import styled from "styled-components";

const BudgetSection = styled.section`
  border: 1px solid pink;
`;

const Budget = props => {
  return (
    <BudgetSection className="Card Budget">
      <h1 className="Budget-title">{props.budget.title}</h1>
      <h2 className="Budget-amount">{props.budget.amount}</h2>
      <p className="Budget-description">{props.budget.description}</p>
    </BudgetSection>
  );
};

export default Budget;
