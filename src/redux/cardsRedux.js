import shortid from "shortid";
import strContains from '../utils/strContains';

// selectors 
export const getFilteredCards = ({ cards, searchTerm}, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title,searchTerm));
export const getFavoriteCards = state => state.cards.filter(card => card.isFavorite === true)

// actions
const createActionName = actionName => `app/lists/${actionName}`;
const ADD_CARD = createActionName('ADD_CARD');
const TOGGLE_CARD_FAVORITE = createActionName('TOGGLE_CARD_FAVORITE');
const DELETE_CARD = createActionName('DELETE_CARD');

// action creator
export const addCard = payload => ({type: 'ADD_CARD', payload});
export const toggleCardFavorite = payload => ({type: 'TOGGLE_CARD_FAVORITE', payload});
export const deleteCard = payload => ({type: 'DELETE_CARD', payload});

const cardsReducer = (statePart = [], action) => {
  switch(action.type) {
    case 'ADD_CARD':
      return [...statePart, { ...action.payload, id: shortid() }];
    case 'TOGGLE_CARD_FAVORITE':
      return statePart.map(card => (card.id === action.payload.id) ? { ...card, isFavorite: !card.isFavorite } : card);
    case 'DELETE_CARD':
      return statePart.filter(card => card.id !== action.payload.id);
    default:
    return statePart;
  }
};
export default cardsReducer;