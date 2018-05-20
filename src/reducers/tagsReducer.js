
import { TAGS_CREATE, TAGS_GET_ALLL } from '../actions/tagsActionCreator';

const initialState = {
    index: 3,
    tags: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case TAGS_GET_ALLL:
            state = {
                ...state,
                tags: action.payload
            }
            break;
        case TAGS_CREATE:
            state = {
                ...state,
                index: state.index + 1
            }
            break;
    }

    return state;
}