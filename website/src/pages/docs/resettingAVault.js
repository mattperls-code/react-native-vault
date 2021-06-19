import React from "react"

import ContentWithSidebar from "../../components/sidebar"

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

import { Link } from "react-router-dom"

const ResettingAVault = () => {
    return (
        <ContentWithSidebar>
            <section>
                <Link to={"/"}>Back To Home</Link>
                <h1>Resetting A Vault</h1>
                <div className={"description"}>During development, it can be very helpful to fully reset all the data in a vault</div>
                <div className={"description"}>This can be used to simulate a user who has not yet used the app</div>
                <div className={"description"}>You can reset a vault in production but its is HIGHLY discouraged, and is likely to cause issues if not properly initialized after</div>
            </section>
            <section>
                <h2>Usage</h2>
                <SyntaxHighlighter customStyle={{ width: "calc(min(80%, 600px))", margin: "auto", padding: "15px" }} language={"javascript"} style={vscDarkPlus}>
                    {
                        `myVault.reset().then(() => {\n\t// Vault has been reset, you most likely should initialize it here before trying to use it again\n});`
                    }
                </SyntaxHighlighter>
                <div className={"navContainer"}>
                    <Link to={"/docs/initializing-a-vault"} className={"button"}>
                        <span>Last Page - Initializing A Vault</span>
                    </Link>
                    <Link to={"/docs/getting-a-deposit-instance"} className={"button"}>
                        <span>Next Page - Getting A Deposit Instance</span>
                    </Link>
                </div>
            </section>
        </ContentWithSidebar>
    )
}

export default ResettingAVault