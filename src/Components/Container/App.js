import React, { Component } from "react";
import BudgetList from "../BudgetList";

class BudgetApp extends Component {
  state = {};

  componentDidMount = () => {
    this.seedBudgets();
    console.log(this.state);
  };

  seedBudgets = () => {
    let budgets = JSON.parse(localStorage.getItem("budgets"));

    if (!budgets || budgets === undefined) {
      const budgets = [
        { amount: 1000, description: "Dummy Budget" },
        { amount: 1000, description: "Dummy Budget" },
        { amount: 1000, description: "Dummy Budget" }
      ];

      localStorage.setItem("budgets", JSON.stringify(budgets));

      this.setState({ budgets: JSON.parse(localStorage.getItem("budgets")) });
    }

    this.setState({ budgets });
  };

  render() {
    return (
      <>
        <div className="BudgetApp">
          <h1 className="AppLogo">Le Budget App</h1>
          <BudgetList budgets={this.state.budgets} />
          {/* this.state.budgets.length < 3 ? <CreateBudget/> : null */}
        </div>
      </>
    );
  }
}

export default BudgetApp;
