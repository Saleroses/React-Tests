import React, {useEffect, useState} from 'react';
import axios from "axios";

type ResponseType = {
    data: dataType
}

type dataType = {
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
    const [data, setData] = useState<dataType>()

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
        PromisesAPI.getData()
            .then((res) => {
                setState(res.data)
            })
            .catch((rej) => {
                console.log(rej.toString())
            })
        setData(state)

    }

    console.log(state)
    return (
        <div>
            <button onClick={buttonHandler}>Получить данные</button>
             <div>Data:
                 <div>activity: {data?.activity}</div>
                 <div>key: {data?.key}</div>
                 {data?.link ? <div>link: {data?.link}</div> : <div></div>}
                 <div>accessibility: {data?.accessibility}</div>
                 <div>type: {data?.type}</div>
                 <div>participants: {data?.participants}</div>
                 <div>price: {data?.price}</div>
             </div>
        </div>
    );
};

