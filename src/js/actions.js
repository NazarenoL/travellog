export const ADD_TO_VISIBLE_LOCATIONS_STACK = "ADD_TO_VISIBLE_LOCATIONS_STACK";
export const FLY_TO = "FLY_TO";
export const REMOVE_FROM_VISIBLE_LOCATIONS_STACK =
  "REMOVE_FROM_VISIBLE_LOCATIONS_STACK";
export const SET_DATA_LAYER = "SET_DATA_LAYER";

/*
 * Action creators
 */
export function addToVisibleLocationsStack(visibleLocation) {
  return { type: ADD_TO_VISIBLE_LOCATIONS_STACK, visibleLocation };
}

export function removeFromVisibleLocationsStack(visibleLocationId) {
  return { type: REMOVE_FROM_VISIBLE_LOCATIONS_STACK, visibleLocationId };
}

export function flyTo(viewport) {
  return { type: FLY_TO, viewport };
}

export function setDataLayer(datalayer) {
  return { type: SET_DATA_LAYER, datalayer };
}

export class VisibleLocation {
  constructor(id, viewport) {
    this.id = id;
    this.viewport = viewport;
  }
}
