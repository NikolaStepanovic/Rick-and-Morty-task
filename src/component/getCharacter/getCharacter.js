import classes from './getCharacter.module.css';
import { Link } from 'react-router-dom';

const Character = props => {
  return (
    <div className={classes.Box}>
      {props.data.map((el, i) => {
        let color = '';
        if (el.status === 'Alive') {
          color = 'green';
        }
        if (el.status === 'Dead') {
          color = 'red';
        }
        if (el.status === 'unknown') {
          color = 'gray';
        }
        return (
          <div className={classes.Container} key={i}>
            <img className={classes.image} src={el.image} alt="" />
            <div className={classes.Data}>
              <Link
                to={`Character/${el.id}`}
                className={classes.title}
              >
                {el.name}
              </Link>
              <div className={classes.DataLeft}>
                <div
                  style={{
                    margin: '12px',
                    borderRadius: '50%',
                    height: '8px',
                    width: '8px',
                    backgroundColor: color,
                  }}
                ></div>
                <p>
                  {el.status} - {el.species}
                </p>
              </div>
              <p className={classes.p}>Last known location:</p>
              <p className={classes.p1}>{el.location?.name}</p>
              <p className={classes.p}>First seen in:</p>
              <p className={classes.p1}>{el.origin?.name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Character;
