import {Select} from "./Select";
import {action} from '@storybook/addon-actions';
import {useState} from "react";


export default {
    title: "Select",
    component: Select
}

export const BaseExample = () => {
    const [value, setValue] = useState("2");

    return <Select onChange={setValue}
                   value={value}
                   items={[
                       {value: "1", title: "Spb"},
                       {value: "2", title: "MSK"},
                       {value: "3", title: "Kiev"},
                   ]}
    />
}