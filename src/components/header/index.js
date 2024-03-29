import styles from "./index.module.css"
import Link from '../link'
import logo from '../../images/white-origami-bird.png'
import getNavigation from "../../utils/navigation"
import { Component, useContext } from "react"
import UserContext from "../../Context"

const Header = () => {
    const { user } = useContext(UserContext)
    const links = getNavigation(user)
    return (
        <header className={styles.navigation}>
            <ul>
                <img className={styles.image} src={logo} alt="logo" />
                {
                    links.map(nav => {
                        return (
                            <Link key={nav.title} href={nav.link} title={nav.title} type="header" />
                        )
                    })
                }
            </ul>
        </header >
    )

}

// class Header extends Component {
//     static contextType = UserContext

//     render() {
//         const { user } = this.context
//         const links = getNavigation(user)
//         return (
//             <header className={styles.navigation}>
//                 <ul>
//                     <img className={styles.image} src={logo} alt="logo" />
//                     {
//                         links.map(nav => {
//                             return (
//                                 <Link key={nav.title} href={nav.link} title={nav.title} type="header" />
//                             )
//                         })
//                     }
//                 </ul>
//             </header >
//         )
//     }
// }

export default Header