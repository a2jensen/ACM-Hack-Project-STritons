import styles from './ppl.module.css'

const PPL = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.header}>PPL Routine</h2>
            <div className={styles.info}>Textbox 1</div>
            <div className={styles.info}>Textbox 2</div>
        </div>
    )
}

export default PPL;