import React from "react"

import ContentWithSidebar from "../../components/sidebar"

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

import { Link } from "react-router-dom"

const CreateAVault = () => {
    return (
        <ContentWithSidebar sidebarContent={[]}>
            <section>
                <Link to={"/"}>Back To Home</Link>
                <h1>Documentation - Create A Vault</h1>
                <div className={"description"}>Vaults allow you to store persistent data</div>
                <div className={"description"}>The data in vaults is automatically encrypted by react-native-vault</div>
            </section>
            <section>
                <h2>Basic Usage</h2>
                <div className={"docsDescription"}>Import Vault</div>
                <SyntaxHighlighter customStyle={{ width: "calc(min(80%, 600px))", margin: "auto", padding: "15px" }} language={"javascript"} style={vscDarkPlus}>
                    {
                        `import Vault from "react-native-vault";`
                    }
                </SyntaxHighlighter>
                <div className={"docsDescription"}>Create A Vault Instance</div>
                <SyntaxHighlighter customStyle={{ width: "calc(min(80%, 600px))", margin: "auto", padding: "15px" }} language={"javascript"} style={vscDarkPlus}>
                    {
                        `// Ideally this should be in a place that can be imported from.\n// This way you won't need to instantiate and initialize a new vault every usage.\n\nconst myVault = new Vault(\n\t<storageKey>,\n\t<encryptionKey>,\n\t<options>\n);`
                    }
                </SyntaxHighlighter>
                <div className={"docsDescription"}>Initialize The Vault</div>
                <SyntaxHighlighter customStyle={{ width: "calc(min(80%, 600px))", margin: "auto", padding: "15px" }} language={"javascript"} style={vscDarkPlus}>
                    {
                        `// You MUST do this or else the vault will not work\n// You must also initialize the vault after the reset method is called\n\nmyVault.initialize(<collectionIds>).then(() => {\n\t// You can safely use this vault now\n});`
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
                                <td>String</td>
                                <td className={"tableDescription"}>The key the vault will be stored with in async storage. Make sure that if you are using async storage elsewhere in your app that there are no name collisions.</td>
                                <td>"vault"</td>
                            </tr>
                            <tr>
                                <td>encryptionKey</td>
                                <td>String</td>
                                <td className={"tableDescription"}>The encryption key that will be used to encrypt the vault. Ideally this should be stored as a secure environment variable. Make sure it is NOT DYNAMIC, or else you will likely run into decryption issues.</td>
                                <td>Empty String</td>
                            </tr>
                            <tr>
                                <td>options</td>
                                <td>Object</td>
                                <td colSpan={2}>See Below</td>
                            </tr>
                            <tr>
                                <td>collectionIds</td>
                                <td>Array&lt;String&gt;</td>
                                <td className={"tableDescription"}>The ids of the collections you want so store in the vault. For example, if you wanted to store family and friends as two collections, you would set this to ["family", "friends"].</td>
                                <td>Empty Array</td>
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
                    <Link to={"/docs/reset-a-vault"} className={"button"}>
                        <span>Next Page - Reset A Vault</span>
                    </Link>
                </div>
            </section>
        </ContentWithSidebar>
    )
}

export default CreateAVault