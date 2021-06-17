import React from "react"

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
                <br/>
                <br/>
                <Link to={"docs/getting-started"}>In Depth Documentation Here</Link>
                <Link to={"example"}>Usage Example Here</Link>
            </section>
            <section>
                <h2>Overview</h2>
                <div className={"description"}>Fundamentally, react-native-vault works by storing encrypted data with react native's async storage.</div>
                <div className={"description"}>With react-native-vault, you can focus on your data and let the encryption, storage, and basic interactions be handled automatically.</div>
                <div className={"description"}>The vault class in react-native-vault allows you to create, access, and set groups of stored data in the form of deposits and collections.</div>
                <div className={"description"}>Deposits act as simple key value storage, and are perfect for user preferences or small pieces of data.</div>
                <div className={"description"}>Collections are designed to hold multiple complex pieces of data, and come with helper methods to simplify interactions.</div>
                <br/>
                <div className={"docsDescription"}>Internal Structure:</div>
                <SyntaxHighlighter customStyle={{ width: "calc(min(80%, 600px))", margin: "auto", padding: "15px" }} language={"javascript"} style={atomOneDark}>
                    {
`<AsyncStorageKeys>: {
    <vaultId>: {
        deposits: {
            name: "John Doe",
            age: 24,
            married: true,
            averageMinutesOnApp: 12,
            averagePickupsPerDay: 2
        },
        collections: {
            family: [
                {
                    name: "Jane Doe",
                    age: 22,
                    married: true
                },
                {
                    name: "Jason Doe",
                    age: 34,
                    married: false
                },
                {
                    name: "Jackie Doe",
                    age: 26,
                    married: false
                }
            ],
            friends: [
                {
                    name: "Matthew Perlman",
                    age: 15,
                    married: false
                },
                {
                    name: "Rafayel Amirkhanyan",
                    age: 14,
                    married: false
                }
            ]
        }
    }
}`
                    }
                </SyntaxHighlighter>
            </section>
            <section>
                <h2>Simple Usage (Installation)</h2>
                <div className={"docsDescription"}>Install the react-native-vault package</div>
                <SyntaxHighlighter customStyle={{ width: "calc(min(80%, 600px))", margin: "auto", padding: "15px" }} language={"bash"} style={atomOneDark}>
                    {
                        `npm install react-native-vault`
                    }
                </SyntaxHighlighter>
                <div className={"docsDescription"}>Manually install one dependency</div>
                <SyntaxHighlighter customStyle={{ width: "calc(min(80%, 600px))", margin: "auto", padding: "15px" }} language={"bash"} style={atomOneDark}>
                    {
                        `npm install @react-native-async-storage/async-storage`
                    }
                </SyntaxHighlighter>
                <div className={"docsDescription"}>Install the necessary pods</div>
                <SyntaxHighlighter customStyle={{ width: "calc(min(80%, 600px))", margin: "auto", padding: "15px" }} language={"bash"} style={atomOneDark}>
                    {
                        `cd ios && pod install && cd ..`
                    }
                </SyntaxHighlighter>
            </section>
            <section>
                <h2>Simple Usage (Vault Setup)</h2>
                <SyntaxHighlighter customStyle={{ width: "calc(min(80%, 600px))", margin: "auto", padding: "15px" }} language={"javascript"} style={atomOneDark}>
                    {
                        `import Vault from "react-native-vault";\n\nconst myVault = new Vault("myStorageKey", "myEncryptionKey");\n\nmyVault.initialize(["myCollectionName"]).then(() => {\n\t// Vault has been initialized!\n});`
                    }
                </SyntaxHighlighter>
            </section>
            <section>
                <h2>Simple Usage (Getting Data From Deposits)</h2>
                <div className={"docsDescription"}>Using a deposit instance</div>
                <SyntaxHighlighter customStyle={{ width: "calc(min(80%, 600px))", margin: "auto", padding: "15px" }} language={"javascript"} style={atomOneDark}>
                    {
                        `myVault.getDeposit("myDepositName").then(deposit => {\n\tconst data = deposit.data;\n\t// Do stuff with data here\n});`
                    }
                </SyntaxHighlighter>
                <div className={"docsDescription"}>Directly getting json (not recommended)</div>
                <SyntaxHighlighter customStyle={{ width: "calc(min(80%, 600px))", margin: "auto", padding: "15px" }} language={"javascript"} style={atomOneDark}>
                    {
                        `myVault.getDepositData("myDepositName").then(data => {\n\t// Do stuff with data here\n});`
                    }
                </SyntaxHighlighter>
            </section>
            <section>
                <h2>Simple Usage (Setting Data In Deposits)</h2>
                <div className={"docsDescription"}>Using a deposit instance</div>
                <SyntaxHighlighter customStyle={{ width: "calc(min(80%, 600px))", margin: "auto", padding: "15px" }} language={"javascript"} style={atomOneDark}>
                    {
                        `const username = "John Doe";\nmyVault.getDeposit("myDepositName").then(deposit => {\n\tdeposit.set(username);\n\t// Now deposit "myDepositName" is set to "John Doe"\n});`
                    }
                </SyntaxHighlighter>
                <div className={"docsDescription"}>Directly setting json (not recommended)</div>
                <SyntaxHighlighter customStyle={{ width: "calc(min(80%, 600px))", margin: "auto", padding: "15px" }} language={"javascript"} style={atomOneDark}>
                    {
                        `const username = "John Doe";\nmyVault.setDeposit("myDepositName", username).then(deposit => {\n\t// Now deposit "myDepositName" is set to "John Doe"\n})`
                    }
                </SyntaxHighlighter>
            </section>
            <section>
                <h2>Simple Usage (Getting Data From Collections)</h2>
                <div className={"docsDescription"}>Using a collection instance</div>
                <SyntaxHighlighter customStyle={{ width: "calc(min(80%, 600px))", margin: "auto", padding: "15px" }} language={"javascript"} style={atomOneDark}>
                    {
                        `myVault.getCollection("myCollectionName").then(collection => {\n\tconst data = collection.data;\n\t// Do stuff with the data here\n});`
                    }
                </SyntaxHighlighter>
                <div className={"docsDescription"}>Directly getting json (not recommended)</div>
                <SyntaxHighlighter customStyle={{ width: "calc(min(80%, 600px))", margin: "auto", padding: "15px" }} language={"javascript"} style={atomOneDark}>
                    {
                        `myVault.getCollectionData("myCollectionName").then(data => {\n\t// Do stuff with the data here\n});`
                    }
                </SyntaxHighlighter>
            </section>
            <section>
                <h2>Simple Usage (Setting Data In Collections)</h2>
                <div className={"docsDescription"}>Using a collection instance</div>
                <SyntaxHighlighter customStyle={{ width: "calc(min(80%, 600px))", margin: "auto", padding: "15px" }} language={"javascript"} style={atomOneDark}>
                    {
                        `const newData = [{ name: "Jane Doe" }, { name: "John Doe" }];\nmyVault.getCollection("myCollectionName").then(collection => {\n\tcollection.set(newData).then(() => {\n\t\t// Now collection "myCollectionName" is set to [{ name: "Jane Doe" }, { name: "John Doe" }]\n\t});\n});`
                    }
                </SyntaxHighlighter>
                <div className={"docsDescription"}>Directly setting json (not recommended)</div>
                <SyntaxHighlighter customStyle={{ width: "calc(min(80%, 600px))", margin: "auto", padding: "15px" }} language={"javascript"} style={atomOneDark}>
                    {
                        `const newData = [{ name: "Jane Doe" }, { name: "John Doe" }];\nmyVault.setCollection("myCollectionName", newData).then(() => {\n\t// Now collection "myCollectionName" is set to [{ name: "Jane Doe" }, { name: "John Doe" }]\n});`
                    }
                </SyntaxHighlighter>
            </section>
        </React.Fragment>
    )
}

export default Home