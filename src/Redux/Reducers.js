const { actions } = require("./actions");
const { fetchFromLocalStorage, saveToLocalStorage } = require('../utils/utils')

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

      let budgets = fetchFromLocalStorage(state);

      return Object.assign({}, state, {budgets: budgets});

      /**
       * @api Saves one new record into the local storage
       * @note Records from the localStorage are retrieved, if the object retrieved is {@literal null},
       *       the object will be overwritten with the payload provided, 
       *       and set to the localStorage to then be returned as state.
       */

   case actions.CREATE:
      
      if(action.payload.budget){

           saveToLocalStorage(state, action.payload.budget);

          return Object.assign({}, state, {budgets: JSON.parse(localStorage.getItem("budgets"))})
        }

      return Object.assign({}, state, {budgets: JSON.parse(localStorage.getItem("budgets"))});  

    default:
      return state;
  }
}

module.exports = { budgets };
