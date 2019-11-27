const { actions } = require("./Actions");

function counter(state = 0, action) {
  switch (action.type) {
    case actions.INCREMENT:
      return action.offset ? state + action.offset : state + 1;
    case actions.DECREMENT:
      return action.offset ? state - action.offset : state - 1;
    case actions.GET:
      return "State is:" + state;
    default:
      return state;
  }
}

module.exports = { counter };
