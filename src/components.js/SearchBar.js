import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { TextField } from '@mui/material'

const SearchBar = () => {
  return (
    <TextField
      label=""
      sx={{ m: 1, width: '25ch' }}
      InputProps={{
        startAdornment: <SearchIcon position="start"></SearchIcon>,
      }}
      variant="outlined"
    />
  )
}

export default SearchBar