import styles from './dashboard.module.css'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    return(
        <div className={styles.workout_board}>
                <h2 className={styles.category_header}>Explore Workouts</h2>
                <div className={styles.category_section}>
                    <h3>Upper Body</h3>
                    <button className={styles.category_button}><Link to='/infoupperbody'>Chest</Link></button>
                    <button className={styles.category_button}><Link to='/infoupperbody'>Back</Link></button>
                    <button className={styles.category_button}><Link to='/infoupperbody'>Biceps</Link></button>
                    <button className={styles.category_button}><Link to='/infoupperbody'>Shoulders</Link></button>
                </div>
                <div className={styles.category_section}>
                    <h3>Lower Body</h3>
                    <button className={styles.category_button}><Link to='/infolowerbody'>Glutes</Link></button>
                    <button className={styles.category_button}><Link to='/infolowerbody'>Quads</Link></button>
                    <button className={styles.category_button}><Link to='/infolowerbody'>Calf</Link></button>
                    <button className={styles.category_button}><Link to='/infolowerbody'>Placholder</Link></button>
                </div>
                <div className={styles.category_section}>
                    <h3>Routines</h3>
                    <button className={styles.category_button}><Link to='/inforoutines'>PPL</Link></button>
                    <button className={styles.category_button}><Link to='/inforoutines'>Arnold Split</Link></button>
                </div>
            </div>
    )
}

export default Dashboard;