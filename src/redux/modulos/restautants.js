export const Types = {
  SET_RESTAURANTS: 'restaurants/SET_RESTAURANTS',
  SET_RESTAURANT: 'restaurants/SET_RESTAURANT',
};

const initialState = {
  restaurant: [],
  restaurantSelected: null,
};

export default function reducers(state = initialState, action) {
  switch (action.type) {
    case Types.SET_RESTAURANTS:
      return { ...state, restaurants: action.payload };
    case Types.SET_RESTAURANT:
      return { ...state, restaurant: action.payload };
    default:
      return state;
  }
}

export function setRestaurants() {
  return {
    type: Types.SET_RESTAURANTS,
  };
}
