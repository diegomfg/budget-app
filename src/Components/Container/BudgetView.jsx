import React, { Component } from "react";
import { connect } from "react-redux";

class BudgetView extends Component {
  state = {};
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div className="Wrapper Container">
        <h1>Budget View</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return Object.assign({}, state, { budget: state.budget });
};

export default connect(mapStateToProps)(BudgetView);
