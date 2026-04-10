import './App.css'
import { NavBar } from './components/NavBar'
import { SearchInput } from './components/SearchInput'
import withResults from '../with-results.json'
import { useState } from 'react'
import { ResultsGrid } from './components/ResultsGrid'

const INITIAL_GAMES = withResults.results

function App() {
  const [search, setSearch] = useState('')

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
      games={INITIAL_GAMES}
      search={search}/>
    </>
  )
}

export default App

