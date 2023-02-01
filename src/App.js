import { getPosts } from "./api"
import { useState, useEffect } from "react"
import { Box } from "@mui/material"
import SearchBar from "./components.js/SearchBar"
import { List } from "./components.js/List"

function App() {

  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState([])

  useEffect(() => {
    getPosts().then(jsonData => {
      setPosts(jsonData)
      return jsonData
    }).then(jsonData => {
      setSearch(jsonData)
    })
  }, [])


  return (
    <Box sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <SearchBar posts={posts} setSearch={setSearch} />
      <List search={search} />
    </Box>
  )
}

export default App
