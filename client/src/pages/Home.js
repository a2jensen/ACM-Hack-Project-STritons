// Home page

// Importing home dashboard component
import Dashboard from '../components/home-dashboard/Dashboard';
import body from '../assets/home_body.png'


const Home = () => {
    return (
        <div>
            <img src={body}></img>
            <Dashboard />
        </div>
    )
}

export default Home;