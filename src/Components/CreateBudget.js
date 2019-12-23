import React, { Component } from "react";
import { actions } from '../Redux/actions'
import { store } from '../Redux/store'
import {connect} from 'react-redux';

class CreateBudget extends Component {

  componentDidMount = ()=>{
    store.subscribe(()=>{
      // console.log("Received new props to <CreateBudget/> :", this.props);
    })
  }

  setAmount = e => {
    this.setState({ amount: e.target.value });
  };

  setTitle = e => {
    this.setState({ title: e.target.value });
  };

  setDescription = (e)=>{
    this.setState({ description: e.target.value });
  }

  dispatchCreate = e => {
    e.preventDefault();
    e.stopPropagation();

    let newBudget = {title: this.state.title, amount: this.state.amount, description: this.state.description};

    store.dispatch({type: actions.CREATE, payload: {budget: newBudget} })
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
            onChange={this.setTitle}
          />
          <input
            type={"number"}
            name={"budget-amount"}
            placeholder={"Starting Amount"}
            onChange={this.setAmount}
          />
          <input type={"text"} 
                 name={"budget-description"} 
                 placeholder={"Description"} 
                 onChange={this.setDescription}
          />

          <button type={"submit"}>Create!</button>
        </form>
      </>
    );
  }
}

function mapStateToProps(state){
  return Object.assign({}, state);
}

export default connect(mapStateToProps)(CreateBudget);
