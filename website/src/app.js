import React from "react"

import "./styles.scss"

import { HashRouter, Switch, Route } from "react-router-dom"

import Home from "./pages/home/index"
import Example from "./pages/example"
import GettingStartedDocs from "./pages/docs/gettingStarted"

const App = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path={"/"} exact component={Home} />
                <Route path={"/example"} exact component={Example} />
                <Route path={"/docs/getting-started"} exact component={GettingStartedDocs} />
            </Switch>
        </HashRouter>
    )
}

export default App