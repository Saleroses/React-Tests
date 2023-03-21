import React from 'react';
import {User} from "./Components/CallBack/CallBack";
import './App.css';
import Switcher from "./Components/Switcher/Switcher";
import Destructuring from "./Components/Destructuring/Destructuring";

function App() {
    return (
        <div className="App">
            {/*<Switcher active={true}/>*/}
            {/*<Input/>*/}
            {/*<User/>*/}
            <Destructuring/>
        </div>
    );
}

export default App;



