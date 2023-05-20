import React, {useState} from 'react';
import exp from "constants";
import s from './Select.module.css'

type ItemsType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemsType[]
}

export const Select = (props: SelectPropsType) => {
    const [active, setActive] = useState(false)
    const selectedItem = props.items.find(i => i.value === props.value)
    const showItems = () =>{ setActive(!active)}
    return (
        <div className={s.select + " " + (active ? s.active : "")}>
            <h3 onClick={showItems}>{selectedItem && selectedItem.title}</h3>
            <div className={s.items}>
            {props.items.map( i => <div key={i.value}
                                        onClick={ () => { props.onChange(i.value); showItems()} }
                                        >{i.title}</div>)}
            </div>
        </div>
    );
};
