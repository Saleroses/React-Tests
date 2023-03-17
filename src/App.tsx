import React from 'react';
import './App.css';
import Switcher from "./Components/Switcher/Switcher";
import Map from "./Components/Map/Map";


function App() {
    return (
        <div className="App">
            {/*<Switcher active={true}/>*/}
            <Map/>
        </div>
    );
}

export default App;
