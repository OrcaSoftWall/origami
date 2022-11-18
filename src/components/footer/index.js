import styles from "./index.module.css"
import Link from '../link'
import logo from '../../images/blue-origami-bird-flipped.png'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <ul>
                <Link href="#" title="Going to 1" type="footer" />
                <Link href="#" title="Going to 2" type="footer" />
                <Link href="#" title="Going to 3" type="footer" />
                <Link href="#" title="Going to 4" type="footer" />
                <Link href="#" title="Going to 5" type="footer" />
                <Link href="#" title="Going to 6" type="footer" />
                <img className={styles.image} src={logo} alt="logo" />
            </ul>
            <p className={styles.university}>Software University 2022</p>
        </footer >
    )
}

export default Footer