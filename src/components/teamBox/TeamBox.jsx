import styles from './TeamBox.module.css'

const TeamBox = ({ team }) => {
    return(
        <>
            <div className={styles.wrapper}>
                <div className={styles.imgContainer}>
                    <img src={team.crest} width={100}/>
                </div>
                <div className={styles.nameContainer}>
                    <span className={styles.nameText}>{team.name}</span>
                    <span className={styles.descriptionText}>{team.venue}, Est. {team.founded}</span>
                </div>
            </div>
        </>
    )
}

export default TeamBox