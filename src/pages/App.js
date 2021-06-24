import './App.scss';
import { Provider } from 'react-redux';
import store from '../store/store';
import Header from '../components/Header/Header';
import Scoreboard from '../components/Scoreboard/Scoreboard';
import CardGrid from '../components/CardGrid/CardGrid';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <Scoreboard />
        <CardGrid />
      </div>
    </Provider>
  );
}

export default App;
