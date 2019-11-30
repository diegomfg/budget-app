module.exports.fetchAllRecords = () => {
  return JSON.parse(localStorage.getItem("budgets"));
};

module.exports.setAllRecords = budgets => {
  if (!budgets) return;
  return localStorage.setItem("budgets", JSON.stringify(budgets));
};
