import React, {useMemo, useState} from 'react';
import {Spisok, Title} from "./Title";

type UseReduceType = {
    on: boolean
}

export const UseReduce = () => {
    let [on, setOn] = useState(false);

            if (on === true) {
            return <div><Title/> <Spisok/>   <button onClick={() => {setOn(false)}}>Zakukoshit</button></div>
        } else {
                return <div><Title/>
                    <button onClick={() => {setOn(true)}}>Raskukoshit</button>
                </div>
            }

};

function generationData() {
    return 6546+5456
}

export const Exemple11 = () => {
    // const initValue = useMemo(generationData, [])
    const [counter, setCounter] = useState(generationData)


    return (
        <div>
        <button onClick={ ()=> {setCounter(counter+1)}}>+1</button>
    {counter}
        </div>
    )
};
