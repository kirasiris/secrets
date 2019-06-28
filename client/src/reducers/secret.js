import {
  GET_SECRETS,
  GET_SECRET,
  CLEAR_SECRET,
  SECRET_ERROR,
  UPDATE_LIKES,
  DELETE_SECRET,
  ADD_SECRET,
  ADD_COMMENT,
  REMOVE_COMMENT
} from '../actions/types';

const initialState = {
  secrets: [],
  secret: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_SECRETS:
      return {
        ...state,
        secrets: payload,
        loading: false
      };
    case GET_SECRET:
      return {
        ...state,
        secret: payload,
        loading: false
      };
    case ADD_SECRET:
      return {
        ...state,
        secrets: [payload, ...state.secrets],
        loading: false
      };
    case DELETE_SECRET:
      return {
        ...state,
        secrets: state.secrets.filter(secret => secret._id !== payload),
        loading: false
      };
    case SECRET_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case CLEAR_SECRET:
      return {
        ...state,
        secret: null,
        loading: false
      };
    case UPDATE_LIKES:
      return {
        ...state,
        secrets: state.secrets.map(secret =>
          secret._id === payload.id
            ? { ...secret, likes: payload.likes }
            : secret
        ),
        loading: false
      };
    case ADD_COMMENT:
      return {
        ...state,
        secret: { ...state.secret, comments: payload },
        loading: false
      };
    case REMOVE_COMMENT:
      return {
        ...state,
        secret: {
          ...state.secret,
          comments: state.secret.comments.filter(
            comment => comment._id !== payload
          )
        },
        loading: false
      };
    default:
      return state;
  }
}
