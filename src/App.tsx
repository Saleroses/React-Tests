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
import Counter from "./Components/Counter/Counter";
import Exam from "./Components/EXAM/exam";
import {Exemple11} from "./Components/UseState/useState";
import {UseEffect2, Watch} from "./useEffect/useEffect";






function App() {
    return (
        <div className="App">
            {/*<Exam/>*/}
            {/*<Counter/>*/}
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
            {/*<Exemple11 />*/}
            {/*<UseEffect2 />*/}
            <Watch />
        </div>
    );
}

export default App;
