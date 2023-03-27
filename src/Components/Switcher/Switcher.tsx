import React, {useState} from 'react';
import s from "./Switcher.module.css"
import On from "./On/On";
import Off from "./Off/Off";

type SwitcherType = {
    active: boolean
}

const Switcher = () => {

    let [on, setOn] = useState(false);

        if (on === true) {
            return <div onClick={() => {setOn(false)}}><On /></div>
        } else {
            return <div onClick={() => {setOn(true)}}><Off /></div>
        }

};

export default Switcher;