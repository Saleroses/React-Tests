import React, {useEffect, useState} from 'react';

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

    let [hours, setHours] = useState(new Date().getHours())
    let [minutes, setMinutes] = useState(new Date().getMinutes())
    let [seconds, setSeconds] = useState(new Date().getSeconds())

    useEffect( ()=> { //перерисовка, зависит от депс
        setInterval( ()=> { // что нужно обновить и интервал перерисовки
            setSeconds(seconds = new Date().getSeconds())
            setMinutes (minutes = new Date().getMinutes())
            setHours (hours = new Date().getHours())
        }, 200)
    }, [seconds])

    return (
        <div>{hours}:{minutes}:{seconds}</div>
    )

}