import React from "react"

import ContentWithSidebar from "../../components/sidebar"

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

import { Link } from "react-router-dom"

const CreatingAVault = () => {
    return (
        <ContentWithSidebar>
            <section>
                <Link to={"/"}>Back To Home</Link>
                <h1>Creating A Vault</h1>
                <div className={"description"}>Vaults allow you to store persistent data</div>
                <div className={"description"}>The data in vaults is automatically encrypted by react-native-vault</div>
            </section>
            <section>
                <h2>Usage</h2>
                <div className={"docsDescription"}>Import Vault</div>
                <SyntaxHighlighter customStyle={{ width: "calc(min(80%, 600px))", margin: "auto", padding: "15px" }} language={"javascript"} style={vscDarkPlus}>
                    {
                        `import Vault from "react-native-vault";`
                    }
                </SyntaxHighlighter>
                <div className={"docsDescription"}>Create A Vault Instance</div>
                <SyntaxHighlighter customStyle={{ width: "calc(min(80%, 600px))", margin: "auto", padding: "15px" }} language={"javascript"} style={vscDarkPlus}>
                    {
`// Ideally this should be in a place that can be imported from.
// This way you won't need to instantiate and initialize a new vault every usage.

const myVault = new Vault(
    <storageKey>,
    <encryptionKey>,
    <options>
);

// Initialize vault here (See Initializing A Vault)`
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
                                <td>storageKey</td>
                                <td rowSpan={2}>String</td>
                                <td className={"tableDescription"}>The key the vault will be stored with in async storage. Make sure that if you are using async storage elsewhere in your app that there are no name collisions.</td>
                                <td>"vault"</td>
                            </tr>
                            <tr>
                                <td>encryptionKey</td>
                                <td className={"tableDescription"}>The encryption key that will be used to encrypt the vault. Ideally this should be stored as a secure environment variable. Make sure it is NOT DYNAMIC, or else you will likely run into decryption issues.</td>
                                <td>Empty String</td>
                            </tr>
                            <tr>
                                <td>options</td>
                                <td>Object</td>
                                <td colSpan={2}>See Below</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <section>
                <h2>Options Argument</h2>
                <div className={"description"}>The options property determines how errors are handled by the vault</div>
                <div className={"description"}>Generally, you can omit this argument, and all errors will be dealt with by console.warn</div>
                <div className={"description"}>If you have specific error handling needs, there are 3 properties you can set for more control</div>
                <div className={"tableContainer"}>
                    <div className={"tableTitle"}>Properties</div>
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
                                <td>onGetStorage</td>
                                <td rowSpan={3}>Function</td>
                                <td className={"tableDescription"}>This function will be called when an error occurs getting the vault's storageKey from async storage. It will most likely happen because you either forgot to initialize the vault or because you removed the vault's storageKey from async storage.</td>
                                <td rowSpan={3}>console.warn</td>
                            </tr>
                            <tr>
                                <td>onSetStorage</td>
                                <td className={"tableDescription"}>This function will be called when an error occurs setting the vault's storageKey in async storage.</td>
                            </tr>
                            <tr>
                                <td>onDecryptionFail</td>
                                <td className={"tableDescription"}>This function will be called when an error occurs decrypting the data the persistent data in the vault. This will most likely happen because you either changed your encryptionKey after setting data or because you externally set the vault's storageKey in async storage.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={"navContainer"}>
                    <Link to={"/docs/getting-started"} className={"button"}>
                        <span>Last Page - Getting Started</span>
                    </Link>
                    <Link to={"/docs/initializing-a-vault"} className={"button"}>
                        <span>Next Page - Initializing A Vault</span>
                    </Link>
                </div>
            </section>
        </ContentWithSidebar>
    )
}

export default CreatingAVault