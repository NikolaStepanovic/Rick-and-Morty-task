import classes from './Character.module.css';
import Header from '../../component/Header/Header';
import Boddy from '../../component/boddy/Boddy';

const CharacterPage = () => {
  return (
    <div className={classes.Box}>
      <Header />
      <hr />
      <Boddy />
    </div>
  );
};

export default CharacterPage;
