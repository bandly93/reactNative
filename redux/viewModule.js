export const UPDATE_VIEW = 'UPDATE_VIEW';

export const updateView = json => ({
    type : UPDATE_VIEW,
    data : json.data,
});

export const viewReducer = (state = initialState, action) =>{
    switch(action.type){
        case UPDATE_VIEW :
            return { ...state,...action.data};
        default :
            return state;
    }
}

const initialState = {
    viewHeight : null,
    viewWidth : null,
}

export default viewReducer;