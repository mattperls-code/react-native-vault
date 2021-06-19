import React from "react"

import ContentWithSidebar from "../../components/sidebar"

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

import { Link } from "react-router-dom"

const SyncingADepositInstance = () => {
    return (
        <ContentWithSidebar>
            <section>
                <Link to={"/"}>Back To Home</Link>
                <h1>Syncing A Deposit Instance</h1>
                <div className={"description"}>When a deposit is changed from a source other than itself it MUST be synced after</div>
                <div className={"description"}>Deposit instances virtualize their data, so their data is only updated from its own methods</div>
            </section>
            <section>
                <h2>Usage</h2>
                <SyntaxHighlighter customStyle={{ width: "calc(min(80%, 600px))", margin: "auto", padding: "15px" }} language={"javascript"} style={vscDarkPlus}>
                    {
`myDeposit.syncData().then(() => {
    // deposit data is now up to date
});`
                    }
                </SyntaxHighlighter>
                <div className={"navContainer"}>
                    <Link to={"/docs/setting-a-deposits-data"} className={"button"}>
                        <span>Last Page - Setting A Deposit's Data</span>
                    </Link>
                    <Link to={"/docs/getting-a-collection-instance"} className={"button"}>
                        <span>Next Page - Getting A Collection Instance</span>
                    </Link>
                </div>
            </section>
        </ContentWithSidebar>
    )
}

export default SyncingADepositInstance