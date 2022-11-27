import styles from "./index.module.css"
import Link from '../link'
import logo from '../../images/blue-origami-bird-flipped.png'
import getNavigation from "../../utils/navigation"
import { Component } from "react"
import UserContext from "../../Context"

class Footer extends Component {
    static contextType = UserContext

    render() {
        const { loggedIn, user } = this.context
        const links = getNavigation(loggedIn, user)
        return (
            <footer className={styles.footer}>
                <ul>
                    {
                        links.map(nav => {
                            const { title, link } = nav
                            return (
                                <Link key={title} href={link} title={title} type="footer" />
                            )
                        })
                    }
                    <img className={styles.image} src={logo} alt="logo" />
                </ul>
                <p className={styles.university}>Software University 2022</p>
            </footer >
        )
    }
}

export default Footer