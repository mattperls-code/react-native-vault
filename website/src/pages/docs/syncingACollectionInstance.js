import React from "react"

import ContentWithSidebar from "../../components/sidebar"

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

import { Link } from "react-router-dom"

const SyncingACollectionInstance = () => {
    return (
        <ContentWithSidebar>
            <section>
                <Link to={"/"}>Back To Home</Link>
                <h1>Syncing A Collection Instance</h1>
                <div className={"description"}>When a collection is changed from a source other than itself it MUST be synced after</div>
                <div className={"description"}>Collection instances virtualize their data, so their data is only updated from its own methods</div>
            </section>
            <section>
                <h2>Usage</h2>
                <SyntaxHighlighter customStyle={{ width: "calc(min(80%, 600px))", margin: "auto", padding: "15px" }} language={"javascript"} style={vscDarkPlus}>
                    {
`myCollection.syncData().then(() => {
    // collection data is now up to date
});`
                    }
                </SyntaxHighlighter>
                <div className={"navContainer"}>
                    <Link to={"/docs/setting-a-collections-data"} className={"button"}>
                        <span>Last Page - Setting A Collection's Data</span>
                    </Link>
                    <Link to={"/docs/adding-items-to-a-collection"} className={"button"}>
                        <span>Next Page - Adding Items To A Collection</span>
                    </Link>
                </div>
            </section>
        </ContentWithSidebar>
    )
}

export default SyncingACollectionInstance