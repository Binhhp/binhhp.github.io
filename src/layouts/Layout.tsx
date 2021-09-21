import React from "react";
import Message from "../shared/MessageEmail";

export default function Layout(props: any) {
    return(
        <React.Fragment>
            <div className="menu__wrapper" id="wrapper">
                { props.children }
            </div>
            <Message />
        </React.Fragment>
    )
}