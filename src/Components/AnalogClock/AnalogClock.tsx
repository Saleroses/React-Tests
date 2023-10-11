import React, {useEffect, useState} from "react";
import s from './AnalogClock.module.css'

export const AnalogClock = () => {

    const [date, setDate] = useState(new Date())

    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    const zeroFunction = (num: number) => {
        return num < 10 ? "0" + num : num
    }

    useEffect( ()=> { //перерисовка, зависит от депс
        const intervalId = setInterval( ()=> {// что нужно обновить и интервал перерисовки
            setDate(new Date())
        }, 1000)

        return () => {clearInterval(intervalId) // убивает тиканье вместе с компонентой
        }
    }, [date])

    const secondsStyle = {
        transform: `rotate(${seconds * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${minutes * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${hours * 30}deg)`
    };

    return (
        <div className={s.clock}>
            <div className={s["analog-clock"]}>
                <div className={`${s.dial} ${s.seconds}`} style={secondsStyle}/>
                <div className={`${s.dial} ${s.minutes}`} style={minutesStyle}/>
                <div className={`${s.dial} ${s.hours}`} style={hoursStyle}/>
            </div>
            <div className={s["digital-clock"]}>
                {hours}:{minutes}:{zeroFunction(seconds)}
            </div>
        </div>

    )

}