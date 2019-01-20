import * as actions from '../consts/actions';

const initialState = {
  items: ['Clean house', 'Go to walk', 'Reply to emails', 'Learn Redux', 'Give star for marlo22 at GitHub'],
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_ITEM: {
      const newState = Object.assign({}, state);
      newState.items = [...state.items, action.item];
      return newState;
    }
    case actions.REMOVE_ITEM: {
      const newState = Object.assign({}, state);
      newState.items = [...state.items];
      newState.items.splice(action.id, 1);
      return newState;
    }
    default:
      return state;
  }
};

export default itemsReducer;
