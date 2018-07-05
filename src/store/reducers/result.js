import * as actionTypes from '../actions';

const initialState = {
  results: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.ADD_RESULT:
      return {
        ...state,
        results: state.results.concat({id: new Date(), value: action.result + " "})
      }  
    case actionTypes.DELETE_RESULT:
    const updatedArray = state.results.filter(result => result.id !== action.filteredId)
    return {
      ...state,
      results: updatedArray
    }
  }
  return state 
}
  // if(action.type === "INCREMENT") {
  //   return {
  //     ...state,
  //     counter: state.counter + 1
  //   }
  // }
  // if(action.type === "DECREMENT") {
  //   return {
  //     ...state,
  //     counter: state.counter - 1
  //   }
  // }
  // if(action.type === "ADD") {
  //   return {
  //     ...state,
  //     counter: state.counter + action.val
  //   }
  // }
  // if(action.type === "SUBSCTRACT") {
  //   return {
  //     ...state,
  //     counter: state.counter - action.val
  //   }
  // }
  // return state

export default reducer;