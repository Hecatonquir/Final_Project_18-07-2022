export default function updateGlobalFav(favourites) {
  return {
    type: "UPDATE_GLOBAL_FAVOURITE",
    payload: favourites
}
}
