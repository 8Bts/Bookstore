const CHANGE_FILTER = 'CHANGE_FILTER';

const filterReducer = (state = '', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return {
        filter: action.category,
      };
    default: return state;
  }
};

export default filterReducer;
