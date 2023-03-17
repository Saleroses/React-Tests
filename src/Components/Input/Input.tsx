import {useState} from "react";
import React from 'react';
import {FullInput} from "./FullInput";
import {Button} from "./Button";
import {Input0} from "./Input0";


export function Input () {
    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )

    let [title, setTitle] = useState("")

    const addMessage = (title: string) => {
        let NewMessage = {message: title};
        setMessage([NewMessage, ...message])
    }

    const callBackButtonHandler = () => {
        addMessage(title)
        setTitle("")
    }

    return (
        <div className="App">
            <Input0 setTitle={setTitle} title={title}/>
            <Button name={"+"} callback={callBackButtonHandler}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}

