import React, { useState, useEffect } from "react";

const BudgetList = props => {
  const [state, setState] = useState(null);

  useEffect(() => {
    setState(props.budgets);
    if (state) {
      console.log("BudgetList - ", state);
    }
  }, [props.budgets, state]);

  const MapBudgets = budgetList => {
    return budgetList.map(budget => {
      return (
        <section className="Card Budget" key={Math.random() * 26}>
          <h1 className="Budget-Title">{budget.amount}</h1>
          <p className="Budget-description">{budget.description}</p>
        </section>
      );
    });
  };

  return (
    <>
      <div>
        <h1>Budget List</h1>
        <div className="BudgetList">{state ? MapBudgets(state) : null}</div>
      </div>
    </>
  );
};

export default BudgetList;
