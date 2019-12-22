const { actions } = require("./actions");

const initialState = {
  budgets: []
};

function budgets(state = initialState, action) {
  switch (action.type) {
    /**
     * @api This action fetches the records from the local storage.
     * @note If the records from the localStorage are not valid, 
     *      the action will return a new empty array along with the original state.
     */
    case actions.FETCH_BUDGETS:

     let budgets = JSON.parse(localStorage.getItem("budgets"));

     if(!budgets){
       return Object.assign({}, state, { budgets: [] })
     }

      return Object.assign({}, state, { budgets: budgets });



      /**
       * @api Saves one new record into the local storage
       * @note Records from the localStorage are retrieved, if the object retrieved is {@literal null},
       *       the object will be overwritten with the payload provided, 
       *       and set to the localStorage to then be returned as state.
       */

    case actions.CREATE:
      
      if(action.payload.budget){

        let budgets = JSON.parse(localStorage.getItem("budgets"));
        
        if(!budgets){

          let budgets = [];

          budgets.push(action.payload.budget)
          
          localStorage.setItem("budgets", JSON.stringify(budgets))

          return Object.assign({}, state, {budgets: JSON.parse(localStorage.getItem("budgets"))})
        }

        budgets.push(action.payload.budget);

        localStorage.setItem("budgets", JSON.stringify(budgets))

      }

      return Object.assign({}, state, {budgets: JSON.parse(localStorage.getItem("budgets"))});  

    default:
      return state;
  }
}

module.exports = { budgets };
