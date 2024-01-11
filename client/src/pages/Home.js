// Home page

// Importing home dashboard component
import Dashboard from '../components/home-dashboard/Dashboard';
import body from '../assets/home_body.png'
import styles from '../assets/home_body.module.css'


const Home = () => {
    return (
        <div className={styles.container}>
            <img className={styles.body}src={body}></img>
            <Dashboard />
        </div>
    )
}

export default Home;