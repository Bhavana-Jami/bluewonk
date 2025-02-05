
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import { Github, Linkedin, Twitter, Globe } from 'lucide-react'

export default function BlogHeader() {
  return (
    <Box
      component="article"
      sx={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "4rem 1rem",
        textAlign: "center",
      }}
    >
      {/* Main Title */}
      <Typography
        variant="h4"
        sx={{
          fontSize: { xs: "2.5rem", md: "2.7rem" },
          fontWeight: 700,
          color: "#2D3748",
          marginBottom: 2,
          lineHeight: 1.2,
        }}
      >
        iam bluewonk
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "1.25rem", md: "1.5rem" },
          color: "#4A5568",
          marginBottom: 3,
          fontWeight: 500,
        }}
      >
        Hey, nice to meet you, I'm just another developer wanna be writer.
      </Typography>

      {/* Meta Information */}
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        justifyContent="center"
        sx={{ marginBottom: 4 }}
      >
        <Typography
          variant="body2"
          sx={{
            color: "#718096",
            fontWeight: 500,
          }}
        >
          JAN 01
        </Typography>
        <Typography sx={{ color: "#718096" }}>•</Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography
            variant="body2"
            sx={{
              color: "#718096",
              fontWeight: 500,
            }}
          >
            Bhavana
          </Typography>
          <Avatar
            sx={{
              width: 24,
              height: 24,
              bgcolor: "#6366f1",
              fontSize: "0.875rem",
            }}
          >
            B
          </Avatar>
        </Box>
      </Stack>

      {/* Interaction Buttons */}
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        justifyContent="center"
      >
        <IconButton
          component="a"
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "navy",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 128, 0.04)",
            },
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
            color: "navy",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 128, 0.04)",
            },
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
            color: "navy",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 128, 0.04)",
            },
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
            color: "navy",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 128, 0.04)",
            },
          }}
        >
          <Globe size={20} />
        </IconButton>
      </Stack>
    </Box>
  );
}
