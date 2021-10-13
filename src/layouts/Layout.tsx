import React from "react";
import Message from "../shared/MessageEmail";

export default function Layout(props: any) {
    return(
        <React.Fragment>
            { props.children }
            <Message />
        </React.Fragment>
    )
}