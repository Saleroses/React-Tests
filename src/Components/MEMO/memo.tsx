import React, {useState} from 'react';
import {Button} from "../Input/Button";

export default {
    title: "React memo Demo"
}

const Counter = (props: {count: number}) => {
    return (
        <div>
            {props.count}
        </div>
    );
};

const UsersSecret = (props: {users: Array<string>}) => {
    return (
        <div>
            {props.users.map( (u,i)  => <div key={i}>{u}</div>)}
        </div>
    );
};

const Users = React.memo(UsersSecret) // Сравнивает дом и перерисовывает ТОЛЬКО эту компоненту если изменился

export const Example = () => {
    const [counter, setCounter] = useState(10)
    const [users, setUsers] = useState(["Egor", "Ira", "Dimich"])
    return <>
        <button onClick={ ()=> {setCounter(counter+1)}}>+</button>
        <Counter count={counter}/>
        <Users users={users}/>

    </>
}
