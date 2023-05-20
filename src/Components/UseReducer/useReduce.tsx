import React, {useReducer, useState} from 'react';
import {Spisok, Title} from "./Title";

export type ActionType = {
    type: string
}

export type stateType = {
    collapsed: boolean
}

export const toggleCollapsed = "TOGGLE-COLLAPSED"

 export const reducer = (state: stateType, action: ActionType): stateType => {
    if (action.type === toggleCollapsed) {
        const stateCopy = {...state} // Обязательно создать копию, иначе не перерисуется
        stateCopy.collapsed = !stateCopy.collapsed
        return stateCopy
    }

    return state

}



export const UseReduce = () => {
    let [on, dispatch] = useReducer(reducer, {collapsed: false});

            if (on.collapsed === true) {
            return <div><Title/> <Spisok/>   <button onClick={() => {dispatch({type: toggleCollapsed})}}>Zakukoshit</button></div>
        } else {
                return <div><Title/>
                    <button onClick={() => {dispatch({type: toggleCollapsed})}}>Raskukoshit</button>
                </div>
            }

};

