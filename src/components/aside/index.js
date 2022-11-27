import Link from "../link"
import styles from "./index.module.css"
import getNavigation from "../../utils/navigation"
import { Component } from "react"
import UserContext from "../../Context"

class Aside extends Component {
    static contextType = UserContext

    render() {
        const { loggedIn, user } = this.context
        const links = getNavigation(loggedIn, user)
        return (
            <aside className={styles.aside}>
                {
                    links.map(({ title, link }) => {
                        return (
                            <Link key={title} href={link} title={title} type="aside" />
                        )
                    })
                }
            </aside>
        )
    }
}

export default Aside