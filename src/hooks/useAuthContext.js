import { AuthContext } from "../context/AuthContext"
import { useContext } from "react"

//alows us to use the AuthContext.js in context folder


export const useAuthContext = () => {
  const context = useContext(AuthContext)

  if(!context) {
    throw Error('useAuthContext must be used inside an AuthContextProvider')
  }

  return context
}