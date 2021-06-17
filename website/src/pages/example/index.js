import React from "react"

import { Link } from "react-router-dom"

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

import exampleFileContent from "./exampleFile"

const Example = () => {
    SyntaxHighlighter.registerLanguage("jsx", jsx)

    return (
        <section>
            <Link to={"/"}>Back To Home</Link>
            <h1>Example Code</h1>
            <SyntaxHighlighter customStyle={{ width: "calc(min(80vw, 1000px))", margin: "auto", padding: "15px" }} language={"jsx"} style={vscDarkPlus}>
                {
                    exampleFileContent
                }
            </SyntaxHighlighter>
        </section>
    )
}

export default Example