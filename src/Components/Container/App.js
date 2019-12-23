import React, { Component } from "react";
import BudgetList from "../BudgetList";
import { store } from "../../Redux/store";
import { actions } from "../../Redux/actions";
import CreateBudget from "../CreateBudget";
import { connect } from "react-redux";

class BudgetApp extends Component {

  componentDidMount = () => {

    store.dispatch({type: actions.FETCH_BUDGETS });
    
    if(this.props.budgets !== null || this.props.budgets !== undefined){

      this.setState({budgets: this.props.budgets});
    }

    this.setState({budgets: []})

    // console.log("Props from App.js inside <BudgetApp/>", this.props);
  };

  render() {
    return (
      <>
        <div className="BudgetApp">
          <h1 className="AppLogo">Le Budget App</h1>
          <BudgetList />
          {this.props.budgets !== null && this.props.budgets !== undefined ? (
            <CreateBudget/>
          ) : null}
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return Object.assign({}, state)
}

export default connect(mapStateToProps)(BudgetApp);
