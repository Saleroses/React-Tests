import React, {ChangeEvent, useState} from 'react';


type FullInputPropsType = {
    addMessage: (title: string)=>void
}

export function FullInput(props: FullInputPropsType) {
    let [title, setTitile] = useState("")


    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>)=> {
        setTitile(event.currentTarget.value)

    }

    const onClickButtonHandler = () => {
        props.addMessage(title)
        setTitile("")
    }

    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
}

