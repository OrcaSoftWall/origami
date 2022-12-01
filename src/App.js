import { Component, useEffect, useState } from "react"
import Spinner from "./components/spinner";
import UserContext from "./Context"
import getCookie from './utils/get-cookie';

const App = (props) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const logIn = (user) => {
        setUser({ ...user, loggedIn: true })
    }

    const logOut = () => {
        document.cookie = "x-auth-token=; expires = Thu, 01 Jan 1970 00:00:00 GMT"          //"x-auth-token=; max-age=10;"
        setUser({ loggedIn: false })
        console.log("------Logged Out!------")
    }

    useEffect(() => {
        const token = getCookie('x-auth-token')
        if (!token) {
            logOut()
            return
        }

        fetch("http://localhost:9999/api/user/verify", {
            method: "GET",
            headers: {
                'content-type': 'application/json',
                'authorization': token
            }
        }).then(promise => {
            console.log("-----promise:-----", promise)
            return promise.json()
        }).then(response => {
            if (response.status) {
                logIn({
                    username: response.user.username,
                    id: response.user._id
                })
            } else {
                logOut()
            }
            setLoading(false)
        })
    }, [])

    // if (loading) {
    //     return (
    //         // <div>Loading User Data...</div>
    //         <Spinner />
    //     )
    // }

    return (
        <UserContext.Provider value={{
            user,
            logIn,
            logOut
        }}>
            {props.children}
        </UserContext.Provider>
    )
}


// class App extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             loggedIn: null,    // loggedIn: "guest" (by default) or it can be  "user", "admin"
//             user: null
//         }
//     }

//     static contextType = UserContext

//     logIn = (user) => {
//         this.setState({
//             loggedIn: true,
//             user
//         })
//     }

//     logOut = () => {
//         document.cookie = "x-auth-token=; expires = Thu, 01 Jan 1970 00:00:00 GMT"          //"x-auth-token=; max-age=10;"
//         this.setState({
//             loggedIn: false,
//             user: null
//         })
//         console.log("------Logged Out!------")
//     }

//     componentDidMount() {
//         const token = getCookie('x-auth-token')
//         if (!token) {
//             this.logOut()
//             return
//         }

//         fetch("http://localhost:9999/api/user/verify", {
//             method: "POST",
//             body: JSON.stringify({
//                 token
//             }),
//             headers: {
//                 'content-type': 'application/json'
//             }
//         }).then(promise => {
//             console.log("promise:       ", promise)
//             return promise.json()
//         }).then(response => {
//             if (response.status) {
//                 this.logIn({
//                     username: response.user.username,
//                     id: response.user._id
//                 })
//             } else {
//                 this.logOut()
//             }
//         })
//     }

//     render() {
//         const { loggedIn, user } = this.state

//         if (loggedIn === null) {        //initial state, until we get the authentication from lcomponentDidMount after refresh of page
//             return (<div>Loading.....</div>)
//         }
//         return (
//             <UserContext.Provider value={{
//                 loggedIn,
//                 user,
//                 logIn: this.logIn,
//                 logOut: this.logOut
//             }}>
//                 {this.props.children}
//             </UserContext.Provider>
//         )
//     }

// }

export default App