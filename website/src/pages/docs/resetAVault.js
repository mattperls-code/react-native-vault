import React from "react"

import ContentWithSidebar from "../../components/sidebar"

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

import { Link } from "react-router-dom"

const ResetAVault = () => {
    return (
        <ContentWithSidebar sidebarContent={[]}>
            <section>
                <Link to={"/"}>Back To Home</Link>
                <h1>Documentation - Reset A Vault</h1>
                <div className={"description"}>During development, it can be very helpful to fully reset all the data in a vault</div>
                <div className={"description"}>This can be used to simulate a user who has not yet used the app</div>
                <div className={"description"}>You can reset a vault in production but its is HIGHLY discouraged, and is likely to cause issues if not properly initialized after</div>
            </section>
            <section>
                <h2>Vault Reset Method</h2>
                <SyntaxHighlighter customStyle={{ width: "calc(min(80%, 600px))", margin: "auto", padding: "15px" }} language={"javascript"} style={vscDarkPlus}>
                    {
                        `myVault.reset().then(() => {\n\t// Vault has been reset, you most likely should initialize it here before trying to use it again\n});`
                    }
                </SyntaxHighlighter>
                <div className={"navContainer"}>
                    <Link to={"/docs/create-a-vault"} className={"button"}>
                        <span>Last Page - Create A Vault</span>
                    </Link>
                    <Link to={"/docs/using-deposits"} className={"button"}>
                        <span>Next Page - Using Deposits</span>
                    </Link>
                </div>
            </section>
        </ContentWithSidebar>
    )
}

export default ResetAVault