import React from "react"

import "./styles.scss"

const ContentWithSidebar = ({ sidebarContent, children }) => {
    return (
        <React.Fragment>
            <aside>

            </aside>
            <main>
                {
                    children
                }
            </main>
        </React.Fragment>
        
    )
}

export default ContentWithSidebar