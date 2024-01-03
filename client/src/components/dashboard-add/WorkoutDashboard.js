import styles from './workoutdashboard.module.css'

const workoutDashboard = ({workout}) => {
    return (
        <div className={styles.workout_board}>
            <h4>{workout.exercise}</h4>
            <p><strong>Day:</strong>{workout.day}</p>
            <p><strong>Sets:</strong>{workout.sets}</p>
            <p><strong>Reps:</strong>{workout.reps}</p>
        </div>
    )
}

export default workoutDashboard;