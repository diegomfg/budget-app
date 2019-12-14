import React, { Component } from "react";
import BudgetList from "../BudgetList";
import { store } from "../../Redux/store";
import { actions } from "../../Redux/actions";
// import CreateBudget from "../CreateBudget";
import { connect } from "react-redux";

store.subscribe(() => {
  console.log("Some action has been dispatched!", store.getState());
});

class BudgetApp extends Component {
  state = {};

  componentDidMount = () => {
    // this.seedBudgets();
    console.log("Props from App.js inside <BudgetApp/>", this.props);
  };

  testRedux = () => {
    store.dispatch({ type: actions.TEST });
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
      /**
       * @TODO replace these setState to this.props.dispatch({type: Actions.setBudgets, budgets: budgets})
       */
      this.setState({ budgets: JSON.parse(localStorage.getItem("budgets")) });
    }

    this.setState({ budgets });
  };

  render() {
    return (
      <>
        <div className="BudgetApp">
          <h1 className="AppLogo">Le Budget App</h1>
          <BudgetList />
          <button onClick={this.testRedux}>Click me bro</button>
          {/* if there are less than 5 budgets in the app, show <Link> to <CreateBudget/> */}
          {/* {this.props.budgets ? null : <Link to="/create" component={CreateBudget}> <CreateBudget />} </Link>*/}
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
