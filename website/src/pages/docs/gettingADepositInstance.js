import React from "react"

import ContentWithSidebar from "../../components/sidebar"

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

import { Link } from "react-router-dom"

const GettingADepositInstance = () => {
    return (
        <ContentWithSidebar>
            <section>
                <Link to={"/"}>Back To Home</Link>
                <h1>Getting A Deposit Instance</h1>
                <div className={"description"}>Deposit instances are easy to use and increase performance by virtualizing their own data</div>
            </section>
            <section>
                <h2>Usage</h2>
                <div className={"docsDescription"}>Remember that if the deposit it refers to is changed externally, you MUST sync the deposit instance's data (See Syncing A Deposit Instance)</div>
                <SyntaxHighlighter customStyle={{ width: "calc(min(80%, 600px))", margin: "auto", padding: "15px" }} language={"javascript"} style={vscDarkPlus}>
                    {
`let [myDeposit, setMyDeposit] = useState(false);

useEffect(() => {
    if(myDeposit === false){
        myVault.getDeposit(<depositId>).then(setMyDeposit);
    };
}, [myDeposit]);

// Always check that myDeposit !== false before attempting to use it`
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
                                <td className={"tableDescription"}>The id of the deposit you are getting an instance of.</td>
                                <td><strong>Argument Is Required</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={"navContainer"}>
                    <Link to={"/docs/resetting-a-vault"} className={"button"}>
                        <span>Last Page - Resetting A Vault</span>
                    </Link>
                    <Link to={"/docs/getting-a-deposits-data"} className={"button"}>
                        <span>Next Page - Getting A Deposit's Data</span>
                    </Link>
                </div>
            </section>
        </ContentWithSidebar>
    )
}

export default GettingADepositInstance