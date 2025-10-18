import { useState } from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  links: {
    github?: string;
    live?: string;
  };
  category: string;
}

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects: Project[] = [
    {
      id: 'FYP',
      title: 'Deep Transformer based Structural Semantic Network for Document Clustering',
      description: 'Created a cutting edge document clustering model using Deep Transformers and Structural Semantic Networks, achieving superior accuracy on benchmark datasets.',
      technologies: ['AI, Machine Learning', 'Deep Learning', 'Transformers', 'NLP'],
      links: {
        github: 'https://github.com/aliahmxd254/FYP23-Deep-Document-Clustering',
      },
      category: 'ai',
    },
    {
      id: 'Ezrental',
      title: 'Ezrental',
      description: 'EzRental is a scalable, cloud-based platform that connects landlords and tenants worldwide, offering advanced search, detailed listings, and secure bookings in a single, user-friendly application.',
      technologies: [  'C#',
  'ASP.NET MVC',
  'ReactJS',
  'Microsoft Azure',
  'Interserver',
  'Microsoft Visual Studio',
  'Microsoft SQL Workbench'],
      links: {
        github: 'https://github.com/AahilHalani/ezrental',
      },
      category: 'web',
    },
    {
      id: 'Quickchef',
      title: 'Quick Chef',
      description: 'Created a personal food and ingredient tracker and recipe recommendation app that suggests recipes based on available ingredients, reducing food waste and enhancing meal planning.',
      technologies: ["React", "Node.js", "Express", "MongoDB", "RESTful APIs"],
      links: {
        github: 'https://github.com/Umair1231/Quick-Chef',
      },
      category: 'web',
    },
    {
      id: 'bookingagent',
      title: 'AI Hotel Booking Agent',
      description: 'Spearheaded the development of an AI-powered hotel booking agent that utilizes LLMs and Langgraph to assist users in finding and booking hotels seamlessly.',
      technologies: ['AI', 'LLMs', 'Langgraph', 'React', 'AWS Bedrock'],
      links: {
        github: '',
      },
      category: 'ai',
    },
    {
      id: 'cargill',
      title: 'Cargill Computer Vision Integration',
      description: 'Created a Computer based integration for Cargill project to automate calculated of BCS score of cattle using AI and computer vision.',
      technologies: ['AI', 'Computer Vision', 'Python', 'TensorFlow', 'OpenCV'],
      links: {
        github: 'https://www.cargill.com/',
      },
      category: 'ai',
    },
    {
      id: 'cargill2',
      title: 'Cargill Mobile Offline Chatbot',
      description: 'Created a on device mobile chatbot for Cargill project using llama.cpp that creates dynamic SQL queries based on user prompts to fetch data from local database without internet connection.',
      technologies: ['On-device AI', 'Chatbot', 'Llama.cpp', 'SQL', 'Mobile Development'],
      links: {
        github: 'https://www.cargill.com/',
      },
      category: 'ai',
    },
    {
      id: 'dynata',
      title: 'Dynata',
      description: 'Worked on the Dynata project as a frontend developer to create and maintain web applications for data collection and survey management.',
      technologies: ['React', 'JavaScript', 'HTML', 'CSS', 'RESTful APIs'],
      links: {
        github: 'https://www.dynata.com/',
      },
      category: 'web',
    },
    {
      id: 'cxapp',
      title: 'Cxapp',
      description: 'Worked as a frontend developer using Vue on the cxApp project. Refactored multiple components, integrated Jibestream maps, added localization and fixed numerous bugs as well as created multiple pages.',
      technologies: [ 'Vue.js', 'JavaScript', 'HTML', 'CSS', 'Jibestream Maps'],
      links: {
        github: 'https://cxapp.com/',
      },
      category: 'web',
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-primary-dark">
      <div className="section-container">
        <h2 className="section-title" data-aos="fade-right">
          My Projects
        </h2>
        
        {/* Filter buttons */}
        <div 
          className="flex flex-wrap justify-center gap-4 mt-12 mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <button
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              filter === 'all'
                ? 'bg-secondary text-primary-dark font-medium'
                : 'bg-white dark:bg-primary-light text-gray-700 dark:text-text-secondary hover:bg-gray-100 dark:hover:bg-primary'
            }`}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              filter === 'web'
                ? 'bg-secondary text-primary-dark font-medium'
                : 'bg-white dark:bg-primary-light text-gray-700 dark:text-text-secondary hover:bg-gray-100 dark:hover:bg-primary'
            }`}
            onClick={() => setFilter('web')}
          >
            Web
          </button>
          <button
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              filter === 'ai'
                ? 'bg-secondary text-primary-dark font-medium'
                : 'bg-white dark:bg-primary-light text-gray-700 dark:text-text-secondary hover:bg-gray-100 dark:hover:bg-primary'
            }`}
            onClick={() => setFilter('ai')}
          >
            AI / ML
          </button>
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="card overflow-hidden group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative overflow-hidden" style={{ height: '200px' }}>
                <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 right-4 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white dark:bg-primary rounded-full text-primary dark:text-secondary hover:bg-gray-100 dark:hover:bg-primary-light transition-colors duration-300"
                      aria-label="GitHub Repository"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white dark:bg-primary rounded-full text-primary dark:text-secondary hover:bg-gray-100 dark:hover:bg-primary-light transition-colors duration-300"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-text-primary mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-text-secondary mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-primary text-gray-800 dark:text-text-secondary rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* More projects link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Umair1231"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center"
            data-aos="fade-up"
          >
            <Code className="mr-2 h-5 w-5" />
            See More On GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;