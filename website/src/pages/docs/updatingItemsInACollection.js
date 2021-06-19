import React from "react"

import ContentWithSidebar from "../../components/sidebar"

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

import { Link } from "react-router-dom"

const UpdatingItemsInACollection = () => {
    return (
        <ContentWithSidebar>
            <section>
                <Link to={"/"}>Back To Home</Link>
                <h1>Updating Items In A Collection</h1>
                <div className={"description"}>These collection methods allow you to update certain items based on the test function or uuid you pass in</div>
                <div className={"description"}>In updating, the item will be merged with the value using Object.assign</div>
            </section>
            <section>
                <h2>Usage</h2>
                <div className={"docsDescription"}>Update one item by test (first found)</div>
                <SyntaxHighlighter customStyle={{ width: "calc(min(80%, 600px))", margin: "auto", padding: "15px" }} language={"javascript"} style={vscDarkPlus}>
                    {
`myCollection.updateOne(<test>, <value>).then(() => {
    // Finished updating one
    // If no items pass the test function provided, you will get a warning in the console (won't effect functionality)
});`
                    }
                </SyntaxHighlighter>
                <div className={"docsDescription"}>Update one item by uuid (first found)</div>
                <SyntaxHighlighter customStyle={{ width: "calc(min(80%, 600px))", margin: "auto", padding: "15px" }} language={"javascript"} style={vscDarkPlus}>
                    {
`myCollection.updateOneByUuid(<uuid>, <value>).then(() => {
    // Finished updating one by uuid
    // If no items matched the uuid provided, you will get a warning in the console (won't effect functionality)
});`
                    }
                </SyntaxHighlighter>
                <div className={"docsDescription"}>Update multiple by test</div>
                <SyntaxHighlighter customStyle={{ width: "calc(min(80%, 600px))", margin: "auto", padding: "15px" }} language={"javascript"} style={vscDarkPlus}>
                    {
`myCollection.updateMultiple(<test>, <valueCallback>).then(() => {
    // Finished updating multiple
});`
                    }
                </SyntaxHighlighter>
                <div className={"docsDescription"}>Update multiple by uuids</div>
                <SyntaxHighlighter customStyle={{ width: "calc(min(80%, 600px))", margin: "auto", padding: "15px" }} language={"javascript"} style={vscDarkPlus}>
                    {
`myCollection.updateMultipleByUuids(<uuids>, <valueCallback>).then(() => {
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
                                <td className={"tableDescription"}>This function will be executed for every item in the collection, with the current item passed in. If the result of the function is truthy, it will update the item with the value or valueCallback provided.</td>
                                <td rowSpan={5}><strong>Argument Is Required</strong></td>
                            </tr>
                            <tr>
                                <td>uuid</td>
                                <td>String</td>
                                <td className={"tableDescription"}>The uuid of the item that should be updated with the value provided.</td>
                            </tr>
                            <tr>
                                <td>uuids</td>
                                <td>Array&lt;String&gt;</td>
                                <td className={"tableDescription"}>The uuids of the items that should be updated with the valueCallback provided.</td>
                            </tr>
                            <tr>
                                <td>value</td>
                                <td>Object</td>
                                <td className={"tableDescription"}>The value the item should be updated with.</td>
                            </tr>
                            <tr>
                                <td>valueCallback</td>
                                <td>Function &rarr; Object</td>
                                <td className={"tableDescription"}>This argument allows multiple items to be updated dynamically. For each item that passes the test function, the item will be passed into this function, and will then be updated with the function's result.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={"navContainer"}>
                    <Link to={"/docs/setting-items-in-a-collection"} className={"button"}>
                        <span>Last Page - Setting Items In A Collection</span>
                    </Link>
                    <Link to={"/docs/removing-items-from-a-collection"} className={"button"}>
                        <span>Next Page - Removing Items From A Collection</span>
                    </Link>
                </div>
            </section>
        </ContentWithSidebar>
    )
}

export default UpdatingItemsInACollection