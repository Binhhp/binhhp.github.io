
import { Route, Switch } from "react-router";
import Home from "../component";

export default function route() {

    return (
        <Switch>
            <Route exact path="/"><Home /></Route>
        </Switch>
    )
}