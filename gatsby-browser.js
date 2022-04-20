import React from "react"
import { UserProvider } from "./src/context/UserContext"

export const wrapRootElement = ({ element }) => {
  return <UserProvider>{element}</UserProvider>
}

require("prismjs/themes/prism-tomorrow.css")
