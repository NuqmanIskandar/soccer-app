import styles from './Home.module.css'
import Navbar from '../../components/navbar/Navbar'

const Home = () => {
    return(
        <>
            <div className={styles.wrapper}>
                <Navbar/>
            </div>
        </>
    )
}

export default Home