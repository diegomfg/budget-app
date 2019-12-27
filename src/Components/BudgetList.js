import React, {useEffect} from "react";
import Budget from "./Budget";
import { connect } from "react-redux";

const BudgetList = props => {

  useEffect(()=>{
    // console.log("useEffect at <BudgetList/>, props have changed: ", props)
  }, [props, props.budgets])


  return (
    <>
      <div>
        <h1>Budget List</h1>
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
      <Budget key={`budget-${index}`} budget={budget} />
    );
  });
};

function mapStateToProps(state) {
  return Object.assign({}, state);
}

export default connect(mapStateToProps)(BudgetList);
