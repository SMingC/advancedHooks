import React, { useState, createContext } from "react"

const defaultState = {
  isPro: false,
  setIspro: () => {},
}

const UserContext = createContext(defaultState)

function UserProvider({ children }) {
  const [isPro, setIsPro] = useState(false)

  return (
    <UserContext.Provider value={{ isPro, setIsPro }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }
