import React, {useState} from 'react';
import {CallBack} from "./Components/CallBack/CallBack";
import './App.css';
import {Switcher} from "./Components/Switcher/Switcher";
import Destructuring from "./Components/Destructuring/Destructuring";
import {UseState} from "./Components/UseState/useState";
import CoolCounter from "./Components/Counter/Counter";
import {Rating} from "./Components/Stars/Stars";
import Assoc from "./Components/Associative/Assoc";
import {ContrCheckBox, ContrInput, Select} from "./Components/ControlledInput/ContrInput";




function App() {
    let [switchOn, setSwitchOn] = useState(true);
    return (
        <div className="App">
            {/*<Switcher active={switchOn} onChange={setSwitchOn}/>*/}
            {/*<UseState />*/}
            {/*/!*<Input/>*!/*/}
            {/*/!*<User/>*!/*/}
            {/*<CallBack/>*/}
            {/*<CoolCounter/>*/}
            {/*<Rating/>*/}
            <ContrInput/>
            <ContrCheckBox/>
            <Select/>
        </div>
    );
}

export default App;



