import './App.css';
import TextField from '@material-ui/core/TextField';
import { useEffect, useState } from 'react';
import {DemoClassComponent} from "./DemoClassComponent/DemoClassComponent";
function App(props) {
let parentProp="thanks a lot"
  return (
    <div className="App">
        <DemoClassComponent prop={parentProp}/>
    </div>
  );
}

export default App;
