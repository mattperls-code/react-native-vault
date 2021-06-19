import React, { useState } from "react"

import "./styles.scss"

import { Link } from "react-router-dom"

const ContentWithSidebar = ({ children }) => {
    let [ sidebarIsOpen, setSidebarIsOpen ] = useState(window.innerWidth > 600)
    let [ screenIsWide, setScreenIsWide ] = useState(window.innerWidth > 600)

    window.addEventListener("resize", () => {
        if(screenIsWide != window.innerWidth > 600)
        setScreenIsWide(!screenIsWide)
    })

    return (
        <React.Fragment>
            {
                screenIsWide || sidebarIsOpen ? (
                    <aside>
                        <div style={{ display: screenIsWide ? "none" : "block", height: "40px" }}></div>
                        <div className={"toggle"} onClick={() => {
                            setSidebarIsOpen(!sidebarIsOpen)
                        }}>&#10005;</div>
                        <h3>Setup</h3>
                        <Link to={"/docs/getting-started"}>Getting Started</Link>
                        <h3>Vaults</h3>
                        <Link to={"/docs/creating-a-vault"}>Creating A Vault</Link>
                        <Link to={"/docs/initializing-a-vault"}>Initializing A Vault</Link>
                        <Link to={"/docs/resetting-a-vault"}>Resetting A Vault</Link>
                        <h3>Deposit</h3>
                        <Link to={"/docs/getting-a-deposit-instance"}>Getting A Deposit Instance</Link>
                        <Link to={"/docs/getting-a-deposits-data"}>Getting A Deposit's Data</Link>
                        <Link to={"/docs/setting-a-deposits-data"}>Setting A Deposit's Data</Link>
                        <Link to={"/docs/syncing-a-deposit-instance"}>Syncing A Deposit Instance</Link>
                        <h3>Collections</h3>
                        <Link to={"/docs/getting-a-collection-instance"}>Getting A Collection Instance</Link>
                        <Link to={"/docs/getting-a-collections-data"}>Getting A Collection's Data</Link>
                        <Link to={"/docs/setting-a-collections-data"}>Setting A Collection's Data</Link>
                        <Link to={"/docs/syncing-a-collection-instance"}>Syncing A Collection Instance</Link>
                        <h3>Collection Methods</h3>
                        <Link to={"/docs/adding-items-to-a-collection"}>Adding Items To A Collection</Link>
                        <Link to={"/docs/setting-items-in-a-collection"}>Setting Items In A Collection</Link>
                        <Link to={"/docs/updating-items-in-a-collection"}>Updating Items In A Collection</Link>
                        <Link to={"/docs/removing-items-from-a-collection"}>Removing Items From A Collection</Link>
                        <Link to={"/docs/finding-items-in-a-collection"}>Finding Items In A Collection</Link>
                    </aside>
                ) : (
                    <header>
                        <h1>Documentation</h1>
                        <div className={"toggle"} onClick={() => {
                            setSidebarIsOpen(!sidebarIsOpen)
                        }}>&#9776;</div>
                    </header>
                )
            }
            <main className={screenIsWide ? "" : "withHeader"}>
                {
                    children
                }
            </main>
        </React.Fragment>
        
    )
}

export default ContentWithSidebar