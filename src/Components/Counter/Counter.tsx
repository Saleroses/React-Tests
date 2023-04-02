import React, {useState} from 'react';
import s from "./Counter.module.css"

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
            setError(true)
        }

    }

    const resetButtonHandler = () => {
            setDisableReset(true)
            setCounter(counter = 0)
            setDisableInc(false)
            setError(false)
    }

    let [counter, setCounter] = useState(0)
    let [disableInc, setDisableInc] = useState(false);
    let [disableReset, setDisableReset] = useState(true);
    let [error, setError] = useState(false)


    return (
        <div className={s.counter}>
            <div className={error ? s.error : s.normal}>{counter}</div>
            <button className={s.myButton} onClick={buttonIncHandler} disabled={disableInc}>INC</button>
            <button className={s.myButtonRes} onClick={resetButtonHandler} disabled={disableReset}>RESET</button>
        </div>
    );
};

export default CoolCounter;