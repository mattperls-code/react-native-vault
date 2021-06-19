import React from "react"

import ContentWithSidebar from "../../components/sidebar"

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

import { Link } from "react-router-dom"

const GettingADepositsData = () => {
    return (
        <ContentWithSidebar>
            <section>
                <Link to={"/"}>Back To Home</Link>
                <h1>Getting A Deposit's Data</h1>
                <div className={"description"}>There are 2 ways to get the data stored in a deposit:</div>
            </section>
            <section>
                <h2>Usage</h2>
                <div className={"docsDescription"}>With a deposit instance</div>
                <SyntaxHighlighter customStyle={{ width: "calc(min(80%, 600px))", margin: "auto", padding: "15px" }} language={"javascript"} style={vscDarkPlus}>
                    {
`const { exists, data } = myDeposit.data;`
                    }
                </SyntaxHighlighter>
                <div className={"docsDescription"}>Through a vault</div>
                <SyntaxHighlighter customStyle={{ width: "calc(min(80%, 600px))", margin: "auto", padding: "15px" }} language={"javascript"} style={vscDarkPlus}>
                    {
`myVault.getDepositData(<depositId>).then(depositData => {
    const { exists, data } = depositData;
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
                                <td className={"tableDescription"}>The id of the deposit you are getting data from.</td>
                                <td><strong>Argument Is Required</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={"navContainer"}>
                    <Link to={"/docs/getting-a-deposit-instance"} className={"button"}>
                        <span>Last Page - Getting A Deposit Instance</span>
                    </Link>
                    <Link to={"/docs/setting-a-deposits-data"} className={"button"}>
                        <span>Next Page - Setting A Deposit's Data</span>
                    </Link>
                </div>
            </section>
        </ContentWithSidebar>
    )
}

export default GettingADepositsData