import { FETCH_CURRENT_USER } from "../actions";

/**
 * DEPRECATED IN FAVOR OF GRAPHQL CACHE
 */
export default function(state = null, action) {
  switch (action.type) {
    case FETCH_CURRENT_USER:
      return action.payload.data || false;
    default:
      return state;
  }
}
