import React from 'react';
import {User} from "./Components/CallBack/CallBack";
import './App.css';
import Switcher from "./Components/Switcher/Switcher";
import Destructuring from "./Components/Destructuring/Destructuring";
import {UseState} from "./Components/UseState/useState";

function App() {
    return (
        <div className="App">
            <Switcher />
            <UseState />
            {/*<Input/>*/}
            {/*<User/>*/}

        </div>
    );
}

export default App;



