import React from 'react';
import s from "./On.module.css";


const On = () => {
    return (
        <div>
            <div className={s.switcherOn}>
                <p>ON</p>
            </div>
            <div className={s.switcherOff}>
                <p>OFF</p>
            </div>
            <div className={s.switcherFlash}>

            </div>
        </div>
    );
};

export default On;