import styles from './Searchbar.module.css'
import searchIcon from '../../assets/search-icon.png'
import { useEffect, useState } from 'react'

const CODES = ["PL", "PD", "BL1", "SA"]

const Searchbar = ({ onSelect }) => {

    const [isFocused, setIsFocused] = useState(false)
    const [query, setQuery] = useState("")
    const [allTeams, setAllTeams] = useState([])
    const [results, setResults] = useState([])

    // fetch once on mount
    useEffect(() => {
        async function loadTeams() {
            const res = await Promise.all(
                CODES.map(code =>
                    fetch(`/api/v4/competitions/${code}/teams`, {
                        headers: { "X-Auth-Token": import.meta.env.VITE_FOOTBALL_API_KEY }
                    }).then(r => r.json())
                )
            )
            setAllTeams(res.flatMap(r => r.teams))
        }
        loadTeams()
    }, [])

    // filter locally on query change
    useEffect(() => {
        if (!query) return setResults([])
        const filtered = allTeams.filter(team =>
            team.name.toLowerCase().includes(query.toLowerCase())
        )
        setResults(filtered.slice(0, 5))
    }, [query, allTeams])

    return(
        <>
            <div className={styles.searchContainer}>
                <img src={searchIcon} className={styles.searchIcon}/>
                <input
                    className={styles.input}
                    onChange={(e) => setQuery(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                    placeholder='search...'
                />
            </div>
            <div className={styles.resultContainer}>
                {isFocused && results.length > 0 && (
                    results.map(team => (
                        <button key={team.id} className={styles.dropdownItem} onClick={() => onSelect(team)}>
                            <img src={team.crest} width={30}/>
                            {team.name}
                        </button>
                    ))
                )}
            </div>
        </>
    )
}

export default Searchbar