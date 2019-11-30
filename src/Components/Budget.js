import React from "react";
import styled from "styled-components";

const BudgetSection = styled.section`
  width: 200px;
  height: 40px;
`;

const Budget = props => {
  return (
    <BudgetSection className="Card Budget">
      <h1 className="Budget-Title">{props.budget.amount}</h1>
      <p className="Budget-description">{props.budget.description}</p>
    </BudgetSection>
  );
};

export default Budget;
