import React from "react"

import "./styles.scss"

import { HashRouter, Switch, Route } from "react-router-dom"

import Home from "./pages/home/index"
import Example from "./pages/example"

import GettingStartedDocs from "./pages/docs/gettingStarted"

import CreatingAVault from "./pages/docs/creatingAVault"
import InitializingAVault from "./pages/docs/initializingAVault"
import ResettingAVault from "./pages/docs/resettingAVault"

import GettingADepositInstance from "./pages/docs/gettingADepositInstance"
import GettingADepositsData from "./pages/docs/gettingADepositsData"
import SettingADepositsData from "./pages/docs/settingADepositsData"
import SyncingADepositInstance from "./pages/docs/syncingADepositInstance"

import GettingACollectionInstance from "./pages/docs/gettingACollectionInstance"
import GettingACollectionsData from "./pages/docs/gettingACollectionsData"
import SettingACollectionsData from "./pages/docs/settingACollectionsData"
import SyncingACollectionInstance from "./pages/docs/syncingACollectionInstance"

import AddingItemsToACollection from "./pages/docs/addingItemsToACollection"
import SettingItemsInACollection from "./pages/docs/settingItemsInACollection"
import UpdatingItemsInACollection from "./pages/docs/updatingItemsInACollection"
import RemovingItemsFromACollection from "./pages/docs/removingItemsFromACollection"
import FindingItemsInACollection from "./pages/docs/findingItemsInACollection"

const App = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path={"/"} exact component={Home} />
                <Route path={"/example"} exact component={Example} />

                <Route path={"/docs/getting-started"} exact component={GettingStartedDocs} />

                <Route path={"/docs/creating-a-vault"} exact component={CreatingAVault} />
                <Route path={"/docs/initializing-a-vault"} exact component={InitializingAVault} />
                <Route path={"/docs/resetting-a-vault"} exact component={ResettingAVault} />

                <Route path={"/docs/getting-a-deposit-instance"} exact component={GettingADepositInstance} />
                <Route path={"/docs/getting-a-deposits-data"} exact component={GettingADepositsData} />
                <Route path={"/docs/setting-a-deposits-data"} exact component={SettingADepositsData} />
                <Route path={"/docs/syncing-a-deposit-instance"} exact component={SyncingADepositInstance} />

                <Route path={"/docs/getting-a-collection-instance"} exact component={GettingACollectionInstance} />
                <Route path={"/docs/getting-a-collections-data"} exact component={GettingACollectionsData} />
                <Route path={"/docs/setting-a-collections-data"} exact component={SettingACollectionsData} />
                <Route path={"/docs/syncing-a-collection-instance"} exact component={SyncingACollectionInstance} />

                <Route path={"/docs/adding-items-to-a-collection"} exact component={AddingItemsToACollection} />
                <Route path={"/docs/setting-items-in-a-collection"} exact component={SettingItemsInACollection} />
                <Route path={"/docs/updating-items-in-a-collection"} exact component={UpdatingItemsInACollection} />
                <Route path={"/docs/removing-items-from-a-collection"} exact component={RemovingItemsFromACollection} />
                <Route path={"/docs/finding-items-in-a-collection"} exact component={FindingItemsInACollection} />
            </Switch>
        </HashRouter>
    )
}

export default App