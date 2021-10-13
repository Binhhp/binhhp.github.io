
import { lazy } from "react";
import { Route, Switch } from "react-router";
const Home = lazy(() => import("../component"))

export default function route() {

    return (
        <Switch>
            <Route exact path="/"><Home /></Route>
        </Switch>
    )
}