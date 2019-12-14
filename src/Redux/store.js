const { createStore } = require("redux");
const { budgets } = require("./reducers");

const store = createStore(budgets);

module.exports = { store };
