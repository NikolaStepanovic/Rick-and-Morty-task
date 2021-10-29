import classes from './Input.module.css';

const Input = props => {
  return (
    <div className={classes.Box}>
      <p className={classes.p}>search for a single character</p>
      <form>
        <label>status:</label>
        <select onChange={props.status} className={classes.Select}>
          <option value="">-</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="unknown">unknown</option>
        </select>
        <label>gender:</label>
        <select onChange={props.gender} className={classes.Select}>
          <option value="">-</option>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="genderless">genderless</option>
          <option value="unknown">unknown</option>
        </select>
        <input
          onChange={props.searchName}
          className={classes.Input}
          type="Text"
          placeholder={'Search Character'}
        />
      </form>
    </div>
  );
};

export default Input;
