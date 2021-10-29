import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './Episodes.module.css';
import Header from '../../component/Header/Header';
import { getEpisode } from '../../store/action';
import GetEpisode from '../../component/getEpisode/getEpisode';

const Episode = () => {
  const store = useSelector(state => state.episode);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEpisode());
  }, [dispatch]);
  return (
    <div className={classes.Box}>
      <Header />
      <hr />
      <GetEpisode data={store.results} />
    </div>
  );
};

export default Episode;
