import { useEffect, useState } from "react";

// import component
import WorkoutDashboard from "../components/dashboard-add/WorkoutDashboard";

const Home = () => {
    const [workouts, setWorkouts] = useState(null)

    // fetching data from backend
    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workout')
            const json = await response.json()

            if (response.ok){
                setWorkouts(json)
            }
        }

        fetchWorkouts()
    }, [])

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