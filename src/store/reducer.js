import {
  GET_CHAR,
  GET_CHAR_SUCCESS,
  GET_SINGLE_CHARACTER,
  GET_SINGLE_CHARACTER_SUCCESS,
  GET_EPISODE,
  GET_EPISODE_SUCCESS,
} from '../store/action';

const initialStore = {
  data: [],
  id: 0,
  info: [],
  signleCharacter: [],
  episode: [],
  page: 1,
};

const reducer = (state = initialStore, action) => {
  switch (action.type) {
    case GET_CHAR:
      return {
        ...state,
      };
    case GET_CHAR_SUCCESS:
      return {
        ...state,
        data: action.payload.results,
        info: action.payload.info,
      };
    case GET_SINGLE_CHARACTER:
      return {
        ...state,
        id: action.payload,
      };
    case GET_SINGLE_CHARACTER_SUCCESS:
      return {
        ...state,
        signleCharacter: action.payload,
      };
    case GET_EPISODE:
      return {
        ...state,
      };
    case GET_EPISODE_SUCCESS:
      return {
        ...state,
        episode: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
