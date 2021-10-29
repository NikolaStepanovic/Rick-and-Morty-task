import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './signleCharacter.module.css';
import { useParams } from 'react-router-dom';
import { getSingleCharacter } from '../../store/action';

const SignleCharacter = () => {
  let { id } = useParams();

  const store = useSelector(state => state);
  const dispatch = useDispatch();

  const character = store.signleCharacter;

  useEffect(() => {
    dispatch(getSingleCharacter(id));
  }, [dispatch, id]);

  let color = '';
  if (character.status === 'Alive') {
    color = 'green';
  }
  if (character.status === 'Dead') {
    color = 'red';
  }
  if (character.status === 'unknown') {
    color = 'gray';
  }

  return (
    <div className={classes.Box}>
      <div className={classes.Container}>
        <img className={classes.image} src={character.image} alt="" />
        <div className={classes.ContainerLeft}>
          <h1>{character.name}</h1>
          <div className={classes.Data}>
            <div
              style={{
                marginTop: '28px',
                marginRight: '10px',
                borderRadius: '50%',
                height: '10px',
                width: '10px',
                backgroundColor: color,
              }}
            ></div>
            <p className={classes.p}>
              {character.status} - {character.species}
            </p>
          </div>
          <p className={classes.p1}>{character.gender}</p>
          <p className={classes.p2}>Location:</p>
          <p className={classes.p1}>{character.location?.name}</p>
          <p className={classes.p2}>Last seen:</p>
          <p className={classes.p1}>{character.origin?.name}</p>
        </div>
      </div>
    </div>
  );
};

export default SignleCharacter;
