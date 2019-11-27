import React, { Component } from "react";
import BudgetList from "../BudgetList";

/**
 * @abstract This component should load and provide the store to the lower components
 */

class BudgetApp extends Component {
  state = {};

  componentDidMount() {
    /**
     * @todo Load items from local storage.
     * @todo Set items to state and pass to store.
     * @todo return budgets.length < 3 ? <CreateBudget/> : null
     */
    // return dispatch({"LOAD_DATA"});
    this.loadData();
  }

  loadData = () => {
    let budgets = JSON.parse(localStorage.getItem("devBudgets"));
    // return dispatch({ type: "LOAD_DATA" });
    this.setState({
      budgets: budgets,
      devBudgets: this.loadDevData()
    });
  };

  loadDevData = () => {
    /**
     * @abstract Seeds one reports to the LocalStorage. For development purposes only.
     *
     */
    let budgets = [];

    budgets.push(
      { amount: 1000, description: "Dummy description - 1" },
      { amount: 7500, description: "Dummy description - 2" },
      { amount: 350, description: "Dummy description - 3" }
    );
    console.log("From Container, seeding records for development purposes");
    localStorage.setItem("devBudgets", JSON.stringify(budgets));

    return JSON.parse(localStorage.getItem("devBudgets"));
  };

  render() {
    return (
      <>
        <div className="BudgetApp">
          <h1 className="AppLogo">Le Budget App</h1>
          <BudgetList budgets={this.state.devBudgets} />
          {/* this.state.budgets.length < 3 ? <CreateBudget/> : null */}
        </div>
      </>
    );
  }
}

export default BudgetApp;
