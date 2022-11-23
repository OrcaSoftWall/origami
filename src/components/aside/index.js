import Link from "../link"
import styles from "./index.module.css"
import getNavigation from "../../utils/navigation"

const Aside = () => {
    const links = getNavigation()
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

export default Aside