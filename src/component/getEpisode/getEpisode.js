import classes from './getEpisode.module.css';
import { Link } from 'react-router-dom';

const Episode = props => {
  return (
    <div className={classes.Box}>
      {props.data?.map((el, i) => {
        return (
          <div className={classes.Container} key={i}>
            <Link to={`/Episodes/${el.id}`} className={classes.title}>
              {el.episode}
            </Link>
            <p className={classes.p}>{el.name}</p>
            <p className={classes.p1}>{el.air_date}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Episode;
