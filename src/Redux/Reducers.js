const { actions } = require("./actions");
const { fetchAllRecords, setAllRecords } = require("./wrapper");

console.log(fetchAllRecords, setAllRecords);

function budgets(state = {}, action) {
  switch (action.type) {
    case actions.FETCH:
      let budgets = fetchAllRecords();
      return Object.assign({}, state, { budgets: budgets });
    case actions.SET:
      setAllRecords(action.records);
      return Object.assign({}, state, {
        budgets: JSON.parse(localStorage.getItem("budgets"))
      });
    default:
      return state;
  }
}

module.exports = { budgets };
