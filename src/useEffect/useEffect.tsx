import React, {useEffect, useState} from 'react';
import {log} from "util";

// const UseEffect = () => {
//     const [counter, setCounter] = useState(1)
//
//     useEffect( ()=> {
//         document.title = counter.toString()
//     }, [counter]) //перерисовывает тайтл страницы если изменен каунтер
//     return (
//         <div>
//             Hello {counter}
//             <button onClick={()=> setCounter(counter+1)}>+</button>
//             </div>
//     );
// };
//
// export default UseEffect;

export const UseEffect2 = () => {
    const [counter, setCounter] = useState(0)
    console.log(counter)

    useEffect( ()=> {
        setInterval ( ()=> {
            setCounter(counter + 1);
        },100000); // Каждую сек к каунтеру прибавляется 1, перерисовка в зависимости от изменения каунтера
    }, [counter])

    return (
        <div>
            Hello {counter}
        </div>
    );
};

export const Watch = () => {

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
    }, [])

    return (
        <div>{zeroFunction(hours)}:{zeroFunction(minutes)}:{zeroFunction(seconds)}
        </div>

    )

}