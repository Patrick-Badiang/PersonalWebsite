import { Card, CardMedia, CardContent, Typography, Chip, Box, Link } from '@mui/material';
import { OpenInNew, GitHub } from '@mui/icons-material';

export function ProjectCard({ project }) {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', '&:hover': { boxShadow: 6 }, transition: 'box-shadow 0.3s' }}>
      <CardMedia component="img" height="200" image={project.image} alt={project.title} sx={{ objectFit: 'cover' }} />
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h6" gutterBottom sx={{ color: 'text.primary' }}>{project.title}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flexGrow: 1 }}>{project.description}</Typography>
        <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {project.technologies.map((tech) => (
            <Chip key={tech} label={tech} size="small" sx={{ bgcolor: 'primary.light', color: 'primary.contrastText' }} />
          ))}
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          {project.githubUrl && (
            <Link href={project.githubUrl} target="_blank" sx={{ display: 'flex', alignItems: 'center', gap: 0.5, textDecoration: 'none', color: 'text.secondary', '&:hover': { color: 'primary.main' } }}>
              <GitHub fontSize="small" />
              <Typography variant="body2">Code</Typography>
            </Link>
          )}
          {project.liveUrl && (
            <Link href={project.liveUrl} target="_blank" sx={{ display: 'flex', alignItems: 'center', gap: 0.5, textDecoration: 'none', color: 'text.secondary', '&:hover': { color: 'primary.main' } }}>
              <OpenInNew fontSize="small" />
              <Typography variant="body2">Live Demo</Typography>
            </Link>
          )}
        </Box>
      </CardContent>
    </Card>
  );
}
