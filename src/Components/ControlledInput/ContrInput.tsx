import React, {ChangeEvent, ChangeEventHandler, useState} from 'react';


export const ContrInput = () => {
    const [perentValue, setPerentValue] = useState("");
    const changeInput = (event: ChangeEvent<HTMLInputElement>) => setPerentValue(event.currentTarget.value)

    return (
        <div>
            <input value={perentValue} onChange={changeInput}/>
        </div>
    );
};


export const ContrCheckBox = () => {
    const [checkBox, setCheckBox] = useState(true);
    const changeCheckBox = (event: ChangeEvent<HTMLInputElement>) => setCheckBox(event.currentTarget.checked)

    return (
        <div>
            <input type={"checkbox"} checked={checkBox} onChange={changeCheckBox}/>
        </div>
    );
};

export const Select = () => {
    const [Select, setSelect] = useState("2");
    const changeSelect = (event: ChangeEvent<HTMLSelectElement>) => setSelect(event.currentTarget.value)

    return (
        <div>
            <select value={Select} onChange={changeSelect}>
                <option value={"1"}>none</option>
                <option value={"2"}>SPb</option>
                <option value={"3"}>MSC</option>
            </select>
        </div>
    );
};