import React, {useMemo, useState} from 'react';
import {Button} from "../Input/Button";
import {match} from "assert";
import {formatDate} from "@storybook/blocks";
import {getBanknoteList} from "../Tests/lesson_8";

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


export const Example1 = () => {
    const [a, setA] = useState(3)
    const [b, setB] = useState(3)

    let resultA = 1
    let resultB = 1

    resultA = useMemo( ()=> {  //Хэшируем сложные вычисления. Если не изменились - ретурним а
        for (let i=1; i<=a; i++) {
            resultA = resultA * i
            let fake = 0
            while (fake<10000000) {
                fake++
                const fakeValue = Math.random()
            }
        } return resultA


    }, [a])



    for (let i=1; i<=b; i++) {
        resultB = resultB * i
    }

    return <div>
        <input value={a} onChange={ (event)=> setA(+event.currentTarget.value)}/>
        <input value={b} onChange={ (event)=> setB(+event.currentTarget.value)}/>
        <hr/>
        <div>Result for a: {resultA}</div>
        <div>Result for b: {resultB}</div>
    </div>
}






const UsersSecret1 = (props: {users: Array<string>}) => {
    return (
        <div>
            {props.users.map( (u,i)  => <div key={i}>{u}</div>)}
        </div>
    );
};

const Users1 = React.memo(UsersSecret1)

export const HelpToReactMemo = () => {
    const [counter, setCounter] = useState(10)
    const [users, setUsers] = useState(["Egor", "Ira", "Dimich"])
    
    const newArray = useMemo( () => { //Фильтруем юзеров по букве а, если новых юзеров нет, то не фильтруем
        const Array = users.filter(u => u.toLowerCase().indexOf('a') > -1)
        return Array
    },[users] ) //Исходные данные тут

    const addUsers = () => { // Добавление юзера в массив
        const newUser = [...users, 'New user ' + new Date().getTime()]
        setUsers(newUser)
    }
    
    return <>
        <button onClick={ ()=> {setCounter(counter+1)}}>+</button>
        <button onClick={ ()=> {addUsers()}}>add user</button>
        <Counter count={counter}/>
        <Users1 users={users}/>

    </>
}
