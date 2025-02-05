
import React from 'react'
import {
  Box,
  Container,
  Typography,
  Link,
  IconButton,
  Divider,
  Stack
} from '@mui/material'
import { Github, Linkedin, Twitter, Globe } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        mt: 'auto',
        backgroundColor: '#f8f9fa',
        borderTop: '1px solid rgba(0, 0, 0, 0.12)'
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 3
          }}
        >
          {/* Left section */}
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography
              variant="h6"
              sx={{
                color: 'navy',
                fontWeight: 700,
                mb: 1
              }}
            >
              Bhavana Jami
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ maxWidth: '400px', mb: 2 }}
            >
              Exploring technology, sharing insights, and documenting my journey through web development and beyond.
            </Typography>
          </Box>

          {/* Right section */}
          <Box>
            <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
              <IconButton
                component="a"
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  color: 'navy',
                  '&:hover': { 
                    backgroundColor: 'rgba(0, 0, 128, 0.04)'
                  }
                }}
              >
                <Github size={20} />
              </IconButton>
              <IconButton
                component="a"
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  color: 'navy',
                  '&:hover': { 
                    backgroundColor: 'rgba(0, 0, 128, 0.04)'
                  }
                }}
              >
                <Linkedin size={20} />
              </IconButton>
              <IconButton
                component="a"
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  color: 'navy',
                  '&:hover': { 
                    backgroundColor: 'rgba(0, 0, 128, 0.04)'
                  }
                }}
              >
                <Twitter size={20} />
              </IconButton>
              <IconButton
                component="a"
                href="https://yourportfolio.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  color: 'navy',
                  '&:hover': { 
                    backgroundColor: 'rgba(0, 0, 128, 0.04)'
                  }
                }}
              >
                <Globe size={20} />
              </IconButton>
            </Stack>
          </Box>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Bottom section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2
          }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: { xs: 'center', sm: 'left' } }}
          >
            © {currentYear} iam bluewonk. All rights reserved.
          </Typography>
          
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 3 }}
            sx={{ textAlign: { xs: 'center', sm: 'left' } }}
          >
            <Link
              href="https://yourportfolio.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'text.secondary',
                textDecoration: 'none',
                '&:hover': {
                  color: 'navy',
                  textDecoration: 'underline'
                }
              }}
            >
              Portfolio
            </Link>
            <Link
              href="/privacy"
              sx={{
                color: 'text.secondary',
                textDecoration: 'none',
                '&:hover': {
                  color: 'navy',
                  textDecoration: 'underline'
                }
              }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              sx={{
                color: 'text.secondary',
                textDecoration: 'none',
                '&:hover': {
                  color: 'navy',
                  textDecoration: 'underline'
                }
              }}
            >
              Terms of Service
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}

