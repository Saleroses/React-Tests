


export type IncrementAT = ReturnType<typeof incrementAC>
export type ResetAT = ReturnType<typeof resetAC>
export type StartCountAT = ReturnType<typeof startCountAC>
export type EndCountAT = ReturnType<typeof endCountAC>


export type ActionType = IncrementAT | ResetAT | StartCountAT | EndCountAT

const initialState = {
    startCount: 0,
    endCount: 5,
    count: 0
}

export const counterReducer = (state = initialState, action: ActionType) => {

    switch (action.type) {
        case "INCREMENT":
            return {...state,
                count: state.count+1}

        case "RESET":
            return {...state,
                count: state.count = action.count}

        case "START-COUNT":
            return {...state,
                startCount: action.startCount}

        case "END-COUNT":
        return {...state,
            endCount: action.endCount}


        default:
            return state
    }
}


export const incrementAC = () => {
    return {type: "INCREMENT"} as const
}

export const resetAC = (count: number) => {
    return {type: "RESET", count} as const
}

export const startCountAC = (startCount: number) => {
    return {type: "START-COUNT", startCount} as const
}

export const endCountAC = (endCount: number) => {
    return {type: "END-COUNT", endCount} as const
}

