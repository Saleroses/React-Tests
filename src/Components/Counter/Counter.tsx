import React, {ChangeEvent, useEffect, useState} from 'react';
import s from "./Counter.module.css"



const CoolCounter = () => {
    let [startCounter, setStartCounter] = useState<number>(()=>{
        let startLocal = localStorage.getItem("minValue")
        return startLocal ? JSON.parse(startLocal) : 0
    })
    let [newStartCounter, setNewStartCounter] = useState(0)
    let [maxCount, setMaxCount] = useState(()=>{
        let stopLocal = localStorage.getItem("maxValue")
        return stopLocal ? JSON.parse(stopLocal) : 5
    })
    let [disableInc, setDisableInc] = useState(false);
    let [disableReset, setDisableReset] = useState(true);
    let [error, setError] = useState(false)
    let [errorEnter, setErrorEnter] = useState(false)








    const buttonIncHandler = () => {
        if (startCounter < maxCount) {
            setDisableReset(false)
            setStartCounter(startCounter + 1)
        }
        if (startCounter === maxCount-1) {
            setDisableInc(true)
            setStartCounter(startCounter + 1)
            setError(true)
        }

    }

    const resetButtonHandler = () => {
        setDisableReset(true)
        setStartCounter((()=>{
            let startLocal = localStorage.getItem("minValue")
            return startLocal ? JSON.parse(startLocal) : maxCount
        }))
        setDisableInc(false)
        setError(false)
    }


    const Settings = () => {
        let [minValue, setMinValue] = useState<number>(()=>{
            let minLocal = localStorage.getItem("minValue")
            if (minLocal) {
                return JSON.parse(minLocal)
            } else {
                return startCounter}
        })
        let [maxValue, setMaxValue] = useState<number>(()=>{
            let maxLocal = localStorage.getItem("maxValue")
            if (maxLocal) {
                return JSON.parse(maxLocal)
            } else {
                return maxCount}
        })



        useEffect(()=> {
            localStorage.setItem("minValue", JSON.stringify(minValue))
        }, [minValue])

        useEffect(()=> {
            localStorage.setItem("maxValue", JSON.stringify(maxValue))
        }, [maxValue])


        const onChangeMinInputHandler = (event: ChangeEvent<HTMLInputElement>)=> {
            setMinValue(+event.currentTarget.value)
        }

        const onChangeMaxInputHandler = (event: ChangeEvent<HTMLInputElement>)=> {
            setMaxValue(+event.currentTarget.value)
        }

        const onClickCountHandler = () => {
            if (minValue < maxValue) {
                setStartCounter(minValue)
                setNewStartCounter(minValue)
                setMaxCount(maxValue)
                setDisableReset(true)
                setDisableInc(false)
                setError(false)
                setErrorEnter(false)
            } else {
                setErrorEnter(true)
            }
        }

        return (
            <div>
                <input type={"number"}
                       className={s.input}
                       onChange={onChangeMinInputHandler}
                       placeholder={"Start"}/>
                <input type={"number"}
                       className={s.input}
                       onChange={onChangeMaxInputHandler}
                       placeholder={"End"}/>
                <button className={s.myButton} onClick={onClickCountHandler}>SetValue</button>

            </div>
        );
    };


    return (
        <div className={s.counterBlock}>
            <div className={s.settings}>
                <Settings />
            </div>
            <div className={s.counter}>
                <div className={error ? s.error : s.normal}>{errorEnter ? "Incorrect" : startCounter}</div>
                <div className={s.buttons}>
                    <button className={s.myButton} onClick={buttonIncHandler} disabled={disableInc}>INC</button>
                    <button className={s.myButtonRes} onClick={resetButtonHandler} disabled={disableReset}>RESET
                    </button>
                </div>
            </div>
        </div>

    );
};

export default CoolCounter;