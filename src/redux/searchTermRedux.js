// actions
const createActionName = actionName => `app/lists/${actionName}`;
const UPDATE_SEARCHTERM = createActionName('UPDATE_SEARCHTERM');

// action creators
export const updateSearchTerm = payload => ({ type:UPDATE_SEARCHTERM, payload});

const searchTermReducer = (statePart = '', action) => {
  switch(action.type) {
    case UPDATE_SEARCHTERM:
      return action.payload
    default:
      return statePart;
  }
}
export default searchTermReducer;