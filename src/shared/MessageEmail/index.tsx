import "./message.css";
import React, { useState } from "react";
import FormEmail from "./FormEmail/FormEmail";
import SendMailButton from "./SendMailButton";

export default function MessageEmail(){
    
    const [isMessage, setMessage] = useState(false);
    const hanlder = () => {
        setMessage(!isMessage);
    };

    return(
        <div>
            {
                isMessage ?
                <div id="open-message" className="meeychat__opened"> 
                    <div className="meeychat__list">
                        <FormEmail hanlder={hanlder}></FormEmail>
                    </div>
                </div>
            :   <SendMailButton hanlder={hanlder}></SendMailButton>
            }
        </div>
    )
}