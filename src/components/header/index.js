import styles from "./index.module.css"
import Link from '../link'
import logo from '../../images/white-origami-bird.png'
import getNavigation from "../../utils/navigation"

const Header = () => {
    const links = getNavigation()
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

export default Header