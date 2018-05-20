export const ADD = 'ADD';
export const SUBSTRACT = 'SUBSTRACT';

export const add = (value) => {
    return {
        type: ADD,
        payload: value
    }
}

export const substract = (value) => {
    return {
        type: SUBSTRACT,
        payload: value
    }
}