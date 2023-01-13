import logo from './logo.svg';
import './App.css';
import {Greet} from './components/greet';
import Welcome from './components/welcome';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      {/* <Greet/>
      <Welcome/> */}
      <Hello />
    </div>
  );
}

export default App;
