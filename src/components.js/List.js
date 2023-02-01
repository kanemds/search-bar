import { Box, Typography } from '@mui/material'
import React from 'react'
import { Post } from './Post'

export const List = ({ search }) => {

  const result = search.map(post => <Post key={post.id} post={post} />)

  const content = result?.length ? result : <Typography>No Matching Post(s)</Typography>

  return (
    <Box sx={{ width: '80%' }}>
      {content}
    </Box >
  )
}
