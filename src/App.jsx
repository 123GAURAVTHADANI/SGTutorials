import './App.css';
import TextField from '@material-ui/core/TextField';
import { useEffect, useState } from 'react';
import {DemoClassComponent} from "./DemoClassComponent/DemoClassComponent"; 
import TodoListComponent from './DemoClassComponent/TodoListComponent';
function App(props) {
let parentProp="thanks a lot"
  return (
    <div className="App">
       <TodoListComponent/>
    </div>
  );
}

export default App;
