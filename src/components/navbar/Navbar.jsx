import styles from './Navbar.module.css'

const Navbar = () => {
    return(
        <>
            <div className={styles.navbarDiv}>
                <span className={styles.logoFirst}>Full</span>
                <span className={styles.logoSecond}>Time</span>
                <span className={styles.divider}></span>
                <span className={styles.demoText}>Demo</span>
            </div>
        </>
    )
}

export default Navbar