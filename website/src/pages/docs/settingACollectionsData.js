import React from "react"

import ContentWithSidebar from "../../components/sidebar"

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

import { Link } from "react-router-dom"

const SettingACollectionsData = () => {
    return (
        <ContentWithSidebar>
            <section>
                <Link to={"/"}>Back To Home</Link>
                <h1>Setting A Collection's Data</h1>
                <div className={"description"}>There are 2 ways to set the data in a collection:</div>
            </section>
            <section>
                <h2>Usage</h2>
                <div className={"docsDescription"}>With a collection instance</div>
                <SyntaxHighlighter customStyle={{ width: "calc(min(80%, 600px))", margin: "auto", padding: "15px" }} language={"javascript"} style={vscDarkPlus}>
                    {
`myCollection.set(<value>).then(() => {
    // Collection has been set
});`
                    }
                </SyntaxHighlighter>
                <div className={"docsDescription"}>Through a vault</div>
                <SyntaxHighlighter customStyle={{ width: "calc(min(80%, 600px))", margin: "auto", padding: "15px" }} language={"javascript"} style={vscDarkPlus}>
                    {
`myVault.setCollection(<collectionId>, <value>).then(() => {
    // Collection has been set
    // At this point you MUST sync any collections that refer to the collectionId you provided, otherwise they will not be up to date
});`
                    }
                </SyntaxHighlighter>
            </section>
            <section>
                <h2>Arguments</h2>
                <div className={"tableContainer"}>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Description</th>
                                <th>Default</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>collectionId</td>
                                <td>String</td>
                                <td className={"tableDescription"}>The id of the collection you are setting.</td>
                                <td rowSpan={2}><strong>Argument Is Required</strong></td>
                            </tr>
                            <tr>
                                <td>value</td>
                                <td>Array&lt;Object&gt;</td>
                                <td className={"tableDescription"}>The value you are setting the data of the collection to. For each object in the array, if the object does not include the "_uuid" property, one will be generated automatically.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={"navContainer"}>
                    <Link to={"/docs/getting-a-collections-data"} className={"button"}>
                        <span>Last Page - Getting A Collection's Data</span>
                    </Link>
                    <Link to={"/docs/syncing-a-collection-instance"} className={"button"}>
                        <span>Next Page - Syncing A Collection Instance</span>
                    </Link>
                </div>
            </section>
        </ContentWithSidebar>
    )
}

export default SettingACollectionsData