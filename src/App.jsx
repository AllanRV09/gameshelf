import { useState } from 'react'
import { useGames } from './hooks/useGames'

import { NavBar } from './components/NavBar'
import { ResultsGrid } from './components/ResultsGrid'
import { SearchInput } from './components/SearchInput'

import './App.css'

function App() {
  const [search, setSearch] = useState('')
  const { games, loading, error } = useGames({ search })

  return (
    <>
      <NavBar />
      <SearchInput
        search={search}
        onChange={setSearch} />

      <ResultsGrid
        games={games}
        loading={loading}
        error={error}
        search={search} />
    </>
  )
}

export default App

