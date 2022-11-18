import logo from './logo.svg';
import './App.css';
import {
  Component
} from 'react';
import Hello from './components/hello';
import Message from './components/message';

class App extends Component {
  render() {
    return ( 
    <div className = 'App' >
      <Message />
      </div>
    )
  }
}

export default App;