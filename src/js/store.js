import { createStore } from "redux";

import { FLY_TO, flyTo } from "./actions";

import { Viewport } from "./components/map";

const initialState = {
  viewport: new Viewport(41.221494, -75.40171, 12.5, 35, 40)
};

function travelApp(state = initialState, action) {
  switch (action.type) {
    case FLY_TO:
      return { ...state, ...{ viewport: action.viewport } };
  }

  return state;
}

let store = createStore(travelApp);
store.subscribe(() => console.log(store.getState()));
//
// // Dispatch some actions
store.dispatch(flyTo(new Viewport(41.221494, -75.40171, 15, 25, 40)));
// store.dispatch(flyTo({ latitude: "125" }));
// store.dispatch(flyTo({ longitude: "poop" }));

export default store;
