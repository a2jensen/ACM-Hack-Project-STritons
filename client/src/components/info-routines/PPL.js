import styles from './ppl.module.css'


const PPL = () => {
    return (
        <div className={styles.container}>
            <div className={styles.info_box}>
                <h2 className={styles.header}>PPL Routine</h2>
                <h2 className={styles.sub_header}>Summary</h2>
                <div className={styles.info}><center>Push, Pull, Legs, is a popular workout routine that splits the training into three main categories, each focusing on specific muscle groups.</center></div>
                <div className={styles.info_ppl}>Push Day:<br />This part of the routine focuses on the upper body muscles involved <br />in pushing movements, primarily targeting the chest, shoulders,<br />and triceps. Common exercises include bench press, shoulder press,<br />and tricep dips.</div>
                <div className={styles.info_ppl}>Pull Day:<br /> Pull day is dedicated to muscles involved in pulling actions.<br /> This mainly involves the back and biceps. <br /> Key exercises are pull-ups, rows, and bicep curls.</div>
                <div className={styles.info_ppl}>Legs Day:<br /> The final category is legs day, which targets the lower body.<br /> This includes exercises like squats, deadlifts, and lunges,<br /> focusing on the quadriceps, hamstrings, glutes, and calves.</div>
                <h2 className={styles.sub_header}>Calendar</h2>
                <ul className={styles.day_list}>
                    <li className={styles.day}>
                        <div className={styles.day_name}>Sunday</div>
                        <div className={styles.exercise_day}>Push Day</div>
                        <div className={styles.exercise_info}>
                            Bench Press:<br />
                            4 x 10 reps
                        </div>
                        <div className={styles.exercise_info}>
                            Chest Pull:<br />
                            5 x 10 reps
                        </div>
                    </li>
                    <li className={styles.day}>
                        <div className={styles.day_name}>Monday</div>
                        <div className={styles.exercise_day}>Pull Day</div>
                        <div className={styles.exercise_info}>
                            Lateral Pulldowns:<br />
                            4 x 10 reps
                        </div>
                        <div className={styles.exercise_info}>
                            Pullups:<br />
                            4 x 10 reps
                        </div>
                    </li>
                    <li className={styles.day}>
                        <div className={styles.day_name}>Tuesday</div>
                        <div className={styles.exercise_day}>Legs Day</div>
                        <div className={styles.exercise_info}>
                            Squats:<br />
                            4 x 10 reps
                        </div>
                        <div className={styles.exercise_info}>
                            Leg extension:<br />
                            4 x 10 reps
                        </div>
                    </li>
                    <li className={styles.day}>
                        <div className={styles.day_name}>Wednesday</div>
                        <div className={styles.exercise_day}>Rest Day</div>
                        <div className={styles.exercise_info}>
                            Cardio:<br />
                            Stairmasters
                        </div>
                        <div className={styles.exercise_info}>
                            Cardio:<br />
                            Hiking
                        </div>
                    </li>
                    <li className={styles.day}>
                        <div className={styles.day_name}>Thursday</div>
                        <div className={styles.exercise_day}>Push Day</div>
                        <div className={styles.exercise_info}>
                            Bench Press:<br />
                            4 x 10 reps
                        </div>
                        <div className={styles.exercise_info}>
                            Chest Pull:<br />
                            5 x 10 reps
                        </div>
                    </li>
                    <li className={styles.day}>
                        <div className={styles.day_name}>Friday</div>
                        <div className={styles.exercise_day}>Pull Day</div>
                        <div className={styles.exercise_info}>
                            Lateral Pulldowns:<br />
                            4 x 10 reps
                        </div>
                        <div className={styles.exercise_info}>
                            Pullups:<br />
                            4 x 10 reps
                        </div>
                    </li>
                    <li className={styles.day}>
                        <div className={styles.day_name}>Saturday</div>
                        <div className={styles.exercise_day}>Leg Day</div>
                        <div className={styles.exercise_info}>
                            Squats:<br />
                            4 x 10 reps
                        </div>
                        <div className={styles.exercise_info}>
                            Leg extension:<br />
                            4 x 10 reps
                        </div>
                    </li>
                </ul>
            </div>

            <div className={styles.routine_box}>
                <div className={styles.day}></div>
            </div>
            <div className={styles.info_box}>
                <h2 className={styles.header}>Arnold Routine</h2>
                <div className={styles.info}><center>The "Arnold Day" workout is a high-intensity bodybuilding routine inspired by Arnold Schwarzenegger, one of the most iconic figures in bodybuilding. This routine emphasizes volume and variety, targeting multiple muscle groups with a focus on symmetry, definition, and overall muscle mass.</center></div>
                <div className={styles.info_ppl}>Chest and Back:<br /> The workout often starts with exercises targeting the chest and back,<br /> emphasizing compound movements. Bench press, incline press, and <br />cable crossovers are common for the chest, while the back is worked <br /> through pull-ups, rows, and deadlifts.</div>
                <div className={styles.info_ppl}>Arms and Shoulders:<br /> This segment focuses on the biceps, triceps, and deltoids. Exercises <br />like bicep curls, tricep extensions, and various forms of shoulder <br />presses and raises are incorporated.</div>
                <div className={styles.info_ppl}>Abs and Core:<br /> Arnold's routine often includes rigorous abdominal <br/> and core exercises, such as crunches, leg raises, <br />and twists for a well-defined midsection.</div>
            </div>
            <div className={styles.routine_box}>
                <div className={styles.day}></div>
            </div>
            
        </div>
    )
}

export default PPL;