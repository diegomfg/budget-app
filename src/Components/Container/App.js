import React, { Component } from "react";
import BudgetList from "../BudgetList";
import { store } from "../../Redux/store";
import { actions } from "../../Redux/actions";
import CreateBudget from "../CreateBudget";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

store.subscribe(() => {
  // console.log("Some action has been dispatched!", store.getState());
});

class BudgetApp extends Component {
  state = {};

  componentDidMount = () => {
    this.seedBudgets();
    // console.log("Props from App.js inside <BudgetApp/>", this.props);
  };

  testRedux = () => {
    store.dispatch({ type: actions.TEST });
  };

  seedBudgets = () => {
    store.dispatch({ type: actions.FETCH_BUDGETS });

    console.log("seedBudgets: ", this.props);

    if (this.props.budgets.length === 0 || !this.props.budgets) {
      const budgets = [
        { amount: 1000, description: "Dummy Budget" },
        { amount: 1000, description: "Dummy Budget" },
        { amount: 1000, description: "Dummy Budget" }
      ];

      /**
       * @abstract This function checks if there are any budgets in the local storage.
       *           If there are no budgets from the props, an action is dispatched and new dummy budgets are set.
       */
      store.dispatch({ type: actions.SET_BUDGETS, budgets: budgets });
    }
  };

  render() {
    return (
      <>
        <div className="BudgetApp">
          <h1 className="AppLogo">Le Budget App</h1>
          <BudgetList />
          <button onClick={this.testRedux}>Click me bro</button>
          {/* if there are less than 5 budgets in the app, show <Link> to <CreateBudget/> */}
          {this.props.budgets.length === 0 ? (
            <Link to="/budget/create" component={CreateBudget}>
              {" "}
              Create New Budget{" "}
            </Link>
          ) : null}
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    budgets: state.budgets
  };
}

export default connect(mapStateToProps)(BudgetApp);
