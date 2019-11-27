const { createStore } = require("redux");
const { counter } = require("../Reducers");

let store = createStore(counter);

store.subscribe(() => console.log(store.getState()));

store.dispatch({ type: "INCREMENT", offset: 6 });
store.dispatch({ type: "DECREMENT", offset: 2 });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "GET" });

/**
 * @abstract This is a dummy Redux script.
 *           Don't mind this file, it has nothing to do with the Budget App
 */
