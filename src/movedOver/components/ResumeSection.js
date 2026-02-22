import { Box, Typography, Button, Container, Paper, Link } from '@mui/material';
import { Download } from '@mui/icons-material';
import Pdf from '../../Documents/Resume.pdf';

export function ResumeSection() {
  return (
    <Box id="resume" sx={{ minHeight: '100vh', py: 10 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, fontWeight: 700, mb: 2, color: '#000' }}>Resume</Typography>
          <Typography variant="body1" sx={{ color: '#666', mb: 4 }}>
            View or download my resume to learn more about my experience and qualifications
          </Typography>
          <Button variant="contained" href={Pdf} download="Patrick_Vyn_Badiang_Resume.pdf" startIcon={<Download />} sx={{ bgcolor: '#1976d2', '&:hover': { bgcolor: '#1565c0' } }}>
            Download Resume
          </Button>
        </Box>
        <Paper elevation={3} sx={{ height: 800, overflow: 'hidden' }}>
          <iframe
            src={Pdf}
            style={{ width: '100%', height: '100%', border: 'none' }}
            title="Resume PDF"
          />
        </Paper>
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="body2" sx={{ color: '#666' }}>
            Resume also available on{' '}
            <Link href="https://www.linkedin.com/in/patrick-vyn-badiang/" target="_blank" sx={{ color: '#1976d2' }}>
              LinkedIn
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
