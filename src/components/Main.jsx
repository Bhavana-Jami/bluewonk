'use client'

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  IconButton,
} from '@mui/material'
import { Heart, MessageCircle } from 'lucide-react'
import { Edit, Delete } from '@mui/icons-material'
import { initiateDeletingBlog, initiateFetchingPost } from '../redux/posts/postsActions'
// import Loading from './loading'

export default function Main({ content, blogPosts }) {
  const location = useLocation()
  const dispatch = useDispatch()
  const currentUser = useSelector((state) => state.signInWithGoogle.currentUser)

  const handleDelete = (postId) => {
    dispatch(initiateDeletingBlog(postId))
    dispatch(initiateFetchingPost())
  }

  // Sort posts by likes for Most Popular section
  const mostPopularPosts = [...blogPosts].sort((a, b) => b.likes - a.likes).slice(0, 3)

  const formatDate = (timestamp) => {
    const date = new Date(timestamp.seconds * 1000)
    return date.toISOString().split('T')[0]
  }

  // if (!blogPosts) return <Loading />
  if (content) return <Grid item xs={12}>{content}</Grid>

  return (
    <Box sx={{ maxWidth: '1200px', mx: 'auto', p: { xs: 2, sm: 4 } }}>
      <Grid container spacing={4}>
        {/* Main Content */}
        <Grid item xs={12} md={8}>
          <Typography
            variant="h4"
            sx={{
              color: 'navy',
              fontWeight: 700,
              mb: 4,
              pb: 1,
              borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
            }}
          >
            Featured posts from all categories
          </Typography>

          <Grid container spacing={3}>
            {blogPosts.map((post) => (
              <Grid item xs={12} key={post.id}>
                <Card 
                  sx={{ 
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                   borderBottom: '1px solid rgba(0, 0, 0, 0.12)',

                    boxShadow: 'none',
                    borderRadius: 0,
                    overflow: 'hidden'
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      width: { xs: '100%', sm: 280 },
                      height: { xs: 200, sm: '100%' },
                      objectFit: 'cover',
                    }}
                    image={post.image || '/placeholder.svg?height=200&width=280'}
                    alt={post.title}
                  />
                  <CardContent sx={{ flex: 1, p: 3 }}>
                    <Link 
                      to={`/posts/${post.id}`}
                      style={{ textDecoration: 'none' }}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          color: 'navy',
                          fontWeight: 600,
                          mb: 1,
                          '&:hover': { textDecoration: 'underline' }
                        }}
                      >
                        {post.title}
                      </Typography>
                    </Link>

                    <Typography 
                      variant="body1" 
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      {post.subtitle}
                    </Typography>

                    <Box 
                      sx={{ 
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        mb: 2,
                        color: 'text.secondary'
                      }}
                    >
                      <Typography variant="body2">
                        {formatDate(post.createdAt)}
                      </Typography>
                      
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <Heart size={16} />
                        <Typography variant="body2">{post.likes}</Typography>
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <MessageCircle size={16} />
                        <Typography variant="body2">{post.comments}</Typography>
                      </Box>
                    </Box>

                    {currentUser?.email === "bhavanajami111@gmail.com" && (
                      <Box sx={{ mb: 2 }}>
                        <IconButton 
                          component={Link} 
                          to={`/createpost/${post.id}`}
                          size="small"
                        >
                          <Edit />
                        </IconButton>
                        <IconButton 
                          onClick={() => handleDelete(post.id)}
                          size="small"
                        >
                          <Delete />
                        </IconButton>
                      </Box>
                    )}

                   
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Sidebar */}
        {location.pathname === "/" && (
          <Grid item xs={12} md={4} sx={{ pl: { md: 4 } }}>
            {/* Most Popular */}
            <Box sx={{ mb: 6 }}>
              <Typography
                variant="h4"
                sx={{
                  color: 'navy',
                  fontWeight: 700,
                  mb: 4,
                  pb: 1,
                  borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
                }}
              >
                Most Popular
              </Typography>
              
              {mostPopularPosts.map((post) => (
                <Box
                  key={post.id}
                  sx={{
                    mb: 3,
                    pb: 3,
                    borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
                  }}
                >
                  <Link
                    to={`/posts/${post.id}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: 'navy',
                        fontWeight: 500,
                        mb: 1,
                        '&:hover': { textDecoration: 'underline' }
                      }}
                    >
                      {post.title.slice(0, 27)}...
                    </Typography>
                  </Link>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Typography variant="body2" color="text.secondary">
                      {formatDate(post.createdAt)}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <Heart size={14} />
                      <Typography variant="body2" color="text.secondary">
                        {post.likes}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      {post.category}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>

            {/* Recent Blogs */}
            <Box>
              <Typography
                variant="h5"
                sx={{
                  color: 'navy',
                  fontWeight: 700,
                  mb: 3,
                  pb: 1,
                  borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
                }}
              >
                Recent Blogs
              </Typography>
              
              {mostPopularPosts.map((post) => (
                <Box
                  key={post.id}
                  sx={{
                    mb: 3,
                    pb: 3,
                    borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
                  }}
                >
                  <Link
                    to={`/posts/${post.id}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: 'navy',
                        fontWeight: 500,
                        mb: 1,
                        '&:hover': { textDecoration: 'underline' }
                      }}
                    >
                      {post.title.slice(0, 30)}...
                    </Typography>
                  </Link>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Typography variant="body2" color="text.secondary">
                      {formatDate(post.createdAt)}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <Heart size={14} />
                      <Typography variant="body2" color="text.secondary">
                        {post.likes}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      {post.category}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>
        )}
      </Grid>
    </Box>
  )
}

