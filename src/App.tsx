import React, {useState} from 'react';
import {CallBack} from "./Components/CallBack/CallBack";
import './App.css';
import {Switcher} from "./Components/Switcher/Switcher";
import Destructuring from "./Components/Destructuring/Destructuring";
import {UseState} from "./Components/UseState/useState";
import CoolCounter from "./Components/Counter/Counter";
import {Rating} from "./Components/Stars/Stars";




function App() {
    let [switchOn, setSwitchOn] = useState(true);
    return (
        <div className="App">
            <Switcher active={switchOn} onChange={setSwitchOn}/>
            {/*<UseState />*/}
            {/*/!*<Input/>*!/*/}
            {/*/!*<User/>*!/*/}
            {/*<CallBack/>*/}
            {/*<CoolCounter/>*/}
            <Rating/>
        </div>
    );
}

export default App;



