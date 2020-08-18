import { createStore } from "redux";

import {
  ADD_TO_VISIBLE_LOCATIONS_STACK,
  FLY_TO,
  REMOVE_FROM_VISIBLE_LOCATIONS_STACK,
  SET_DATA_LAYER
} from "./actions";

import { Viewport } from "./components/map";

const initialState = {
  viewport: new Viewport(41.221494, -75.40171, 12.5, 35, 40),
  visibleLocationsStack: [],
  datalayer: null
};

function travelApp(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_VISIBLE_LOCATIONS_STACK:
      return {
        ...state,
        visibleLocationsStack: [
          ...state.visibleLocationsStack,
          action.visibleLocation
        ]
      };
    case REMOVE_FROM_VISIBLE_LOCATIONS_STACK:
      return {
        ...state,
        visibleLocationsStack: state.visibleLocationsStack.filter(
          visibleLocation => visibleLocation.id != action.visibleLocationId
        )
      };
    case FLY_TO:
      return { ...state, ...{ viewport: action.viewport } };

    case SET_DATA_LAYER:
      return { ...state, ...{ datalayer: action.datalayer } };
  }

  return state;
}

let store = createStore(
  travelApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
