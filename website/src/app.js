import React from "react"

import "./globals.scss"

import { HashRouter, Switch, Route } from "react-router-dom"

import Home from "./pages/home/index"
import GettingStartedDocs from "./pages/docs/gettingStarted"

const App = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path={"/"} exact component={Home} />
                <Route path={"/docs/getting-started"} exact component={GettingStartedDocs} />
            </Switch>
        </HashRouter>
    )
}

export default App