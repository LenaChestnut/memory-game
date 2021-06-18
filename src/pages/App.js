import './App.scss';
import Header from '../components/Header/Header';
import Scoreboard from '../components/Scoreboard/Scoreboard';
import CardGrid from '../components/CardGrid/CardGrid';

function App() {
  return (
    <div className="app">
      <Header />
      <Scoreboard />
      <CardGrid />
    </div>
  );
}

export default App;
