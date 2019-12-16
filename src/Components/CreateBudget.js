import React, { Component } from "react";

class CreateBudget extends Component {
  setAmount = e => {
    console.log("Amount:", e.target.value);
    this.setState({ amount: e.target.value });
  };

  setName = e => {
    console.log("Name: ", e.target.value);
    this.setState({ name: e.target.value });
  };

  dispatchCreate = e => {
    e.stopPropagation();
    e.preventDefault();
    console.log("Form: ", e.target);
  };
  render() {
    return (
      <>
        <h1>Create new budget</h1>
        <form onSubmit={this.dispatchCreate}>
          <input
            type={"text"}
            name={"budget-title"}
            placeholder={"Title"}
            onChange={this.setName}
          />
          <input
            type={"number"}
            name={"budget-amount"}
            placeholder={"Starting Amount"}
            onChange={this.setAmount}
          />
          <button type={"submit"}>Create!</button>
        </form>
      </>
    );
  }
}

export default CreateBudget;
