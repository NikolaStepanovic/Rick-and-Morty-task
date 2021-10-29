export const GET_CHAR = 'GET_CHAR';
export const GET_CHAR_SUCCESS = 'GET_CHAR_SUCCESS';
export const GET_SINGLE_CHARACTER = 'GET_SINGLE_CHARACTE';
export const GET_SINGLE_CHARACTER_SUCCESS =
  'GET_SINGLE_CHARACTER_SUCCESS';
export const GET_EPISODE = 'GET_EPISODE';
export const GET_EPISODE_SUCCESS = 'GET_EPISODE_SUCCESS';

export const getCharacter = (page, status, name, gender) => {
  return {
    type: GET_CHAR,
    payload: {
      page,
      status,
      name,
      gender,
    },
  };
};

export const getCharacterSuccess = (results, info) => ({
  type: GET_CHAR_SUCCESS,
  payload: {
    results,
    info,
  },
});

export const getSingleCharacter = id => ({
  type: GET_SINGLE_CHARACTER,
  id,
});

export const getSingleCharacterSuccess = payload => ({
  type: GET_SINGLE_CHARACTER_SUCCESS,
  payload,
});

export const getEpisode = () => ({
  type: GET_EPISODE,
});

export const getEpisodeSuccess = payload => ({
  type: GET_EPISODE_SUCCESS,
  payload,
});
