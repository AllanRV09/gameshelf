import './App.css'
import { NavBar } from './components/NavBar'
import { SearchInput } from './components/SearchInput'
import { useState } from 'react'

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
    </>
  )
}

export default App

