import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  getCharacterSuccess,
  GET_CHAR,
  GET_SINGLE_CHARACTER,
  getSingleCharacterSuccess,
  GET_EPISODE,
  getEpisodeSuccess,
} from '../store/action';

const getEpisode = () => {
  return axios.get(`https://rickandmortyapi.com/api/episode`);
};

function* fetchEpisode({ id }) {
  try {
    const { data } = yield call(getEpisode);
    yield put(getEpisodeSuccess(data));
  } catch (e) {
    yield put(console.log(e.message));
  }
}

const mySaga = ids => {
  return axios.get(
    `https://rickandmortyapi.com/api/character/${ids}`
  );
};

function* fetchSingleUser({ id }) {
  try {
    const { data } = yield call(mySaga, id);
    yield put(getSingleCharacterSuccess(data));
  } catch (e) {
    yield put(console.log(e.message));
  }
}

const getCharacter = (page, gender, status, name) => {
  return axios.get(
    `https://rickandmortyapi.com/api/character/?page=${page}&name=${name}&status=${status}&gender=${gender}`
  );
};

function* fetchUser({ payload }) {
  try {
    const { data } = yield call(
      getCharacter,
      payload.page,
      payload.name,
      payload.status,
      payload.gender
    );
    yield put(getCharacterSuccess(data.results, data.info));
  } catch (e) {
    yield put(console.log(e.message, 'Not such name'));
  }
}

export function* usersSaga() {
  yield takeLatest(GET_CHAR, fetchUser);
  yield takeLatest(GET_SINGLE_CHARACTER, fetchSingleUser);
  yield takeLatest(GET_EPISODE, fetchEpisode);
}

export default usersSaga;
