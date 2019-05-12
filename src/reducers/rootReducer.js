import { FETCH_POST,FETCH_ALBUMS,FETCH_USERS,ADD_POST,DELETE_POST } from '../actions/type';

const initState = {
  posts:[],
  albums:[],
  users:[],
  post:{},
  countPost:0
}
export default function rootReducer(state = initState, action) {
    switch (action.type) {
      case FETCH_POST:
        return {
          ...state,
          posts:action.posts
        };
      case ADD_POST:
        return {
          ...state,
          post:action.payload
        };
      case DELETE_POST:
        return {
          ...state,
          post:action.payload
        }
      case FETCH_ALBUMS:
        return {
          ...state,
          albums:action.albums
        };
      case FETCH_USERS:
        return {
          ...state,
          users:action.users
        };
      default:
        return state;
    }
  }