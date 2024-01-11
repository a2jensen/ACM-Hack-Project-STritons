import styles from './workoutdashboard.module.css'
import { useWorkoutsContext } from '../../hooks/useWorkoutsContext'

const WorkoutDashboard = ({workout}) => {
    const { dispatch } = useWorkoutsContext()

    const handleClick = async () => {
        const response = await fetch('/api/workout/' + workout._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type:'DELETE_WORKOUT', payload: json})
        }
    }
    return (
        <div className={styles.workout_board}>
            <h4 className={styles.title}>{workout.exercise}</h4>
            <br className={styles.line}></br>
            <p><strong>Day: </strong>{workout.day}</p>
            <p><strong>Sets: </strong>{workout.sets}</p>
            <p><strong>Reps: </strong>{workout.reps}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>Delete</span>
        </div>
    )
}

export default WorkoutDashboard;