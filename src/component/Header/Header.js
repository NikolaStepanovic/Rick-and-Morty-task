import classes from './Header.module.css';
import image from '../../assets/img/rick.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className={classes.Box}>
      <div className={classes.ContainerLeft}>
        <NavLink
          exact
          activeStyle={{
            backgroundColor: 'yellowgreen',
            color: 'red',
            borderBottom: '5px solid black',
          }}
          to={'/'}
          className={classes.Btn}
        >
          Character
        </NavLink>
        <NavLink
          activeStyle={{
            backgroundColor: 'yellowgreen',
            color: 'red',
            borderBottom: '5px solid black',
          }}
          to={'/Episodes'}
          className={classes.Btn}
        >
          Episode
        </NavLink>
      </div>
      <img className={classes.image} src={image} alt="Logo" />
    </div>
  );
};

export default Header;
