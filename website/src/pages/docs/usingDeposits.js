import React from "react"

import ContentWithSidebar from "../../components/sidebar"

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

import { Link } from "react-router-dom"

const UsingDeposits = () => {
    return (
        <ContentWithSidebar sidebarContent={[]}>
            <section>
                <Link to={"/"}>Back To Home</Link>
                <h1>Documentation - Using Deposits</h1>
                <div className={"description"}>Deposits allow you to store basic key value pairs in a vault</div>
                <div className={"description"}>Deposits require no initialization and are very simple to use</div>
                <div className={"description"}>You can interact with deposits through a deposit instance or directly through a vault</div>
            </section>
            <section>
                <h2>Getting A Deposit Instance And Its Data</h2>
                <div className={"docsDescription"}>Deposit instances are the most effective way to interact with deposits</div>
                <SyntaxHighlighter customStyle={{ width: "calc(min(80%, 600px))", margin: "auto", padding: "15px" }} language={"javascript"} style={vscDarkPlus}>
                    {
                        `// Using React.useState and React.useEffect\nlet [myDeposit, setMyDeposit] = useState(false);\n\nuseEffect(() => {\n\tif(myDeposit === false){\n\t\tmyVault.getDeposit(<depositId>).then(deposit => {\n\t\t\t// IMPORTANT: deposits use their own internal data, so their internal methods WILL update the data, but external methods from a vault or other deposit instance WILL NOT. (See syncData method of deposit)\n\t\t\tsetMyDeposit(deposit);\n\t\t};\n\t} else {\n\t\tconst { exists, data } = myDeposit.data;\n\t};\n});\n\n// Now you can use this deposit without having to get it from the vault every use (which saves time and improves performance)\n// Just make sure myDeposit has been retrieved from async storage before you try to use it`
                    }
                </SyntaxHighlighter>
                <div className={"docsDescription"}>If you only need to access the deposit's data once you can use the getDepositData method</div>
                <SyntaxHighlighter customStyle={{ width: "calc(min(80%, 600px))", margin: "auto", padding: "15px" }} language={"javascript"} style={vscDarkPlus}>
                    {
                        `myVault.getDepositData(<depositId>).then(depositData => {\n\tconst { exists, data } = depositData;\n\t// Do stuff with data here\n\t// This data will NOT UPDATE when the vault itself is changed, which is why this method is intended for one time use\n});`
                    }
                </SyntaxHighlighter>
            </section>
            <section>
                <h2>Setting / Creating A Deposit</h2>
                <div className={"description"}>You can set a deposit to any valid json. Keep in mind that functions are not serializable, and therefore cannot be stored.</div>
                <div className={"description"}>When you set a deposit, if it does not exist already it will create a new deposit, otherwise it will write over the existing deposit.</div>
                <div className={"docsDescription"}>Setting a deposit through an instance</div>
                <SyntaxHighlighter customStyle={{ width: "calc(min(80%, 600px))", margin: "auto", padding: "15px" }} language={"javascript"} style={vscDarkPlus}>
                    {
                        `myDeposit.set(<value>).then(() => {\n\t// Finished setting deposit value\n});`
                    }
                </SyntaxHighlighter>
                <div className={"docsDescription"}>Setting a deposit through a vault</div>
                <SyntaxHighlighter customStyle={{ width: "calc(min(80%, 600px))", margin: "auto", padding: "15px" }} language={"javascript"} style={vscDarkPlus}>
                    {
                        `myVault.setDeposit(<depositId>, <value>).then(() => {\n\t// Finished setting deposit value\n\t// If you are using any deposit instances, you should sync their data here (see below)\n});`
                    }
                </SyntaxHighlighter>
            </section>
            <section>
                <h2>Syncing A Deposit Instance's Data</h2>
                <div className={"description"}>Whenever the value a deposit refers to is set by a vault or a different deposit instance you MUST sync its data, otherwise its data will not be up to date</div>
                <SyntaxHighlighter customStyle={{ width: "calc(min(80%, 600px))", margin: "auto", padding: "15px" }} language={"javascript"} style={vscDarkPlus}>
                    {
                        `myDeposit.syncData().then(() => {\n\t// The data in myDeposit is now up to data\n});`
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
                                <td className={"tableDescription"}>The id of the deposit you are retrieving from or setting in the vault.</td>
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
                    <Link to={"/docs/reset-a-vault"} className={"button"}>
                        <span>Last Page - Reset A Vault</span>
                    </Link>
                    <Link to={"/docs/using-collections"} className={"button"}>
                        <span>Next Page - Using Collections</span>
                    </Link>
                </div>
            </section>
        </ContentWithSidebar>
    )
}

export default UsingDeposits