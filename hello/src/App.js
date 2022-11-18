import logo from './logo.svg';
import './App.css';
import {
  Component
} from 'react';
import Hello from './components/hello';
import Message from './components/message';
import Counter from './components/counter';

class App extends Component {
  render() {
    return ( 
    <div className = "App" >
      <Counter />
      
      </div>
    )
  }
}

export default App;