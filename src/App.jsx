import { useState } from 'react'

import { NavBar } from './components/NavBar'
import { ResultsGrid } from './components/ResultsGrid'
import { SearchInput } from './components/SearchInput'

import withResults from '../with-results.json'

import './App.css'

const INITIAL_GAMES = withResults.results

function App() {
  const [search, setSearch] = useState('')

  return (
    <>
      <NavBar />
      <SearchInput
        search={search}
        onChange={setSearch} />

      <ResultsGrid 
      games={INITIAL_GAMES}
      search={search}/>
    </>
  )
}

export default App

