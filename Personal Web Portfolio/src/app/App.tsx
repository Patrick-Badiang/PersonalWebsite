import { Header } from './components/Header';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ResumeSection } from './components/ResumeSection';
import { Project } from './components/ProjectCard';

export default function App() {
  // Profile image
  const profileImage = 'https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHN0dWRlbnR8ZW58MXx8fHwxNzcxNjA2MTM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';

  // Sample projects data
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce web application with user authentication, product management, and payment integration.',
      image: 'https://images.unsplash.com/photo-1540397106260-e24a507a08ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMGxhcHRvcHxlbnwxfHx8fDE3NzE2MzYwMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
    {
      id: 2,
      title: 'Mobile Fitness App',
      description: 'A cross-platform mobile app for tracking workouts, nutrition, and fitness goals with real-time progress analytics.',
      image: 'https://images.unsplash.com/photo-1707836868495-3307d371aba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzcxNjcwMjIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['React Native', 'Firebase', 'TypeScript'],
      githubUrl: 'https://github.com',
    },
    {
      id: 3,
      title: 'Machine Learning Model',
      description: 'Developed a predictive model for stock price forecasting using historical data and various ML algorithms.',
      image: 'https://images.unsplash.com/photo-1762279389083-abf71f22d338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NzE2MTQxODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn'],
      githubUrl: 'https://github.com',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <AboutSection profileImage={profileImage} />
        <ProjectsSection projects={projects} />
        <ResumeSection />
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2026 John Smith. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
