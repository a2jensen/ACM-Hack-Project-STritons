import styles from './routine.module.css'
import WorkoutDashboard from '../dashboard/WorkoutDashboard';
// importing workout dashboard component
// implement the dashboard component into each day. and we need to add some sort of code that will check if the routine should be printed on that day

const routine = ({workout}) => {
    return (
        <div className={styles.routine_container}>
        <div className={styles.routine_calendar}>
            <div className={styles.routine_day}>
                <h2 className={styles.routine_header}>Sunday</h2>
                <p className={styles.routine_workout}> workouts go here</p>
            </div>
            <div className={styles.routine_day}>
                <h2 className={styles.routine_header}>Monday</h2>
                <p className={styles.routine_workout}> workouts go hereeeeeeee</p>
            </div>
            <div className={styles.routine_day}>
                <h2 className={styles.routine_header}>Tuesday</h2>
                <p className={styles.routine_workout}> workouts go here</p>
            </div>
            <div className={styles.routine_day}>
                <h2 className={styles.routine_header}>Wednesday</h2>
                <p className={styles.routine_workout}> workouts go here</p>
            </div>
            <div className={styles.routine_day}>
                <h2 className={styles.routine_header}>Thursday</h2>
                <p className={styles.routine_workout}> workouts go here</p>
            </div>
            <div className={styles.routine_day}>
                <h2 className={styles.routine_header}>Friday</h2>
                <p className={styles.routine_workout}> workouts go here</p>
            </div>
            <div className={styles.routine_day}>
                <h2 className={styles.routine_header}>Saturday</h2>
                <p className={styles.routine_workout}> workouts go here</p>
            </div>
        </div>
        </div>
    )
}

export default routine;