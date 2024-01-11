// Dashboard page

import { useEffect } from "react";
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

// importing workoutdashboard component and dashboard component styles
import WorkoutDashboard from "../components/dashboard/WorkoutDashboard";
import WorkoutAdd from "../components/dashboard/WorkoutAdd";
import styles from "../components/dashboard/workoutdashboard.module.css";

const Home = () => {
    const {workouts, dispatch} = useWorkoutsContext()

    // fetching data from backend
    useEffect(() => {
        // Async function to fetch workouts.
        const fetchWorkouts = async () => {
            // Making a GET request to the '/api/workout' endpoint.
            const response = await fetch('/api/workout')
            // Parsing the JSON response.
            const json = await response.json()

            // If the response is successful, update the workouts state.
            if (response.ok){
                dispatch({type: 'SET_WORKOUTS', payload: json})
            }
        }
        // Calling the fetchWorkouts function.
        fetchWorkouts()
    }, []) // Empty dependency array ensures this effect runs only once

    return (
        <div className={styles.container}>
            <div>
                {workouts && workouts.map((workout) => (
                    <WorkoutDashboard key={workout._id} workout={workout}/>
                ))}
            </div>
            <WorkoutAdd />
        </div>
    )
}

export default Home;