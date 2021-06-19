import React from "react"

import ContentWithSidebar from "../../components/sidebar"

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

import { Link } from "react-router-dom"

const RemovingItemsFromACollection = () => {
    return (
        <ContentWithSidebar>
            <section>
                <Link to={"/"}>Back To Home</Link>
                <h1>Removing Items From A Collection</h1>
                <div className={"description"}>These collection methods allow you to remove certain items based on the test function or uuid you pass in</div>
            </section>
            <section>
                <h2>Usage</h2>
                <div className={"docsDescription"}>Remove one item by test (first found)</div>
                <SyntaxHighlighter customStyle={{ width: "calc(min(80%, 600px))", margin: "auto", padding: "15px" }} language={"javascript"} style={vscDarkPlus}>
                    {
`myCollection.removeOne(<test>).then(() => {
    // Finished updating one
    // If no items pass the test function provided, you will get a warning in the console (won't effect functionality)
});`
                    }
                </SyntaxHighlighter>
                <div className={"docsDescription"}>Remove one item by uuid (first found)</div>
                <SyntaxHighlighter customStyle={{ width: "calc(min(80%, 600px))", margin: "auto", padding: "15px" }} language={"javascript"} style={vscDarkPlus}>
                    {
`myCollection.removeOneByUuid(<uuid>).then(() => {
    // Finished updating one by uuid
    // If no items matched the uuid provided, you will get a warning in the console (won't effect functionality)
});`
                    }
                </SyntaxHighlighter>
                <div className={"docsDescription"}>Remove multiple by test</div>
                <SyntaxHighlighter customStyle={{ width: "calc(min(80%, 600px))", margin: "auto", padding: "15px" }} language={"javascript"} style={vscDarkPlus}>
                    {
`myCollection.removeMultiple(<test>).then(() => {
    // Finished updating multiple
});`
                    }
                </SyntaxHighlighter>
                <div className={"docsDescription"}>Remove multiple by uuids</div>
                <SyntaxHighlighter customStyle={{ width: "calc(min(80%, 600px))", margin: "auto", padding: "15px" }} language={"javascript"} style={vscDarkPlus}>
                    {
`myCollection.removeMultipleByUuids(<uuids>).then(() => {
    // Finished updating multiple by uuids
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
                                <td>test</td>
                                <td>Function &rarr; Boolean</td>
                                <td className={"tableDescription"}>This function will be executed for every item in the collection, with the current item passed in. If the result of the function is truthy, it will remove the item from the collection.</td>
                                <td rowSpan={5}><strong>Argument Is Required</strong></td>
                            </tr>
                            <tr>
                                <td>uuid</td>
                                <td>String</td>
                                <td className={"tableDescription"}>The uuid of the item that should be removed from the collection.</td>
                            </tr>
                            <tr>
                                <td>uuids</td>
                                <td>Array&lt;String&gt;</td>
                                <td className={"tableDescription"}>The uuids of the items that should be removed from the collection.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={"navContainer"}>
                    <Link to={"/docs/updating-items-in-a-collection"} className={"button"}>
                        <span>Last Page - Updating Items In A Collection</span>
                    </Link>
                    <Link to={"/docs/finding-items-in-a-collection"} className={"button"}>
                        <span>Next Page - Finding Items In A Collection</span>
                    </Link>
                </div>
            </section>
        </ContentWithSidebar>
    )
}

export default RemovingItemsFromACollection