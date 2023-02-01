import { getPosts } from "./api"
import { useState, useEffect } from "react"

function App() {

  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState([])


  console.log(getPosts())

  useEffect(() => {
    getPosts().then(json => {
      setPosts(json)
      return json
    }).then(json => {
      setSearch(json)
    })
  }, [])

  console.log(posts)

  return (
    <div className="App">

    </div>
  )
}

export default App
