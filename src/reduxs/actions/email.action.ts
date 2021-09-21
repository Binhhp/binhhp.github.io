import{ constants } from "./email.type";

export class controller {
    static fetchEmailRequest = (): Action => {
        return{
            type: constants.FETCH_EMAIL_REQUEST
        }
    }

    static fetchEmailSuccess = (message: string): Action => {
        return{
            type: constants.FETCH_EMAIL_SUCCESS,
            payload: message
        }
    }

    static fetchEmailFailure = (errors: string): Action => {
        return{
            type: constants.FETCH_EMAIL_FAILURE,
            payload: errors
        }
    }
}
