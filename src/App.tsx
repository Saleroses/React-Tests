import React from 'react';
import {CallBack} from "./Components/CallBack/CallBack";
import './App.css';
import Switcher from "./Components/Switcher/Switcher";
import Destructuring from "./Components/Destructuring/Destructuring";
import {UseState} from "./Components/UseState/useState";

function App() {
    return (
        <div className="App">
            {/*<Switcher />*/}
            {/*<UseState />*/}
            {/*/!*<Input/>*!/*/}
            {/*/!*<User/>*!/*/}
            <CallBack/>
        </div>
    );
}

export default App;



