import React from 'react';
import {User} from "./Components/CallBack/CallBack";
import './App.css';
import Switcher from "./Components/Switcher/Switcher";

function App() {
    return (
        <div className="App">
            {/*<Switcher active={true}/>*/}
            {/*<Input/>*/}
            <User/>
        </div>
    );
}

export default App;



