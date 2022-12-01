
import styles from './index.module.css'

const Spinner = () => {
    return (
        <div className={styles.loader5}>
            <div className={styles["fingerprint-spinner"]}>
                <div className={styles["spinner-ring"]}></div>
                <div className={styles["spinner-ring"]}></div>
                <div className={styles["spinner-ring"]}></div>
                <div className={styles["spinner-ring"]}></div>
                <div className={styles["spinner-ring"]}></div>
                <div className={styles["spinner-ring"]}></div>
                <div className={styles["spinner-ring"]}></div>
                <div className={styles["spinner-ring"]}></div>
                <div className={styles["spinner-ring"]}></div>
            </div>
        </div>
    )
}

export default Spinner