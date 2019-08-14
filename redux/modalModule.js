const initialState = {
    modalData : {},
    modalActive : false,
}

export const TOGGLE_MODAL_OFF = 'TOGGLE_MODAL_OFF';
export const TOGGLE_MODAL_ON = 'TOGGLE_MODAL_ON';
export const UPDATE_MODAL_PROPS = 'UPDATE_MODAL_PROPS';

export const toggleModalOff = () => {
    return {
        type : TOGGLE_MODAL_OFF,
    }
}

export const toggleModalOn = () => {
    return {
        type : TOGGLE_MODAL_ON,
    }
}

export const updateModalProps = (data) =>{
    return{
        type : UPDATE_MODAL_PROPS,
        data,
    }
}

export const modalReducer = (state = initialState, action) => {
    switch(action.type){
        case TOGGLE_MODAL_OFF :
            return {...state,...{modalActive : false}}
        case TOGGLE_MODAL_ON : 
            return {...state,...{modalActive: true}}
        case UPDATE_MODAL_PROPS :
            return {...state,...{modalData : action.data}}
        default :
            return state;
    }
}

export default modalReducer;