import {memo} from "react";
import {ChangeEvent, useState} from 'react';


//find the problem and fix it as part of composition optimization, memo, children

export const Task_3 = () => {

    return (
        <div>
            <div>Lags when change value</div>
            <Input />
            <SlowComponent />
        </div>
    );
};

export const Input = () => {
    console.log('Input render')
    const [value, setValue] = useState('');
    const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value);

    return (
        <input value={value} onChange={onChange} />
    )
}



export const SlowComponent = memo(() => {
    console.log('SlowComponent re-render...');

    let now = performance.now();

    while (performance.now() - now < 1000) {
        // Artificial delay -- do nothing for 100ms
    }

    return <p>I am a very slow component tree.</p>;
})


