import styles from './dashboard.module.css'

const Dashboard = () => {
    return(
        <div className={styles.workout_board}>
                <h2 className={styles.category_header}>Explore Workouts</h2>
                <div className={styles.category_section}>
                    <h3>Upper Body</h3>
                    <button className={styles.category_button}>Chest</button>
                    <button className={styles.category_button}>Back</button>
                    <button className={styles.category_button}>Biceps</button>
                    <button className={styles.category_button}>Shoulders</button>
                </div>
                <div className={styles.category_section}>
                    <h3>Lower Body</h3>
                    <button className={styles.category_button}>Glutes</button>
                    <button className={styles.category_button}>Quads</button>
                    <button className={styles.category_button}>Calf</button>
                    <button className={styles.category_button}>Placeholder</button>
                </div>
                <div className={styles.category_section}>
                    <h3>Routines</h3>
                    <button className={styles.category_button}>PPL</button>
                    <button className={styles.category_button}>Arnold Split</button>
                </div>
            </div>
    )
}

export default Dashboard;