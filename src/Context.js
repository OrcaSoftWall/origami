
import { createContext } from "react"

const UserContext = createContext({
    user: null,
    logIn: () => { },
    logOut: () => { }
})

export default UserContext 