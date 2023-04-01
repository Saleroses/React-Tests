import React from 'react';
import {CallBack} from "./Components/CallBack/CallBack";
import './App.css';
import Switcher from "./Components/Switcher/Switcher";
import Destructuring from "./Components/Destructuring/Destructuring";
import {UseState} from "./Components/UseState/useState";
import CoolCounter from "./Components/Counter/Counter";

function App() {
    return (
        <div className="App">
            {/*<Switcher />*/}
            {/*<UseState />*/}
            {/*/!*<Input/>*!/*/}
            {/*/!*<User/>*!/*/}
            {/*<CallBack/>*/}
            <CoolCounter/>
        </div>
    );
}

export default App;



