/* rides info state management */
const FETCH_RIDES = 'Rides/FETCH_RIDES';

const initialState = [];

export const fetchRides = (payload) => ({
  type: FETCH_RIDES,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RIDES:
      return action.payload;

    default:
      return state;
  }
};

export default reducer;
