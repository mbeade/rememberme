import databaseRef from '../../firebase/firebase';
const tagsRef = databaseRef.child("tags");

export const TAGS_GET_ALLL = 'TAGS_GET_ALLL';
export const TAGS_CREATE = 'TAGS_CREATE';

export const getAllTags = () => {
    return dispatch => {
        tagsRef.on('value', snapshot => {
            dispatch({
                type: TAGS_GET_ALLL,
                payload: snapshot.val()
            });
        });
    }
}

export const createTag = (tag, key) => {
    if (key) {
        return (dispatch) => {
            databaseRef.child(`tags/${key}`).set(tag, (error) => console.log('Error saving tags!')).then(() => {
                dispatch({
                    type: TAGS_CREATE
                });
            });
        }
    }
}