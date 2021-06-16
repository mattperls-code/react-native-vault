import React from "react"

import "./styles.scss"

import logo from "../../assets/images/logo.svg"

import { Link } from "react-router-dom"

import SyntaxHighlighter from "react-syntax-highlighter"
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs"

const Home = () => {
    return (
        <React.Fragment>
            <section>
                <h1>react-native-vault</h1>
                <div className={"logoContainer"}>
                    <img src={logo} className={"logo"} alt={"logo"} />
                </div>
                <div className={"description"}>A Persistent, Secure, And Local Database For React-Native</div>
                <Link to={"docs/getting-started"}>In Depth Documentation Here</Link>
                <Link to={"example"}>Usage Example Here</Link>
            </section>
            <section>
                <h2>Overview</h2>
                <div className={"description"}>Fundamentally, react-native-vault works by storing encrypted data with react native's async storage.</div>
                <div className={"description"}>With react-native-vault, you can focus on your data and let the encryption, storage, and basic interactions be handled automatically.</div>
                <div className={"description"}>The vault class in react-native-vault allows you to create, access, and set groups of stored data called collections.</div>
                <div className={"description"}>Collections simplify adding to, setting, updating, removing, and finding stored data.</div>
            </section>
            <section>
                <h2>Simple Usage (Installation)</h2>
                <div className={"docsDescription"}>Install the package</div>
                <SyntaxHighlighter customStyle={{ width: "calc(min(80vw, 600px))", margin: "auto", padding: "15px" }} language={"bash"} style={atomOneDark}>
                    {
                        `npm install react-native-vault`
                    }
                </SyntaxHighlighter>
                <div className={"docsDescription"}>Install the necessary pods</div>
                <SyntaxHighlighter customStyle={{ width: "calc(min(80vw, 600px))", margin: "auto", padding: "15px" }} language={"bash"} style={atomOneDark}>
                    {
                        `cd ios && pod install && cd ..`
                    }
                </SyntaxHighlighter>
            </section>
            <section>
                <h2>Simple Usage (Vault Setup)</h2>
                <SyntaxHighlighter customStyle={{ width: "calc(min(80vw, 600px))", margin: "auto", padding: "15px" }} language={"javascript"} style={atomOneDark}>
                    {
                        `import Vault from "react-native-vault";\n\nconst myVault = new Vault("myStorageKey", "myEncryptionKey");\n\nmyVault.initialize(["myCollectionName"]).then(() => {\n\t// Vault has been initialized!\n});`
                    }
                </SyntaxHighlighter>
            </section>
            <section>
                <h2>Simple Usage (Getting Data From Collections)</h2>
                <div className={"docsDescription"}>Using a collection instance</div>
                <SyntaxHighlighter customStyle={{ width: "calc(min(80vw, 600px))", margin: "auto", padding: "15px" }} language={"javascript"} style={atomOneDark}>
                    {
                        `myVault.getCollection("myCollectionName").then(collection => {\nconst data = collection.data;\n\t// Do stuff with the data here\n});`
                    }
                </SyntaxHighlighter>
                <div className={"docsDescription"}>Directly getting json (not recommended)</div>
                <SyntaxHighlighter customStyle={{ width: "calc(min(80vw, 600px))", margin: "auto", padding: "15px" }} language={"javascript"} style={atomOneDark}>
                    {
                        `myVault.getCollectionData("myCollectionName").then(data => {\n\t// Do stuff with the data here\n});`
                    }
                </SyntaxHighlighter>
            </section>
            <section>
                <h2>Simple Usage (Setting Data In Collections)</h2>
                <div className={"docsDescription"}>Using a collection instance</div>
                <SyntaxHighlighter customStyle={{ width: "calc(min(80vw, 600px))", margin: "auto", padding: "15px" }} language={"javascript"} style={atomOneDark}>
                    {
                        `const newData = [{ name: "Jane Doe" }, { name: "John Doe" }];\nmyVault.getCollection("myCollectionName").then(collection => {\n\tcollection.set(newData).then(() => {\n\t\t// Collection has been set\n\t});\n});`
                    }
                </SyntaxHighlighter>
                <div className={"docsDescription"}>Directly setting json (not recommended)</div>
                <SyntaxHighlighter customStyle={{ width: "calc(min(80vw, 600px))", margin: "auto", padding: "15px" }} language={"javascript"} style={atomOneDark}>
                    {
                        `const newData = [{ name: "Jane Doe" }, { name: "John Doe" }];\nmyVault.setCollection("myCollectionName", newData).then(() => {\n\t// Collection has been set\n});`
                    }
                </SyntaxHighlighter>
            </section>
        </React.Fragment>
    )
}

export default Home