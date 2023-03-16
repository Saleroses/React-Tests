import React from 'react';
import s from "./Switcher.module.css"
import On from "./On/On";
import Off from "./Off/Off";

type SwitcherType = {
    active: boolean,
}

const Switcher = (props: SwitcherType) => {
        if (props.active === true) {
            return <div><On /></div>
        } else {
            return <div><Off /></div>
        }

};

export default Switcher;