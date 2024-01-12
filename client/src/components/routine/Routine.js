import styles from './routine.module.css'
import WorkoutDashboard from '../dashboard/WorkoutDashboard';
// importing workout dashboard component
// implement the dashboard component into each day. and we need to add some sort of code that will check if the routine should be printed on that day

const routine = ({workout}) => {
    return (
        <div className={styles.routine_container}>
        <h4 className={styles.title}>Routine</h4>
        <div className={styles.routine_calendar}>
            <div className={styles.routine_day}>
                <h2 className={styles.routine_header}>Sunday</h2>
                <p className={styles.routine_workout}> Rest Day</p>
            </div>
            <div className={styles.routine_day}>
                <h2 className={styles.routine_header}>Monday</h2>
                <p className={styles.routine_workout}> Bench Press:<br /> 4 x 10 reps</p>
                <p className={styles.routine_workout}> Weighted Curls: <br /> 4 x 10 reps</p>
                <p className={styles.routine_workout}> Chest Fly: <br /> 3 x 10 reps</p>
                <p className={styles.routine_workout}> Weighted Curls: <br /> 2 x 10 reps</p>
                <p className={styles.routine_workout}> Cable Cross Over: <br /> 4 x 5 reps</p>
                <p className={styles.routine_workout}> Cable Pulldown: <br /> 4 x 10 reps</p>
            </div>
            <div className={styles.routine_day}>
                <h2 className={styles.routine_header}>Tuesday</h2>
                <p className={styles.routine_workout}> Lateral Pulldown: <br /> 4 x 10 reps</p>
                <p className={styles.routine_workout}> Pullups: <br /> 2 x 10 reps</p>
                <p className={styles.routine_workout}> Reverse: <br /> Fly 2 x 10 reps</p>
                <p className={styles.routine_workout}> Seated Row: <br /> 3 x 10 reps</p>
            </div>
            <div className={styles.routine_day}>
                <h2 className={styles.routine_header}>Wednesday</h2>
                <p className={styles.routine_workout}> Squats: <br /> 3 x 5 reps</p>
                <p className={styles.routine_workout}> Seated Leg Curls: <br /> 2 x 10 reps</p>
                <p className={styles.routine_workout}> Leg Extension: <br /> 2 x 10 reps</p>
                <p className={styles.routine_workout}> Leg Press: <br /> 3 x 5 reps</p>
            </div>
            <div className={styles.routine_day}>
                <h2 className={styles.routine_header}>Thursday</h2>
                <p className={styles.routine_workout}> Bench Press: <br /> 4 x 10 reps</p>
                <p className={styles.routine_workout}> Chest Fly: <br /> 3 x 10 reps</p>
                <p className={styles.routine_workout}> Weighted Curls: <br /> 2 x 10 reps</p>
                <p className={styles.routine_workout}> Cable Pulldown: <br /> 4 x 10 reps</p>
            </div>
            <div className={styles.routine_day}>
                <h2 className={styles.routine_header}>Friday</h2>
                <p className={styles.routine_workout}> Lateral Pulldown: <br />4 x 10 reps</p>
                <p className={styles.routine_workout}> Pullups: <br /> 2 x 10 reps</p>
                <p className={styles.routine_workout}> Reverse Fly: <br /> 2 x 10 reps</p>
                <p className={styles.routine_workout}> Seated Row: <br /> 3 x 10 reps</p>
            </div>
            <div className={styles.routine_day}>
                <h2 className={styles.routine_header}>Saturday</h2>
                <p className={styles.routine_workout}> Squats: <br /> 3 x 5 reps</p>
                <p className={styles.routine_workout}> Seated Leg Curls: <br /> 2 x 10 reps</p>
                <p className={styles.routine_workout}> Leg Extension: <br /> 2 x 10 reps</p>
                <p className={styles.routine_workout}> Leg Press: <br /> 3 x 5 reps</p>
            </div>
        </div>
        </div>
    )
}

export default routine;