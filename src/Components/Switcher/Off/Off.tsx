import React from 'react';
import s from "./Off.module.css";

const Off = () => {
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

export default Off;