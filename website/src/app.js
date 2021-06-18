import React from "react"

import "./styles.scss"

import { HashRouter, Switch, Route } from "react-router-dom"

import Home from "./pages/home/index"
import Example from "./pages/example"
import GettingStartedDocs from "./pages/docs/gettingStarted"
import CreateAVault from "./pages/docs/createAVault"
import ResetAVault from "./pages/docs/resetAVault"
import UsingDeposits from "./pages/docs/usingDeposits"

const App = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path={"/"} exact component={Home} />
                <Route path={"/example"} exact component={Example} />
                <Route path={"/docs/getting-started"} exact component={GettingStartedDocs} />
                <Route path={"/docs/reset-a-vault"} exact component={ResetAVault} />
                <Route path={"/docs/create-a-vault"} exact component={CreateAVault} />
                <Route path={"/docs/using-deposits"} exact component={UsingDeposits} />
            </Switch>
        </HashRouter>
    )
}

export default App