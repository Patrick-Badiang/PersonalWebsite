import { Box, Typography } from '@mui/material';
import { Header } from './components/Header';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ResumeSection } from './components/ResumeSection';

export default function PortfolioApp() {
  const profileImage = 'pictures/ProfilePic.JPG';

  const projects = [
    {
      id: 1,
      title: 'Ascend at Virginia Tech Website',
      description: 'Utilizes Amazon Web Services to host and hold relevant data within the database. Admins can modify database through user login and perform CRUD operations. This website is being used by active/future members of the club.',
      image: 'pictures/ascend.png',
      technologies: ['AWS', 'React', 'MaterialUI'],
      githubUrl: 'https://github.com/Patrick-Badiang',
      liveUrl: 'https://ascendatvt.org',
    },
    {
      id: 2,
      title: 'Filipino American Student Association Website',
      description: 'The club Filipino American Student Association tasked me to build a website that can serve as a hub for the active/future members of the club. The website took three months to create and was continuously updated throughout the following school year.',
      image: 'pictures/vtfasa.png',
      technologies: ['React', 'AWS','MaterialUI'],
      liveUrl: 'https://vtfasa.org',
    },
    {
      id: 3,
      title: 'Bohdied Spirits',
      description: 'Bohdied Spirits is an Open RPG game made in Unity. It was a passion project of mine that uploaded on Youtube in the form of "Devlogs" where I update viewers on the progress of the game.',
      image: 'pictures/BohdiedSpirits.png',
      technologies: ['Unity'],
      liveUrl: 'https://www.youtube.com/@kubergames3410',
    },
    {
      id: 4,
      title: 'Hack and Slash',
      description: 'The 2D game was made during a Brackey\'s GameJam in 2020. The theme was "Stronger Together" and this was achieved through the idea of each kill making the player "stronger." It was created in a week with the help of one other member on the team.',
      image: 'pictures/HackAndSlash.png',
      technologies: ['Unity'],
      liveUrl: 'https://bluewither.itch.io/bohdied-spirits',
    },
    {
      id: 5,
      title: 'Defenders',
      description: 'During the beginning of my Unity journey I followed a book that covered basics of unity ranging from cinemachine to Ai to spawners. This help propel me further into the framework in ways I couldn\'t imagine.',
      image: 'pictures/Defenders.png',
      technologies: ['Unity'],
      liveUrl: 'https://bluewither.itch.io/defenders',
    },
    {
      id: 6,
      title: 'Escaper',
      description: 'This would be my first puzzle game and was heavily focused on the puzzle aspect. This was more for my own curiosity and wanted to publish a game under a tight deadline.',
      image: 'pictures/Escaper.png',
      technologies: ['Unity'],
      liveUrl: 'https://bluewither.itch.io/escap',
    },
  ];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#fff' }}>
      <Header />
      <Box component="main">
        <AboutSection profileImage={profileImage} />
        <ProjectsSection projects={projects} />
        <ResumeSection />
      </Box>
      <Box component="footer" sx={{ bgcolor: '#1a1a1a', color: '#fff', py: 4, textAlign: 'center' }}>
        <Typography variant="body2" sx={{ color: '#999' }}>
          © 2024 Patrick Vyn Badiang. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
