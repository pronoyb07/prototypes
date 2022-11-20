import logo from './logo.svg';
import './App.css';
import {
  Component
} from 'react';
import Hello from './components/hello';
import Message from './components/message';
import Counter from './components/counter';
import FunctionClick from './components/functionClick';

class App extends Component {
  render() {
    return ( 
    <div className = "App" >
      <FunctionClick />
      
      </div>
    )
  }
}

export default App;