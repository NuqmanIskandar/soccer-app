import styles from './Start.module.css'
import Navbar from '../../components/navbar/Navbar'
import Searchbar from '../../components/searchbar/Searchbar'
import TeamBox from '../../components/teamBox/TeamBox'
import { useEffect, useState } from 'react'

const Start = () => {

    const [selectedTeam, setSelectedTeam] = useState(null)

    useEffect(() => {
        console.log(selectedTeam)
    }, [selectedTeam])

    return(
        <>
            <div className={styles.wrapper}>
                <Navbar/>
                <div className={styles.searchWrapper}>
                    <Searchbar onSelect={setSelectedTeam}/>
                </div>
                {selectedTeam && (
                    <TeamBox team={selectedTeam}/>
                )}
            </div>
        </>
    )
}

export default Start