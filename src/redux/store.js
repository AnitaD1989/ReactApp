import { createStore, combineReducers} from 'redux';
import initialState from './initialState';
import listsReducer from './listsRedux';
import columnsReducer from './columnsRedux.js';
import cardsReducer from './cardsRedux';
import searchTermReducer from './searchTermRedux';

//reducers

const subreducers =  {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchTerm: searchTermReducer
}
const reducer = combineReducers(subreducers);


/*const reducer = (state, action) => {
  switch(action.type ){
    case 'ADD_COLUMN':
      return {...state, columns: [...state.columns, {...action.payload, id:shortid()}]};
    
    case 'ADD_CARD':
      return {...state, cards: [...state.cards, {...action.payload, id:shortid()}]};
     
    case 'UPDATE_SEARCHTERM':
      return {...state, searchTerm: action.payload};
    
    case 'ADD_LIST':
      return {...state, lists: [...state.lists, {...action.payload, id:shortid()}]};
    
    case 'TOGGLE_CARD_FAVORITE':
      return { ...state, cards: state.cards.map(card => (card.id === action.payload.id) ? { ...card, isFavorite: !card.isFavorite } : card) };

    case 'DELETE_CARD':
      return {...state, cards: state.cards.filter(card => (card.id !== action.payload.id))};
    
    default:
      return state;
  }
};*/

  const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;