import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_SECRETS,
  CLEAR_SECRET,
  SECRET_ERROR,
  UPDATE_LIKES,
  DELETE_SECRET,
  ADD_SECRET,
  GET_SECRET,
  ADD_COMMENT,
  REMOVE_COMMENT
} from './types';

// Get all secret
export const getSecrets = () => async dispatch => {
  dispatch({ type: CLEAR_SECRET });
  try {
    const res = await axios.get('/api/secrets');

    dispatch({
      type: GET_SECRETS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: SECRET_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get male secrets
export const getMaleSecrets = () => async dispatch => {
  dispatch({ type: CLEAR_SECRET });
  try {
    const res = await axios.get('/api/secrets/male');

    dispatch({
      type: GET_SECRETS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: SECRET_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get female secrets
export const getFemaleSecrets = () => async dispatch => {
  dispatch({ type: CLEAR_SECRET });
  try {
    const res = await axios.get('/api/secrets/female');

    dispatch({
      type: GET_SECRETS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: SECRET_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get other secrets
export const getOtherSecrets = () => async dispatch => {
  dispatch({ type: CLEAR_SECRET });
  try {
    const res = await axios.get('/api/secrets/other');

    dispatch({
      type: GET_SECRETS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: SECRET_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get nsfw secrets
export const getNSFWSecrets = () => async dispatch => {
  dispatch({ type: CLEAR_SECRET });
  try {
    const res = await axios.get('/api/secrets/nsfw');

    dispatch({
      type: GET_SECRETS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: SECRET_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add secret like
export const addLike = id => async dispatch => {
  try {
    const res = await axios.put(`/api/secrets/like/${id}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data }
    });
  } catch (err) {
    dispatch({
      type: SECRET_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Remove secret like
export const removeLike = id => async dispatch => {
  try {
    const res = await axios.put(`/api/secrets/unlike/${id}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data }
    });
  } catch (err) {
    dispatch({
      type: SECRET_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add comment like
export const addCommentLike = id => async dispatch => {
  try {
    const res = await axios.put(`/api/secrets/like/${id}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data }
    });
  } catch (err) {
    dispatch({
      type: SECRET_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Remove comment like
export const removeCommentLike = id => async dispatch => {
  try {
    const res = await axios.put(`/api/secrets/unlike/${id}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data }
    });
  } catch (err) {
    dispatch({
      type: SECRET_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete post
export const deleteSecret = id => async dispatch => {
  try {
    await axios.delete(`/api/secrets/${id}`);

    dispatch({
      type: DELETE_SECRET,
      payload: id
    });

    dispatch(setAlert('Secret Removed', 'success'));
  } catch (err) {
    dispatch({
      type: SECRET_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add post
export const addSecret = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post('/api/secrets', formData, config);

    dispatch({
      type: ADD_SECRET,
      payload: res.data
    });

    dispatch(setAlert('Secret Created', 'success'));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: SECRET_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get post
export const getSecret = id => async dispatch => {
  try {
    const res = await axios.get(`/api/secrets/${id}`);

    dispatch({
      type: GET_SECRET,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: SECRET_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add comment
export const addComment = (postId, formData) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post(
      `/api/secrets/comment/${postId}`,
      formData,
      config
    );

    dispatch({
      type: ADD_COMMENT,
      payload: res.data
    });

    dispatch(setAlert('Comment Added', 'success'));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: SECRET_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete comment
export const deleteComment = (postId, commentId) => async dispatch => {
  try {
    await axios.delete(`/api/secrets/comment/${postId}/${commentId}`);

    dispatch({
      type: REMOVE_COMMENT,
      payload: commentId
    });

    dispatch(setAlert('Comment Removed', 'success'));
  } catch (err) {
    dispatch({
      type: SECRET_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
