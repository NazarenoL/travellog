export const FLY_TO = "FLY_TO";
export const SET_DATA_LAYER = "SET_DATA_LAYER";

/*
 * Action creators
 */
export function flyTo(viewport) {
  return { type: FLY_TO, viewport };
}

export function setDataLayer(datalayer) {
  return { type: SET_DATA_LAYER, datalayer };
}
