export const SET_NAME = 'SET_NAME';
export const SET_AGE = 'SET_AGE';

export const setName = (name) => {
    return {
        type: SET_NAME,
        payload: name
    }
}

export const setAge = (age) => {
    return {
        type: SET_AGE,
        payload: age
    }
}