import classes from './Paginacija.module.css';
import { Link } from 'react-router-dom';

const Paginacija = props => {
  const number = 20 * props.pages;

  const idNum =
    number > props.length ? `${props.length}` : `${number}`;
  return (
    <div className={classes.Box}>
      <Link
        className={classes.Btn}
        to={`/?page=${props.pages > 1 ? +props.pages - 1 : 1}`}
      >
        Prev
      </Link>
      <p className={classes.p}>
        {props.pages} ({props.length <= 20 ? props.length : idNum} -{' '}
        {props.length})
      </p>
      <Link
        className={classes.Btn}
        to={`/?page=${
          props.pages < props.pageLimit
            ? +props.pages + 1
            : props.pageLimit
        }`}
      >
        Next
      </Link>
    </div>
  );
};

export default Paginacija;
