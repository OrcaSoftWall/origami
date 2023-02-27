import { Link } from "react-router-dom"
import styles from "./index.module.css"

const LinkComponent = ({ title, href, type }) => {
    return (
        <div data-test-id={`link-${title}`} className={styles[`${type}-list-item`]}>
            <Link to={href} className={styles[`${type}-link`]}>
                {title}
            </Link>
        </div>
    )
}

export default LinkComponent