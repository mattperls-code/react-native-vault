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
                <h1>Finding Items In A Collection</h1>
                <div className={"description"}>These collection methods allow you to find certain items based on the test function or uuid you pass in</div>
            </section>
            <section>
                <h2>Usage</h2>
                <div className={"docsDescription"}>Find one item by test (first found)</div>
                <SyntaxHighlighter customStyle={{ width: "calc(min(80%, 600px))", margin: "auto", padding: "15px" }} language={"javascript"} style={vscDarkPlus}>
                    {
`myCollection.findOne(<test>).then(item => {
    if(item != null){
        // Found item
    };
    // If no item matched the test provided, you will get a warning in the console and the returned item will be null
});`
                    }
                </SyntaxHighlighter>
                <div className={"docsDescription"}>Find one item by uuid (first found)</div>
                <SyntaxHighlighter customStyle={{ width: "calc(min(80%, 600px))", margin: "auto", padding: "15px" }} language={"javascript"} style={vscDarkPlus}>
                    {
`myCollection.findOneByUuid(<uuid>).then(item => {
    if(item != null){
        // Found item
    };
    // If no item matched the uuid provided, you will get a warning in the console and the returned item will be null
});`
                    }
                </SyntaxHighlighter>
                <div className={"docsDescription"}>Find multiple by test</div>
                <SyntaxHighlighter customStyle={{ width: "calc(min(80%, 600px))", margin: "auto", padding: "15px" }} language={"javascript"} style={vscDarkPlus}>
                    {
`myCollection.findMultiple(<test>).then(items => {
    // items is an array of the found collection items, and if none were found it will be empty
    // Finished finding multiple
});`
                    }
                </SyntaxHighlighter>
                <div className={"docsDescription"}>Find multiple by uuids</div>
                <SyntaxHighlighter customStyle={{ width: "calc(min(80%, 600px))", margin: "auto", padding: "15px" }} language={"javascript"} style={vscDarkPlus}>
                    {
`myCollection.findMultipleByUuids(<test>).then(items => {
    // items is an array of the found collection items, and if none were found it will be empty
    // Finished finding multiple by uuids
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
                                <td className={"tableDescription"}>This function will be executed for every item in the collection, with the current item passed in. If the result of the function is truthy, it will consider the item as found.</td>
                                <td rowSpan={5}><strong>Argument Is Required</strong></td>
                            </tr>
                            <tr>
                                <td>uuid</td>
                                <td>String</td>
                                <td className={"tableDescription"}>The uuid of the item that should be found from the collection.</td>
                            </tr>
                            <tr>
                                <td>uuids</td>
                                <td>Array&lt;String&gt;</td>
                                <td className={"tableDescription"}>The uuids of the items that should be found from the collection.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={"navContainer"}>
                    <Link to={"/docs/removing-items-from-a-collection"} className={"button"}>
                        <span>Last Page - Removing Items From A Collection</span>
                    </Link>
                </div>
            </section>
        </ContentWithSidebar>
    )
}

export default RemovingItemsFromACollection