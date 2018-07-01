import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from './types';

// GET
export const getItems = () => {
  return {
    type: GET_ITEMS
  };
};

// DELETE 
export const deleteItem = id => {
  return {
    type: DELETE_ITEM,
    payload: id

  };
};

// DELETE 
export const addItem = item => {
  return {
    type: ADD_ITEM,
    payload: item
  };
};
