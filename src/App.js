import { getPosts } from "./api"
import { useState, useEffect } from "react"
import { Box } from "@mui/material"
import SearchBar from "./components.js/SearchBar"

function App() {

  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState([])


  console.log(getPosts())

  useEffect(() => {
    getPosts().then(jsonData => {
      setPosts(jsonData)
      return jsonData
    }).then(jsonData => {
      setSearch(jsonData)
    })
  }, [])

  console.log(posts)

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <SearchBar />
    </Box>
  )
}

export default App
