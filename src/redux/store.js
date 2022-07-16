import { createStore } from 'redux';
import shortid from 'shortid';
import initialState from './initialState';
import strContains from '../utils/strContains.js';

//selectors
export const getFilteredCards = ({ cards, searchTerm}, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title,searchTerm));
export const updateSearchTerm = (payload) => ({type: 'UPDATE_SEARCHTERM', payload});

const reducer = (state, action) => {
  switch(action.type ){
    case 'ADD_COLUMN':
      return {...state, columns: [...state.columns, {...action.payload, id:shortid()}]};
    
    case 'ADD_Card':
      return {...state, cards: [...state.cards, {...action.payload, id:shortid()}]};
    
    case 'UPDATE_SEARCHTERM':
      return {...state, searchTerm: action.payload};
    default:
      return state;
  }
};

  const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;