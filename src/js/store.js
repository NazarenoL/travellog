import { createStore } from "redux";

import { FLY_TO, SET_DATA_LAYER } from "./actions";

import { Viewport } from "./components/map";

const initialState = {
  viewport: new Viewport(41.221494, -75.40171, 12.5, 35, 40),
  datalayer: null
};

function travelApp(state = initialState, action) {
  switch (action.type) {
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
