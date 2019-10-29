import { FETCH_USERS } from "../actions";

/**
 * DEPRECATED IN FAVOR OF GRAPHQL CACHE
 */
export default (state = [], action) => {
  switch (action.type) {
    case FETCH_USERS:
      return action.payload.data;
    default:
      return state;
  }
};
