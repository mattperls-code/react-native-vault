import React from "react"

import ContentWithSidebar from "../../components/sidebar"

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

import { Link } from "react-router-dom"

const GettingACollectionInstance = () => {
    return (
        <ContentWithSidebar>
            <section>
                <Link to={"/"}>Back To Home</Link>
                <h1>Getting A Collection Instance</h1>
                <div className={"description"}>Collection instances are easy to use and increase performance by virtualizing their own data</div>
                <div className={"description"}>They also have helper methods to simplify interactions</div>
            </section>
            <section>
                <h2>Usage</h2>
                <div className={"docsDescription"}>Remember that if the collection it refers to is changed externally, you MUST sync the collection instance's data (See Syncing A Collection Instance)</div>
                <SyntaxHighlighter customStyle={{ width: "calc(min(80%, 600px))", margin: "auto", padding: "15px" }} language={"javascript"} style={vscDarkPlus}>
                    {
`let [myCollection, setMyCollection] = useState(false);

useEffect(() => {
    if(myCollection === false){
        myVault.getCollection(<collectionId>).then(setMyCollection);
    };
}, [myCollection]);

// Always check that myCollection !== false before attempting to use it`
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
                                <td>collectionId</td>
                                <td>String</td>
                                <td className={"tableDescription"}>The id of the collection you are getting an instance of.</td>
                                <td><strong>Argument Is Required</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={"navContainer"}>
                    <Link to={"/docs/syncing-a-deposit-instance"} className={"button"}>
                        <span>Last Page - Syncing A Deposit Instance</span>
                    </Link>
                    <Link to={"/docs/getting-a-collections-data"} className={"button"}>
                        <span>Next Page - Getting A Collection's Data</span>
                    </Link>
                </div>
            </section>
        </ContentWithSidebar>
    )
}

export default GettingACollectionInstance