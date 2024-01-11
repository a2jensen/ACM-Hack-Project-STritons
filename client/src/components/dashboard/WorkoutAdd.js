import { useState } from "react"
import styles from './workoutadd.module.css'
import { useWorkoutsContext } from '../../hooks/useWorkoutsContext'


const WorkoutAdd = () => {
    const { dispatch } = useWorkoutsContext()
    const [exercise, setExercise] = useState('')
    const [day, setDay] = useState('')
    const [sets, setSets] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)
    const [emptyInputs, setEmptyInputs] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        // Initalizing workout
        const workout = {exercise, day,sets, reps}

        // Making a POST request
        const response = await fetch('/api/workout', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        // if statements
        if(!response.ok) {
            setError(json.error)
            setEmptyInputs(json.emptyInputs)
        }

        if (response.ok) {
            setExercise('')
            setDay('')
            setSets('')
            setReps('')
            setError(null)

            setEmptyInputs([])
            console.log('new workout added',json)
            dispatch({type: 'CREATE_WORKOUT', payload: json})
        }
    }

    return (
        <form className={styles.workout_add} onSubmit={handleSubmit}>
            <h3 className={styles.title}>Add A New Workout:</h3>

            <label className={styles.label}>Exercise:</label>
            <input className={styles.input}
                type='text'
                onChange={(e) => setExercise(e.target.value)}
                value={exercise}
            />

            <label className={styles.label}>Day:</label>
            <input className={styles.input}
                type='text'
                onChange={(e) => setDay(e.target.value)}
                value={day}
            />

            <label className={styles.label}>Sets:</label>
            <input className={styles.input}
                type='number'
                onChange={(e) => setSets(e.target.value)}
                value={sets}
            />

            <label className={styles.label}>Reps:</label>
            <input className={styles.input}
                type='number'
                onChange={(e) => setReps(e.target.value)}
                value={reps}
            />

            <button className={styles.submit}>Add Workout</button>
            {error && <div>{error}</div>}
        </form>
    )
}

export default WorkoutAdd
