import { createStore} from 'redux';
import shortid from 'shortid';
import initialState from './initialState';
import strContains from '../utils/strContains';
//import { createSelector } from 'reselect';


// selectors
export const getFilteredCards = ({ cards, searchTerm}, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title,searchTerm));
export const getColumnsByList = ({columns}, listId) => columns
.filter((column) => column.listId === listId);
export const getListById = ({lists}, listId) => lists.find(list => list.id === listId);
export const getAllLists = state => state.lists;
export const getFavoriteCards = state => state.cards.filter(card => card.isFavorite === true)



//action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard = payload => ({type: 'ADD_CARD', payload});
export const updateSearchTerm = payload => ({ type:'UPDATE_SEARCHTERM', payload});
export const addList = payload => ({type: 'ADD_LIST', payload});
export const toggleCardFavorite = payload => ({type: 'TOGGLE_CARD_FAVORITE', payload});
export const deleteCard = payload => ({type: 'DELETE_CARD', payload});

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
    
    case 'T0GGLE_CARD_FAVORITE':
      return { ...state, cards: state.cards.map(card => (card.id === action.payload.id) ? { ...card, isFavorite: !card.isFavorite } : card) };

    case 'DELETE_CARD':
      return {...state, cards: state.cards.filter(card => (card.id !== action.payload.id))};
    
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