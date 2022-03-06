import logo from './logo.svg';
import './App.css';
import { WeatherInfo } from './components/weatherinfo';
import { UseEffect } from './components/Useeffect';

function App() {
  return (
    <div className="App">
    <WeatherInfo/>
    <UseEffect/>
    </div>
  );
}

export default App;
