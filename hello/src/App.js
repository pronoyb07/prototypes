import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
import Hello from './components/hello';
import Message from './components/message';
import Counter from './components/counter';
import FunctionClick from './components/functionClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';



class App extends Component {
  render() {
    return ( 
    <div className = "App" >
      <Stylesheet primary={true}/>
      
      </div>
    )
  }
}

export default App;