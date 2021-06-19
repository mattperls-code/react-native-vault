import React from "react"

import ContentWithSidebar from "../../components/sidebar"

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

import { Link } from "react-router-dom"

const InitializingAVault = () => {
    return (
        <ContentWithSidebar>
            <section>
                <Link to={"/"}>Back To Home</Link>
                <h1>Initializing A Vault</h1>
                <div className={"description"}>Vaults must be initialized before they can be used</div>
                <div className={"description"}>They should also be initialized after they have been reset</div>
            </section>
            <section>
                <h2>Usage</h2>
                <SyntaxHighlighter customStyle={{ width: "calc(min(80%, 600px))", margin: "auto", padding: "15px" }} language={"javascript"} style={vscDarkPlus}>
                    {
`myVault.initialize(<collectionIds>).then(() => {
    // You can safely use this vault now
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
                                <th className={"tableDescription"}>Description</th>
                                <th>Default</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>collectionIds</td>
                                <td>Array&lt;String&gt;</td>
                                <td className={"tableDescription"}>The ids of the collections you want so store in the vault. For example, if you wanted to store family and friends as two collections, you would set this to ["family", "friends"].</td>
                                <td><strong>Argument Is Required</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={"navContainer"}>
                    <Link to={"/docs/creating-a-vault"} className={"button"}>
                        <span>Last Page - Creating A Vault</span>
                    </Link>
                    <Link to={"/docs/resetting-a-vault"} className={"button"}>
                        <span>Next Page - Resetting A Vault</span>
                    </Link>
                </div>
            </section>
        </ContentWithSidebar>
    )
}

export default InitializingAVault