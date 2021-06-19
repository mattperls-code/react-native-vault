import React from "react"

import ContentWithSidebar from "../../components/sidebar"

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

import { Link } from "react-router-dom"

const GettingStarted = () => {
    return (
        <ContentWithSidebar>
            <section>
                <Link to={"/"}>Back To Home</Link>
                <h1>Getting Started</h1>
                <div className={"description"}>The first step for using react-native-vault is installation.</div>
                <div className={"description"}>This should be as simple as running a few commands.</div>
            </section>
            <section>
                <h2>Installing from npm</h2>
                <SyntaxHighlighter customStyle={{ width: "calc(min(80%, 600px))", margin: "auto", padding: "15px" }} language={"bash"} style={vscDarkPlus}>
                    {
                        `npm install react-native-vault`
                    }
                </SyntaxHighlighter>
            </section>
            <section>
                <h2>Setting up react-native-vault's dependencies</h2>
                <div className={"docsDescription"}>The async storage library must and its corresponding pod must be installed manually</div>
                <SyntaxHighlighter customStyle={{ width: "calc(min(80%, 600px))", margin: "auto", padding: "15px" }} language={"bash"} style={vscDarkPlus}>
                    {
                        `npm install @react-native-async-storage/async-storage`
                    }
                </SyntaxHighlighter>
                <SyntaxHighlighter customStyle={{ width: "calc(min(80%, 600px))", margin: "auto", marginTop: "10px", padding: "15px" }} language={"bash"} style={vscDarkPlus}>
                    {
                        `cd ios && pod install && cd ..`
                    }
                </SyntaxHighlighter>
                <div className={"docsDescription"}>In case of an issue installing async storage, follow the directions <a style={{ display: "inline", fontSize: "24px" }} href={"https://react-native-async-storage.github.io/async-storage/docs/install/"}>here</a></div>
                <Link to={"/docs/creating-a-vault"} className={"button"}>
                    <span>Next Page - Creating A Vault</span>
                </Link>
            </section>
        </ContentWithSidebar>
        
    )
}

export default GettingStarted