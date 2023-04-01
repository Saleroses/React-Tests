import React, {useState} from 'react';

const CoolCounter = () => {

    const buttonIncHandler = () => {
        if (counter === 0) {
            setDisableInc(false)
            setDisableReset(true)
        } if (counter < 4) {
            setDisableReset(false)
            setCounter(counter + 1)
        } if (counter === 4) {
            setDisableInc(true)
            setCounter(counter + 1)
        }

    }

    const resetButtonHandler = () => {
            setDisableReset(true)
            setCounter(counter = 0)
            setDisableInc(false)
    }

    let [counter, setCounter] = useState(0)
    let [disableInc, setDisableInc] = useState(false);
    let [disableReset, setDisableReset] = useState(true);


    return (
        <div>
            <div>{counter}</div>
            <button onClick={buttonIncHandler} disabled={disableInc}>INC</button>
            <button onClick={resetButtonHandler} disabled={disableReset}>RESET</button>
        </div>
    );
};

export default CoolCounter;