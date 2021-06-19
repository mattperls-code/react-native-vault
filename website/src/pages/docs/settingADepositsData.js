import React from "react"

import ContentWithSidebar from "../../components/sidebar"

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

import { Link } from "react-router-dom"

const SettingADepositsData = () => {
    return (
        <ContentWithSidebar>
            <section>
                <Link to={"/"}>Back To Home</Link>
                <h1>Setting A Deposit's Data</h1>
                <div className={"description"}>There are 2 ways to set the data in a deposit:</div>
            </section>
            <section>
                <h2>Usage</h2>
                <div className={"docsDescription"}>With a deposit instance</div>
                <SyntaxHighlighter customStyle={{ width: "calc(min(80%, 600px))", margin: "auto", padding: "15px" }} language={"javascript"} style={vscDarkPlus}>
                    {
`myDeposit.set(<value>).then(() => {
    // Deposit has been set
});`
                    }
                </SyntaxHighlighter>
                <div className={"docsDescription"}>Through a vault</div>
                <SyntaxHighlighter customStyle={{ width: "calc(min(80%, 600px))", margin: "auto", padding: "15px" }} language={"javascript"} style={vscDarkPlus}>
                    {
`myVault.setDeposit(<depositId>, <value>).then(() => {
    // Deposit has been set
    // At this point you MUST sync any deposits that refer to the depositId you provided, otherwise they will not be up to date
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
                                <td>depositId</td>
                                <td>String</td>
                                <td className={"tableDescription"}>The id of the deposit you are setting.</td>
                                <td rowSpan={2}><strong>Argument Is Required</strong></td>
                            </tr>
                            <tr>
                                <td>value</td>
                                <td>Any</td>
                                <td className={"tableDescription"}>The value you are setting the data of the target deposit to.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={"navContainer"}>
                    <Link to={"/docs/getting-a-deposits-data"} className={"button"}>
                        <span>Last Page - Getting A Deposit's Data</span>
                    </Link>
                    <Link to={"/docs/syncing-a-deposit-instance"} className={"button"}>
                        <span>Next Page - Syncing A Deposit Instance</span>
                    </Link>
                </div>
            </section>
        </ContentWithSidebar>
    )
}

export default SettingADepositsData