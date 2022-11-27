
import { createContext } from "react"

const UserContext = createContext({
    loggedIn: false,
    user: null,
    logIn: () => { },
    logOut: () => { }
})

export default UserContext 