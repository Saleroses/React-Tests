import React, {useEffect, useState} from 'react';
import axios, {default as promise} from "axios";
import {rejects} from "assert";
import {log} from "util";
import {string} from "prop-types";

type ResponseType = {
    activity: string,
    type: string,
    participants: number,
    price: number,
    link: string,
    key: string,
    accessibility: number
}

export const Promises = () => {

    const promise = axios.create({})
    const PromisesAPI = {
        getData() {
            return promise.get<ResponseType>('https://www.boredapi.com/api/activity')
        },
    };

    const [state, setState] = useState<any>(null)
    const [data, setData] = useState('')

    useEffect(() => {
        PromisesAPI.getData()
            .then((res) => {
                setState(res.data)
            })
            .catch((rej) => {
                console.log(rej.toString())
            })

    }, [])


    const buttonHandler = () => {

    }

    console.log(state)
    return (
        <div>
            <button onClick={buttonHandler}>Получить данные</button>
             <div>Data: {data}</div>
        </div>
    );
};

