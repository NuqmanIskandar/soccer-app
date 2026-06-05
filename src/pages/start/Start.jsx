import styles from './Start.module.css'
import Navbar from '../../components/navbar/Navbar'
import Searchbar from '../../components/searchbar/Searchbar'

const Start = () => {

    return(
        <>
            <div className={styles.wrapper}>
                <Navbar/>
                <div className={styles.searchWrapper}>
                    <Searchbar/>
                </div>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, quidem repellendus, suscipit distinctio facilis soluta veniam, blanditiis laboriosam velit sequi praesentium cupiditate? Ut rem numquam, cumque tempore architecto at consequuntur.</h1>
            </div>
        </>
    )
}

export default Start