import { controller } from '../actions/email.action';
import axios from "axios"
import responseStatus from "../../apis/responseStatus";
import { toast } from "react-toastify";
import { Dispatch } from "react";

export const SendMail = (message: IMessage) => {
    return async (dispatch: Dispatch<any>) =>{
        dispatch(controller.fetchEmailRequest());

        const url = process.env.REACT_APP_API_SEND_MAIL;

        if(url === undefined || url === null) return dispatch(controller.fetchEmailFailure("Error api"));

        const options = {
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        };

        const response: any = await axios.post(url, message, options)
            .catch(error => {
                return responseStatus(error.response.status, error.message, "", error.response.data);
            });
        
        if(response.code > 204){
            toast.error(response.message);
            return dispatch(controller.fetchEmailFailure(response.message));
        }
        else{
            toast.success("Send email successly");
            return dispatch(controller.fetchEmailSuccess("OK"));
        }
    }
}