import './App.css';
import CharacterPage from './pages/Character/Character';
import Episodes from './pages/Episodes/Episodes';
import SingleCharacter from './component/singleCharacter/singleCharacter';
import SingleEpisode from './component/getEpisode/getEpisode';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={CharacterPage}></Route>
      <Route path="/Episodes" component={Episodes}></Route>
      <Route path="/Episodes/:id" component={SingleEpisode}></Route>
      <Route
        path="/Character/:id"
        component={SingleCharacter}
      ></Route>
    </div>
  );
}

export default App;
