import { Box, Typography, Container, Grid } from '@mui/material';
import { ProjectCard } from './ProjectCard';

export function ProjectsSection({ projects }) {
  return (
    <Box id="projects" sx={{ minHeight: '100vh', py: 10, bgcolor: '#f5f5f5' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, fontWeight: 700, mb: 2, color: '#000' }}>Projects</Typography>
          <Typography variant="body1" sx={{ color: '#666', maxWidth: 600, mx: 'auto' }}>
            Here are some of my recent projects that showcase my skills and experience
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
