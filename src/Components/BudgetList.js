import React, { useState, useEffect } from "react";
import Budget from "./Budget";
const BudgetList = props => {
  const [budgets, setBudgets] = useState(null);

  useEffect(() => {
    setBudgets(props.budgets);
    if (budgets) {
      console.log("BudgetList - ", budgets);
    }
  }, [props.budgets, budgets]);

  const MapBudgets = budgetList => {
    return budgetList.map((budget, index) => {
      return (
        <Budget
          className="Card Budget"
          key={`budget-${index}`}
          budget={budget}
        />
      );
    });
  };

  return (
    <>
      <div>
        <h1>Budget List</h1>
        <div className="BudgetList">{budgets ? MapBudgets(budgets) : null}</div>
      </div>
    </>
  );
};

export default BudgetList;
