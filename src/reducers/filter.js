const CHANGE_FILTER = 'CHANGE_FILTER';

const filterReducer = (state = 'ALL', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.category;
    default: return state;
  }
};

export default filterReducer;
