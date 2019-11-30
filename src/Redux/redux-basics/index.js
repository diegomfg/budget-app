const { createStore } = require("redux");
const { reducer } = require("../reducers");
const { actions } = require("../actions");

let store = createStore(reducer, { budgets: [] });

store.dispatch({ type: actions.FETCH });
store.dispatch({ type: actions.SET });

store.subscribe(() => console.log(store.getState()));

/**
 * @abstract This is a dummy Redux script.
 *           Don't mind this file, it has nothing to do with the Budget App
 */
