import Link from "../link"
import styles from "./index.module.css"
import getNavigation from "../../utils/navigation"

const Aside = () => {
    const links = getNavigation()
    return (
        <aside className={styles.aside}>
            {
                links.map(nav => {
                    return (
                        <Link href={nav.link} title={nav.title} type="aside" />
                    )
                })
            }
        </aside>
    )
}

export default Aside