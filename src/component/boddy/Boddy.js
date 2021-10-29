import { useState, useEffect } from 'react';
import classes from './Boddy.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacter } from '../../store/action';
import Character from '../getCharacter/getCharacter';
import Paginacija from '../Paginacija/Paginacija';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import Input from '../Input/Input';

const Boddy = () => {
  const { search } = useLocation();
  const { page = 1 } = queryString.parse(search);

  const [status, setStatus] = useState('');
  const [gender, setGender] = useState('');
  const [name, setName] = useState('');
  const store = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacter(page, status, gender, name));
  }, [dispatch, page, name, status, gender]);

  let lastElement = store.data[store.data.length - 1];

  // const ids = store.data?.map((el, i) => i + 1);

  // const lastId = ids?.slice(-1);

  const statusHandler = e => {
    setStatus(e.target.value);
  };

  const genderHandler = e => {
    setGender(e.target.value);
  };

  const searchNameHandler = e => {
    setName(e.target.value);
  };

  return (
    <div className={classes.Box}>
      <div className={classes.Container}>
        <Input
          status={e => statusHandler(e)}
          gender={e => genderHandler(e)}
          searchName={e => searchNameHandler(e)}
        />
        <Paginacija
          pages={page}
          length={store.info?.count}
          number={lastElement?.id}
          pageLimit={store.info.pages}
        />
      </div>
      <Character data={store.data} />
    </div>
  );
};

export default Boddy;
