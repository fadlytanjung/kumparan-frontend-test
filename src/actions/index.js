import { FETCH_POST,FETCH_ALBUMS,FETCH_USERS,ADD_POST,DELETE_POST } from './type';
import axios from 'axios';
import { PATH_BASE} from '../api';

export const createPost = ({ userId,title, body }) => {
  console.log('aaa')
  return (dispatch) => {
    return axios.post(`${PATH_BASE}posts`, {userId,title, body})
      .then(response => {
        console.log(response)
        dispatch({type:ADD_POST,payload:response.data})
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const deletePostSuccess = id => {
  return {
    type: DELETE_POST,
    payload: {
      id
    }
  }
}

export const deletePost = id => {
  return (dispatch) => {
    return axios.delete(`${PATH_BASE}posts/${id}`)
      .then(response => {
        console.log(response.data)
        dispatch(deletePostSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const fetchPosts = (posts) => {
    return {
      type: FETCH_POST,
      posts
    }
  };

export const fetchAllPosts = () => {
    return (dispatch) => {
      return axios.get(`${PATH_BASE}posts`)
        .then(response => {
          dispatch(fetchPosts(response.data))
        })
        .catch(error => {
          throw(error);
        });
    };
  };

export const fetchAlbums = (albums) => {
    return {
      type: FETCH_ALBUMS,
      albums
    }
  };

export const fetchAllAlbums = () => {
    return (dispatch) => {
      return axios.get(`${PATH_BASE}albums`)
        .then(response => {
          dispatch(fetchAlbums(response.data))
        })
        .catch(error => {
          throw(error);
        });
    };
  };

export const fetchUsers = (users) => {
    return {
      type: FETCH_USERS,
      users
    }
  };

export const fetchAllUsers = () => {
    return (dispatch) => {
      return axios.get(`${PATH_BASE}users`)
        .then(response => {
          dispatch(fetchUsers(response.data))
        })
        .catch(error => {
          throw(error);
        });
    };
  };
