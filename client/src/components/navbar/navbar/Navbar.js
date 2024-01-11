import { Link } from 'react-router-dom'
import styles from './navbar.module.css'

const NavBar = () => {
    return (
        // Next uses Link component for prefetching and client-side navigation
        // which extends the <a> element
        <div id={styles.navbar}>
            <div className={styles.title}>
                <Link href="/">STritons</Link>
            </div>
            <div className={styles.nav_buttons}>
                <Link to="/routine">Routine</Link>
                <Link to="/dashboard"> Dashboard </Link>
                <Link to="/"> Home </Link>
            </div>
        </div>
    )
}

export default NavBar;