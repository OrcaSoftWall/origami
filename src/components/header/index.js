import styles from "./index.module.css"
import Link from '../link'
import logo from '../../images/white-origami-bird.png'

const Header = () => {
    return (
        <header className={styles.navigation}>
            <ul>
                <img className={styles.image} src={logo} alt="logo" />
                <Link href="#" title="Going to 1" type="header" />
                <Link href="#" title="Going to 2" type="header" />
                <Link href="#" title="Going to 3" type="header" />
                <Link href="#" title="Going to 4" type="header" />
                <Link href="#" title="Going to 5" type="header" />
                <Link href="#" title="Going to 6" type="header" />
            </ul>
        </header >
    )
}

export default Header