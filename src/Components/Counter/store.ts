

import {counterReducer} from "./counterReducer";
import {legacy_createStore} from "redux";


// непосредственно создаём store
export const store = legacy_createStore(counterReducer)
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof counterReducer>
// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store
