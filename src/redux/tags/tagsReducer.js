
import { TAGS_CREATE, TAGS_GET_ALLL } from './tagsActionCreator';

const initialState = {
    index: 3,
    tags: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case TAGS_GET_ALLL:
            state = {
                ...state,
                tags: action.payload,
                index: action.payload.length
            }
            break;
        case TAGS_CREATE:
            state = {
                ...state
            }
            break;
    }

    return state;
}