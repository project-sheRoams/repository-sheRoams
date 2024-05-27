import styles from "../../styles/Search.module.css"
import { useState } from "react"

export function SearchForm({ setCurrentSearch, currentSearch}) {
    const [search, setSearch] = useState('')
    return (
        <input
            value={currentSearch}
            className={styles.searchform}
            type="search"
            placeholder="Search by country"
            onChange={e => {
                const { value } = e.target
                setCurrentSearch(value)
            }}
        >
        </input>
    )
}