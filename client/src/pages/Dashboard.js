// Dashboard page

import { useEffect, useState } from "react";

// importing workoutdashboard component
import WorkoutDashboard from "../components/dashboard-add/WorkoutDashboard";

const Home = () => {
    // State to store workouts fetched from the backend.
    const [workouts, setWorkouts] = useState(null)

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
                setWorkouts(json)
            }
        }
        // Calling the fetchWorkouts function.
        fetchWorkouts()
    }, []) // Empty dependency array ensures this effect runs only once

    return (
        <div>
            <div>
                {workouts && workouts.map((workout) => (
                    <WorkoutDashboard key={workout._id} workout={workout}/>
                ))}
            </div>
        </div>
    )
}

export default Home;