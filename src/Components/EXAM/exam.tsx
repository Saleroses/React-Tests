
export type ActionType = {
    type: "SUM"|"SUB"|"MULT"|"DIV"|"EXP"
    payload: number
}

export const Exam = (state: number, action: ActionType): number => {
    switch (action.type) {
        case "SUM":
            return state + action.payload
        case "SUB":
            return state - action.payload
        case "DIV":
            return state / action.payload
        case "MULT":
            return state * action.payload
        case "EXP":
            return state ** action.payload
        default:
            return state
    }
}
const result = Exam(10, {type: "MULT", payload: 0})
if (!(result - 1)){
    console.log("IT-INCUBATOR")
}

//Что надо написать вместо XXX чтобы в консоли появилась строка "IT-INCUBATOR"?
