import React, {useState} from 'react';
import {CallBack} from "./Components/CallBack/CallBack";
import './App.css';
import {Switcher} from "./Components/Switcher/Switcher";
import Destructuring from "./Components/Destructuring/Destructuring";
import CoolCounter from "./Components/Counter/Counter";
import {Rating} from "./Components/Stars/Stars";
import Assoc from "./Components/Associative/Assoc";
import {ContrCheckBox, ContrInput, Select} from "./Components/ControlledInput/ContrInput";
import Immutability from "./Components/immutability/immutability";
import {UseReduce} from "./Components/UseReducer/useReduce";
import {Example, Example1, HelpToReactMemo} from "./Components/MEMO/memo";
import {getBanknoteList} from "./Components/Tests/lesson_8";
import Counter from "./Components/Counter/Counter";






function App() {
    let [switchOn, setSwitchOn] = useState(true);
    return (
        <div className="App">
            <Counter/>
            {/*<Switcher active={switchOn} onChange={setSwitchOn}/>*/}
            {/*<UseState />*/}
            {/*<UseReduce />*/}
            {/*/!*<Input/>*!/*/}
            {/*/!*<User/>*!/*/}
            {/*<CallBack/>*/}
            {/*<CoolCounter/>*/}
            {/*<Rating/>*/}
            {/*<ContrInput/>*/}
            {/*<ContrCheckBox/>*/}
            {/*<Select/>*/}
            {/*<Immutability/>*/}
            {/*<HelpToReactMemo/>*/}
        </div>
    );
}

export default App;



