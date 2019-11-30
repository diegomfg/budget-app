const { createStore } = require("redux");
const { budgets } = require("./reducers");

module.exports = { store: createStore(budgets) };
