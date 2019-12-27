import React, {useEffect, useState} from "react";
import styled from "styled-components";

const BudgetSection = styled.section`
  border: 1px solid pink;
`;

const Budget = props => {

  // const [state, setState] = useState({budget: {}})

  // useEffect(()=>{
  //   console.log(`Props received from parent component @ <Budget/>: `, props);
  //   setState({budget: props.budget})
  // }, [props])

  return (
    <BudgetSection className="Card Budget">
      <h1 className="Budget-title">{props.budget.title}</h1>
      <h2 className="Budget-amount">{props.budget.amount}</h2>
      <p className="Budget-description">{props.budget.description}</p>
      {/* There should be another button here with a link to the BudgetView component that renders more details about a specific  */}
    </BudgetSection>
  );
};

export default Budget;
