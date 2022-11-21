import styles from "./index.module.css"
import Link from '../link'
import logo from '../../images/blue-origami-bird-flipped.png'
import getNavigation from "../../utils/navigation"

const Footer = () => {
    const links = getNavigation()
    return (
        <footer className={styles.footer}>
            <ul>
            {
                links.map(nav => {
                    return (
                        <Link href={nav.link} title={nav.title} type="footer" />
                    )
                })
            }
                <img className={styles.image} src={logo} alt="logo" />
            </ul>
            <p className={styles.university}>Software University 2022</p>
        </footer >
    )
}

export default Footer