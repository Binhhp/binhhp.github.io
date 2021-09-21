
import { constants } from "../actions/email.type";

const initialState: IState = {
    loading: false,
    data: "",
    errors: ""
};

export const EmailReducers = (state = initialState, action: Action) =>{
    switch(action.type){
        case constants.FETCH_EMAIL_REQUEST:
            return{
                ...state,
                loading: true
            };
        case constants.FETCH_EMAIL_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            };
        case constants.FETCH_EMAIL_FAILURE:
            return{
                loading: false,
                data: "",
                error: action.payload
            };
        default: return state;
    }
}