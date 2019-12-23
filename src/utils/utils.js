module.exports.fetchFromLocalStorage = (state, items = "budgets")=>{
  let budgets = JSON.parse(localStorage.getItem(items));

  if(!budgets){
    return [];
  }

  return budgets;
}

module.exports.saveToLocalStorage = (state, budget)=>{

  if(!budget || !state) return;

  let budgets = JSON.parse(localStorage.getItem("budgets"));

  if(!budgets){
    let newBudgets = [];
      newBudgets.push(budget)
      return localStorage.setItem("budgets", JSON.stringify(newBudgets));
  }

  budgets.push(budget);

  return localStorage.setItem("budgets", JSON.stringify(budgets));
}