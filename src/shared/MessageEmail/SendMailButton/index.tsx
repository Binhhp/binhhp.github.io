import { useState } from "react";
import LoadingMessage from "./LoadingMessage";
import MessageSVG from "./MessageSVG";
import "./btn-sendmail.css";

export default function SendMailButton({ hanlder }: any) {

    const [isHover, setHover] = useState<boolean>(false);

    return(
        <div className="meeychat">
            <div className="meeychat__chat">
                <div className="meeychat__style"></div>
                <div className="meeychat__style" 
                onClick={hanlder} 
                onMouseOver={() => setHover(true)}
                onMouseLeave={() => setHover(false)}>

                    <div className="meeychat__list-chat">
                        <button aria-label="Open LiveChat chat widget" className="meeychat__btn" type="button">
                            <div aria-hidden="true" className={isHover ? "lc-loader" : "meeychat__btn-toggle"}>
                                <MessageSVG classTwo={isHover === false ? "lc-svg-circle" : ""} />
                                <div className={isHover ? "lc-loading" : "meeychat__btn-ke"}>
                                    {
                                        isHover ? <LoadingMessage /> : ""
                                    }
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}