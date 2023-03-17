import React from 'react';
import './App.css';
import Switcher from "./Components/Switcher/Switcher";
import {Input} from "./Components/Input/Input";

function App() {
    return (
        <div className="App">
            {/*<Switcher active={true}/>*/}
            <Input/>
        </div>
    );
}

export default App;
