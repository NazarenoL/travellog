export const FLY_TO = "FLY_TO";

/*
 * Action creators
 */
export function flyTo(viewport) {
  return { type: FLY_TO, viewport };
}
