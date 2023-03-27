import React, {useState} from 'react';
import {Spisok, Title} from "./Title";

type UseStateType = {
    on: boolean
}

export const UseState = () => {
    let [on, setOn] = useState(false);

            if (on === true) {
            return <div><Title/> <Spisok/>   <button onClick={() => {setOn(false)}}>Zakukoshit</button></div>
        } else {
                return <div><Title/>
                    <button onClick={() => {setOn(true)}}>Raskukoshit</button>
                </div>
            }

};

