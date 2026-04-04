import './App.css'
import { NavBar } from './components/NavBar'
import { SearchInput } from './components/SearchInput'
import withResults from '../with-results.json'
import { useState } from 'react'
import { ResultsGrid } from './components/ResultsGrid'

function App() {
  const [search, setSearch] = useState('')
  const [games, setGames] = useState(withResults.results)
  // const [loading, setLoading] = useState(false)

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <>
      <NavBar />
      <SearchInput
        search={search}
        handleSearch={handleSearch} />

      <ResultsGrid 
      games={games}
      search={search}/>
    </>
  )
}

export default App

