import { Box, Typography, IconButton, Container, Grid } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

export function AboutSection({ profileImage }) {
  return (
    <Box id="about" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', pt: 10, pb: 5 }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box sx={{ width: { xs: 250, md: 320 }, height: { xs: 250, md: 320 }, borderRadius: '50%', overflow: 'hidden', border: 4, borderColor: 'primary.main', boxShadow: 3 }}>
                <img src={profileImage} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <Typography variant="body1" sx={{ color: 'primary.main', fontWeight: 500, mb: 1 }}>Hello, I'm</Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, fontWeight: 700, mb: 2, color: 'text.primary' }}>Patrick Vyn Badiang</Typography>
            <Typography variant="h5" sx={{ color: 'text.secondary', mb: 3 }}>Software Developer | Undergraduate Student</Typography>
            <Typography variant="body1" sx={{ color: 'text.primary', lineHeight: 1.8, mb: 4 }}>
              I'm a passionate computer science student with a strong foundation in software development, 
              algorithms, and data structures. I love building innovative solutions and learning new technologies. 
              My expertise spans web development, mobile applications, and game development. 
              I'm always eager to take on new challenges and collaborate on exciting projects.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconButton href="https://github.com/Patrick-Badiang" target="_blank" sx={{ bgcolor: 'text.primary', color: 'background.paper', '&:hover': { bgcolor: 'primary.main' } }}>
                <GitHub />
              </IconButton>
              <IconButton href="https://www.linkedin.com/in/patrick-vyn-badiang/" target="_blank" sx={{ bgcolor: 'text.primary', color: 'background.paper', '&:hover': { bgcolor: 'primary.main' } }}>
                <LinkedIn />
              </IconButton>
              <IconButton href="mailto:patrick.vyn.llanto@gmail.com" sx={{ bgcolor: 'text.primary', color: 'background.paper', '&:hover': { bgcolor: 'primary.main' } }}>
                <Email />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
