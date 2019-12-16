import React from "react";
import Budget from "./Budget";
import { connect } from "react-redux";

const BudgetList = props => {
  return (
    <>
      <div>
        <h1>Budget List</h1>
        {props.updated ? (
          <h1>Redux has been updated</h1>
        ) : (
          <h1>Not updated yet</h1>
        )}
        <div className="BudgetList">
          {props.budgets ? MapBudgets(props.budgets) : null}
        </div>
      </div>
    </>
  );
};

const MapBudgets = budgetList => {
  return budgetList.map((budget, index) => {
    return (
      <Budget className="Card Budget" key={`budget-${index}`} budget={budget} />
    );
  });
};

function mapStateToProps(state) {
  return Object.assign({}, state);
}

export default connect(mapStateToProps)(BudgetList);
