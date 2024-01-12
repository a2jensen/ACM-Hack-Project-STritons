// UpperBody.js

import React from 'react';
import styles from './upperbody.module.css';

const UpperBody = () => {
    return (
        <div className={styles.container}>
            <div>
                <h2>Chest Workout</h2>
                <ul className={styles.exerciseList}>
                    <li>
                        <strong>Flat Barbell Bench Press:</strong>
                        <p>Target Area: Overall chest development.</p>
                        <p>Execution: Lie on a flat bench, grasp the barbell with a wide grip, lower it to your chest, and press it back up.</p>
                    </li>
                    <li>
                        <strong>Incline Barbell Bench Press:</strong>
                        <p>Target Area: Upper chest.</p>
                        <p>Execution: Similar to the flat bench press, but performed on an inclined bench (around 15-30 degrees). This angle emphasizes the upper chest.</p>
                    </li>
                    <li>
                        <strong>Decline Barbell Bench Press:</strong>
                        <p>Target Area: Lower chest.</p>
                        <p>Execution: Similar to flat bench press, but on a decline bench. This angle puts more emphasis on the lower part of the chest.</p>
                    </li>
                    <li>
                        <strong>Dumbbell Flyes:</strong>
                        <p>Target Area: Middle and outer chest.</p>
                        <p>Execution: Lie on a flat or incline bench, hold a dumbbell in each hand with arms extended. Lower the dumbbells out to the sides in a controlled motion, then bring them back up.</p>
                    </li>
                    <li>
                        <strong>Chest Dips:</strong>
                        <p>Target Area: Lower chest.</p>
                        <p>Execution: Use parallel bars, lean forward, and lower your body until your upper arms are parallel to the ground. Push back up.</p>
                    </li>
                    <li>
                        <strong>Push-Ups:</strong>
                        <p>Target Area: Overall chest development.</p>
                        <p>Execution: Standard push-ups target the entire chest. Variations like wide grip or diamond push-ups can shift emphasis to different areas.</p>
                    </li>
                    <li>
                        <strong>Cable Crossover:</strong>
                        <p>Target Area: Outer chest.</p>
                        <p>Execution: Stand between two cable machines, set at shoulder height. Grab the handles, cross them over your chest, and squeeze your chest as you bring your arms together.</p>
                    </li>
                    <li>
                        <strong>Machine Chest Press:</strong>
                        <p>Target Area: Overall chest.</p>
                        <p>Execution: Sit on a chest press machine, grasp the handles, and push them away from your body.</p>
                    </li>
                    <li>
                        <strong>Pec Deck Machine:</strong>
                        <p>Target Area: Inner chest.</p>
                        <p>Execution: Sit on a pec deck machine, position your arms at a 90-degree angle, and bring them together in front of your chest against the resistance.</p>
                    </li>
                    <li>
                        <strong>Incline Dumbbell Press:</strong>
                        <p>Target Area: Upper chest.</p>
                        <p>Execution: Similar to flat dumbbell press but performed on an incline bench.</p>
                    </li>
                </ul>
            </div>

            <div>
                <h2>Back Workout</h2>
                <ul className={styles.exerciseList}>
                    <li>
                        <strong>Deadlifts:</strong>
                        <p>Target Area: Entire back.</p>
                        <p>Execution: Stand with a barbell in front of you, bend at the hips and knees, grip the bar, and lift it by extending your hips and knees.</p>
                    </li>
                    <li>
                        <strong>Lat Pulldowns:</strong>
                        <p>Target Area: Latissimus dorsi (lats).</p>
                        <p>Execution: Use a cable machine with a wide grip attachment. Pull the bar down in front of you, engaging your lats.</p>
                    </li>
                    <li>
                        <strong>Bent Over Barbell Rows:</strong>
                        <p>Target Area: Middle back.</p>
                        <p>Execution: Bend at the hips, keeping your back straight. Pull the barbell to your lower chest.</p>
                    </li>
                    <li>
                        <strong>T-Bar Rows:</strong>
                        <p>Target Area: Middle back.</p>
                        <p>Execution: Use a T-bar row machine or landmine attachment. Bend at the hips, grab the handles, and row the weight towards your chest.</p>
                    </li>
                    <li>
                        <strong>Face Pulls:</strong>
                        <p>Target Area: Upper back and rear delts.</p>
                        <p>Execution: Use a cable machine with a rope attachment. Pull the rope towards your face, keeping your upper arms parallel to the ground.</p>
                    </li>
                    <li>
                        <strong>Single-Arm Dumbbell Rows:</strong>
                        <p>Target Area: Lats and middle back.</p>
                        <p>Execution: Place one knee and hand on a bench, grab a dumbbell with the opposite hand, and row it towards your hip.</p>
                    </li>
                </ul>
            </div>

            <div>
                <h2>Biceps Workout</h2>
                <ul className={styles.exerciseList}>
                    <li>
                        <strong>Barbell Curl:</strong>
                        <p>Target Area: Biceps.</p>
                        <p>Execution: Stand with a barbell, grip it with palms facing forward, and curl the bar towards your shoulders.</p>
                    </li>
                    <li>
                        <strong>Dumbbell Hammer Curls:</strong>
                        <p>Target Area: Brachialis and forearms.</p>
                        <p>Execution: Hold a dumbbell in each hand with palms facing your body, and curl the weights while keeping your palms facing in.</p>
                    </li>
                    <li>
                        <strong>Preacher Curls:</strong>
                        <p>Target Area: Biceps (isolated).</p>
                        <p>Execution: Use a preacher curl bench and curl the barbell or dumbbells, focusing on the biceps.</p>
                    </li>
                    <li>
                        <strong>Chin-Ups:</strong>
                        <p>Target Area: Biceps and upper back.</p>
                        <p>Execution: Palms facing you, pull your body up towards the bar.</p>
                    </li>
                    <li>
                        <strong>Concentration Curls:</strong>
                        <p>Target Area: Biceps (isolated).</p>
                        <p>Execution: Sit on a bench, lean forward, and curl a dumbbell with one arm, focusing on the biceps.</p>
                    </li>
                </ul>
            </div>

            <div>
                <h2>Shoulder Workout</h2>
                <ul className={styles.exerciseList}>
                    <li>
                        <strong>Overhead Press (Barbell or Dumbbell):</strong>
                        <p>Target Area: Overall shoulder development.</p>
                        <p>Execution: Lift the barbell or dumbbells overhead, fully extending your arms.</p>
                    </li>
                    <li>
                        <strong>Lateral Raises:</strong>
                        <p>Target Area: Lateral (side) delts.</p>
                        <p>Execution: Lift dumbbells to your sides until your arms are parallel to the ground.</p>
                    </li>
                    <li>
                        <strong>Front Raises:</strong>
                        <p>Target Area: Front delts.</p>
                        <p>Execution: Lift dumbbells in front of you until your arms are parallel to the ground.</p>
                    </li>
                    <li>
                        <strong>Rear Delt Flyes:</strong>
                        <p>Target Area: Rear delts.</p>
                        <p>Execution: Bend forward at the hips, hold dumbbells, and lift your arms to the sides.</p>
                    </li>
                    <li>
                        <strong>Shrugs:</strong>
                        <p>Target Area: Trapezius muscles.</p>
                        <p>Execution: Lift your shoulders toward your ears, holding either dumbbells or a barbell.</p>
                    </li>
                    <li>
                        <strong>Upright Rows:</strong>
                        <p>Target Area: Traps and lateral delts.</p>
                        <p>Execution: Lift a barbell or dumbbells towards your chin, keeping your elbows higher than your forearms.</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default UpperBody;