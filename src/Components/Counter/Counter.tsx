import React, {ChangeEvent, useEffect, useState} from 'react';
import s from "./Counter.module.css"
import {useDispatch} from "react-redux";
import {endCountAC, incrementAC, resetAC, startCountAC} from "./counterReducer";
import {store} from "./store";



const CoolCounter = () => {
    const dispatch = useDispatch()
    const increment = () => {
        const action = incrementAC()
        dispatch(action)
        console.log(store.getState())
    }
    const reset = (count: number) => {
        const action = resetAC(count)
        dispatch(action)
    }
    const startCount = (startCount: number) => {
        const action = startCountAC(startCount)
        dispatch(action)
    }
    const endCount = (endCount: number) => {
        const action = endCountAC(endCount)
        dispatch(action)
    }


    let minValue: number = store.getState().startCount
    let maxValue: number = store.getState().endCount
    let [disableReset, setDisableReset] = useState(true)
    let [disableInc, setDisableInc] = useState(false)
    let [error, setError] = useState(false)
    let [errorEnter, setErrorEnter] = useState(false)
    let [count, setCount] = useState(store.getState().count)




    const buttonIncHandler = () => {
        if (count === maxValue-1) {
            increment()
            setCount(store.getState().count)
            setError(true)
            setDisableInc(true)
        } else {
            setErrorEnter(false)
            setDisableReset(false)
            increment()
            setCount(store.getState().count)
        }

    }

    const resetButtonHandler = () => {
        setDisableReset(true)
        reset(minValue)
        setCount(minValue)
        setDisableInc(false)
        setError(false)
    }


    const Settings = () => {

        const onChangeMinInputHandler = (event: ChangeEvent<HTMLInputElement>)=> {
            minValue = +event.currentTarget.value
        }

        const onChangeMaxInputHandler = (event: ChangeEvent<HTMLInputElement>)=> {
            maxValue = +event.currentTarget.value
        }

        const onClickCountHandler = () => {
            if (minValue < maxValue) {
                startCount(minValue)
                endCount(maxValue)
                setCount(minValue)
                store.getState().count = minValue
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
                <input className={s.input}
                       onChange={onChangeMinInputHandler}
                       placeholder={"Start"}/>
                <input className={s.input}
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
                <div className={error ? s.error : s.normal}>{errorEnter ? "Incorrect" : count}</div>
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