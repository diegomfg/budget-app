const { actions } = require("./actions");
// const { fetchAllRecords, setAllRecords } = require("./wrapper");

const initialState = {
  budgets: [],
  updated: false
};

function budgets(state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_BUDGETS:
      /**
       * @note Not sure if I can call a function inside a reducer's action.
       */
      // let budgets = fetchAllRecords();

      let budgets = JSON.parse(localStorage.getItem("budgets"));

      return Object.assign({}, state, { budgets: budgets });

    case actions.SET_BUDGETS:
      // setAllRecords(action.budgets);
      if (action.budgets) {
        localStorage.setItem("budgets", JSON.stringify(action.budgets));
      }
      return Object.assign({}, state, {
        budgets: JSON.parse(localStorage.getItem("budgets"))
      });

    case actions.TEST:
      // console.log(
      //   "This is a test action, probably dispatched by a unit test launched in development mode. Dismiss this message."
      // );
      return Object.assign({}, state, { updated: !state.updated });
    default:
      return state;
  }
}

module.exports = { budgets };
