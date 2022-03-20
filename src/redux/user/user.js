/* user info state management */
const FETCH_USER = 'Rides/FETCH_USER';

const initialState = [];

export const fetchUser = (payload) => ({
  type: FETCH_USER,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload;

    default:
      return state;
  }
};

export default reducer;
