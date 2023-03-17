import React, {ChangeEvent} from 'react';

type inputPropsType = {
    setTitle: (title: string)=>void
    title: string
}

export const Input0 = (props: inputPropsType) => {

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>)=> {
        props.setTitle(event.currentTarget.value)

    }

    return (
        <div>
            <input value={props.title} onChange={onChangeInputHandler}/>
        </div>
    );
};

