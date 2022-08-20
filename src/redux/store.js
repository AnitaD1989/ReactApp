import { createStore} from 'redux';
import shortid from 'shortid';
import initialState from './initialState';
import strContains from '../utils/strContains';
//import { createSelector } from 'reselect';


// selectors
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard = payload => ({type: 'ADD_CARD', payload});
export const updateSearchTerm = payload => ({ type:'UPDATE_SEARCHTERM', payload});

export const addList = payload => ({type: 'ADD_LIST', payload});

//actions
export const getFilteredCards = ({ cards, searchTerm}, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title,searchTerm));

export const getColumnsByList = ({columns}, listId) => columns
.filter((column) => column.listId === listId);
export const getListById = ({lists}, listId) => lists.find(list => list.id === listId);
export const getAllLists = state => state.lists;


//action creators

const reducer = (state, action) => {
  switch(action.type ){
    case 'ADD_COLUMN':
      return {...state, columns: [...state.columns, {...action.payload, id:shortid()}]};
    
    case 'ADD_CARD':
      return {...state, cards: [...state.cards, {...action.payload, id:shortid()}]};
    
    case 'UPDATE_SEARCHTERM':
      return {...state, searchTerm: action.payload};
    
    case 'ADD_LIST':
      return {...state, lists: [...state.lists, {...action.payload, id:shortid()}]};
    
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