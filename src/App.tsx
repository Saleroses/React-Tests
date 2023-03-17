import React from 'react';
import './App.css';
import Switcher from "./Components/Switcher/Switcher";

function App() {
    return (
        <div className="App">
            <Switcher active={true}/>
        </div>
    );
}

export default App;
