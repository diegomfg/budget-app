const { createStore } = require("redux");
const { budgets } = require("./Reducers");

const store = createStore(budgets);

module.exports = { store };
