import { Paper, Typography } from '@mui/material'
import React from 'react'

export const Post = ({ post }) => {
  return (
    <Paper sx={{ p: 3, mb: 3 }}>
      <Typography variant='h4'>{post.title}</Typography>
      <Typography>{post.body}</Typography>
      <Typography>ID: {post.id}</Typography>
    </Paper>
  )
}
