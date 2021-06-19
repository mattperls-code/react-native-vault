import React from "react"

import ContentWithSidebar from "../../components/sidebar"

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

import { Link } from "react-router-dom"

const AddingItemsToACollection = () => {
    return (
        <ContentWithSidebar>
            <section>
                <Link to={"/"}>Back To Home</Link>
                <h1>Adding Items To A Collection</h1>
                <div className={"description"}></div>
            </section>
            <section>
                <h2>Usage</h2>
                <div className={"docsDescription"}>Adding one item</div>
                <SyntaxHighlighter customStyle={{ width: "calc(min(80%, 600px))", margin: "auto", padding: "15px" }} language={"javascript"} style={vscDarkPlus}>
                    {
`myCollection.addOne(<value>).then(() => {
    // Finished adding one
});`
                    }
                </SyntaxHighlighter>
                <div className={"docsDescription"}>Adding multiple items</div>
                <SyntaxHighlighter customStyle={{ width: "calc(min(80%, 600px))", margin: "auto", padding: "15px" }} language={"javascript"} style={vscDarkPlus}>
                    {
`myCollection.addMultiple(<values>).then(() => {
    // Finished adding multiple
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
                                <td>value</td>
                                <td>Object</td>
                                <td className={"tableDescription"}>The value you are adding to the collection. If it does not include a "_uuid" property, one will be generated automatically.</td>
                                <td rowSpan={2}><strong>Argument Is Required</strong></td>
                            </tr>
                            <tr>
                                <td>values</td>
                                <td>Array&lt;Object&gt;</td>
                                <td className={"tableDescription"}>The values you are adding to the collection. For each object in the array, if the object does not include the "_uuid" property, one will be generated automatically.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={"navContainer"}>
                    <Link to={"/docs/syncing-a-collection-instance"} className={"button"}>
                        <span>Last Page - Syncing A Collection Instance</span>
                    </Link>
                    <Link to={"/docs/setting-items-in-a-collection"} className={"button"}>
                        <span>Next Page - Setting Items In A Collection</span>
                    </Link>
                </div>
            </section>
        </ContentWithSidebar>
    )
}

export default AddingItemsToACollection