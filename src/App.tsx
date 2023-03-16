import React from 'react';
import './App.css';
import Switcher from "./Components/Switcher/Switcher";
import Cars from "./Components/Filter/Filter";
import NormCars from "./Components/Filter/Filter";
import CarsFiltered from "./Components/Filter/Filter";

function App() {
    return (
        <div className="App">
            {/*<Switcher active={true}/>*/}
            <CarsFiltered />
        </div>
    );
}

export default App;
