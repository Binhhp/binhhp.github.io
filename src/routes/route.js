import React from "react";
import { Route, Switch } from "react-router";
import Home from "../component/Home";

export default function route(){

    return (
        <Switch>
            <Route exact path="/"><Home /></Route>
        </Switch>
    )
}