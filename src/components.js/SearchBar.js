import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { TextField } from '@mui/material'
import useDebounce from '../hooks/useDebounce'


const SearchBar = ({ posts, setSearch }) => {

  const [input, setInput] = useState('')

  const debounceValue = useDebounce(input.toLowerCase(), 1000)

  useEffect(() => {
    if (!debounceValue) return setSearch(posts) // return all posts if empty
    const result = posts.filter(post => post.title.includes(debounceValue) || post.body.includes(debounceValue))
    setSearch(result)
  }, [debounceValue])


  const handleChange = (e) => {
    setInput(e.target.value)
  }

  console.log(debounceValue)

  return (
    <TextField
      label=""
      sx={{ m: 1, width: '25ch' }}
      InputProps={{
        startAdornment: <SearchIcon position="start"></SearchIcon>,
      }}
      variant="outlined"
      onChange={handleChange}
    />
  )
}

export default SearchBar