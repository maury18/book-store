const CHECK_STATUS = 'STATUS_OF_CATEGORIES';
const initialState = [];

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return { status: 'Under construction' };
    default:
      return state;
  }
};

export const checkStatus = () => ({
  type: CHECK_STATUS,
});

export default categoriesReducer;
