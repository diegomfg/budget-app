import React from "react";
import BudgetApp from "./Components/Container/App";
import { Provider } from "react-redux";
// import { budgets } from "./Redux/reducers";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import CreateBudget from "./Components/CreateBudget";
import { store } from "./Redux/store";

store.subscribe(() =>
  console.log("From the higher App.js component: ", store.getState())
);

const routes = [
  { path: "/", component: BudgetApp },
  { path: "/budget/create", component: CreateBudget }
];

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          {routes.map((route, index) => {
            return (
              <Route
                exact
                path={route.path}
                component={route.component}
                key={index}
              />
            );
          })}
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
