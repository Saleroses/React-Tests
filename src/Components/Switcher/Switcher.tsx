import React, {useState} from 'react';
import s from "./Switcher.module.css"
import On from "./On/On";
import Off from "./Off/Off";

type SwitcherType = {
    active: boolean
    onChange: (active: boolean) => void
}

export const Switcher = (props: SwitcherType) => {

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "2px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.active ? "green" : "white"
    }

    const offStyle = {
        width: "30px",
        height: "20px",
        border: "2px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.active ? "white" : "red"
    }

        return  (
            <div>
                <div style={onStyle} onClick={ () => {props.onChange(true)} }> ON </div>
                <div style={offStyle} onClick={ () => {props.onChange(false)} }> OFF </div>
            </div>
        )
};
