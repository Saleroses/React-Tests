import React, {useEffect, useState} from 'react';
import {Simulate} from "react-dom/test-utils";
import keyPress = Simulate.keyPress;

export const UseEffect = () => {
    const [counter, setCounter] = useState(0)
    console.log('Component rendered')

    useEffect(() => {
        console.log('Effect occurred')

        return () => {
            console.log('Effect stop')
        }
    }, [counter])


    return (
        <div>
            Hello, counter: {counter}
            <button onClick={() => setCounter(counter + 1)}> +</button>
        </div>
    );
};


export const KeyTracker = () => {
        const [text, setText] = useState('')

        const handler = (e: KeyboardEvent) => {
            setText(text + e.key)
            console.log(e.key)
        }
        console.log('Component rendered '+ text)

        useEffect(() => {
            console.log('Effect occurred')
            window.addEventListener('keypress', handler)


            return () => {
                console.log('Effect stop')
                window.removeEventListener('keypress', handler)
                }

            }, [text]
        )


        return (
            <div>
                Hello, text: {text}
            </div>
        );
    }
;

