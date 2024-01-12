// LowerBody.js

import React from 'react';
import styles from './upperbody.module.css';

const LowerBody = () => {
    return (
        <div className={styles.container}>
            <div>
                <h2>Glutes Workout</h2>
                <ul className={styles.exerciseList}>
                    <li>
                        <strong>Barbell Hip Thrusts:</strong>
                        <p>Target Area: Glutes.</p>
                        <p>Execution: Sit on the floor with a loaded barbell over your hips. Thrust your hips upward, squeezing your glutes at the top.</p>
                    </li>
                    <li>
                        <strong>Walking Lunges:</strong>
                        <p>Target Area: Glutes and quads.</p>
                        <p>Execution: Take a step forward, lowering your hips until both knees are bent at a 90-degree angle. Alternate legs while walking.</p>
                    </li>
                    <li>
                        <strong>Glute Bridges:</strong>
                        <p>Target Area: Glutes.</p>
                        <p>Execution: Lie on your back, lift your hips towards the ceiling, and squeeze your glutes at the top.</p>
                    </li>
                </ul>
            </div>

            <div>
                <h2>Quads Workout</h2>
                <ul className={styles.exerciseList}>
                    <li>
                        <strong>Barbell Squats:</strong>
                        <p>Target Area: Quads.</p>
                        <p>Execution: With a barbell on your shoulders, squat down by bending your knees, keeping your back straight, and then return to the starting position.</p>
                    </li>
                    <li>
                        <strong>Leg Press:</strong>
                        <p>Target Area: Quads.</p>
                        <p>Execution: Sit on a leg press machine, push the weight away by extending your knees, and then return to the starting position.</p>
                    </li>
                    <li>
                        <strong>Leg Extensions:</strong>
                        <p>Target Area: Quads.</p>
                        <p>Execution: Sit on a leg extension machine, extend your legs against resistance, and then return to the starting position.</p>
                    </li>
                </ul>
            </div>

            <div>
                <h2>Calf Workout</h2>
                <ul className={styles.exerciseList}>
                    <li>
                        <strong>Standing Calf Raises:</strong>
                        <p>Target Area: Calves.</p>
                        <p>Execution: Stand on a raised surface, lift your heels by pushing through the balls of your feet, and then lower your heels below the level of the platform.</p>
                    </li>
                    <li>
                        <strong>Seated Calf Raises:</strong>
                        <p>Target Area: Calves.</p>
                        <p>Execution: Sit on a calf raise machine, lift your heels, and then lower them to the starting position.</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default LowerBody;