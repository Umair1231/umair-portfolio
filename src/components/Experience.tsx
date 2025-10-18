import { useState } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

interface Job {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string[];
  technologies: string[];
}

const Experience = () => {
  const [activeJob, setActiveJob] = useState(0);

  const jobs: Job[] = [
    {
      id: 'Folio3',
      company: 'Folio3',
      position: 'Software Engineer',
      period: 'September 2023 - September 2025',
      description: [
        'Designed and deployed a Computer Vision system for automated industrial analysis, including data cleaning, augmentation, and deep learning models, achieving 92% test accuracy and managing the full project lifecycle, including client communication.',
        'Developed a GenAI-based SQL chatbot that translates natural language into dynamic SQL queries, optimizing data retrieval and integrating the system into an offline-first mobile application using advanced prompt engineering techniques.',
        'Led the end-to-end development of an AI Booking Agent, an LLM-based chatbot with multi-agent workflows using AWS Bedrock and LangGraph, reducing API response times by 75% and achieving 90% solution accuracy.',
        'Improved performance across enterprise web applications, reducing login times by 50% for ReactJS projects and cutting page load times by 50% for VueJS applications through extensive refactoring and optimization.',
        'Built complex data-driven UIs with AngularJS for enterprise projects, implementing advanced filtering, sorting, and visualization features to efficiently handle large datasets.',
        'Architected and developed full-stack solutions including NestJS backend services, FastAPI APIs, and database schemas, collaborating in Agile/Scrum teams to translate requirements into functional AI and software solutions.'
      ],
      technologies: [  'Python',
        'TypeScript',
        'ReactJS',
        'VueJS',
        'AngularJS',
        'FastAPI',
        'NestJS',
        'AWS Bedrock',
        'PyTorch',
        'LangGraph'
      ]
    },
  ];

  return (
    <section id="experience" className="py-24 bg-white dark:bg-primary">
      <div className="section-container">
        <h2 className="section-title" data-aos="fade-right">
          Work Experience
        </h2>
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Tab navigation for companies */}
          <div 
            className="lg:col-span-3 flex lg:flex-col overflow-x-auto lg:overflow-x-visible mb-6 lg:mb-0"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            {jobs.map((job, index) => (
              <button
                key={job.id}
                className={`whitespace-nowrap px-4 py-3 text-left transition-all duration-300 border-b-2 lg:border-b-0 lg:border-l-2 ${
                  activeJob === index
                    ? 'border-secondary text-secondary dark:text-secondary bg-gray-50 dark:bg-primary-light'
                    : 'border-transparent text-gray-600 dark:text-text-secondary hover:text-gray-900 dark:hover:text-text-primary hover:bg-gray-50 dark:hover:bg-primary-light'
                }`}
                onClick={() => setActiveJob(index)}
              >
                {job.company}
              </button>
            ))}
          </div>
          
          {/* Job details */}
          <div 
            className="lg:col-span-9"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-text-primary">
                {jobs[activeJob].position} <span className="text-secondary">@ {jobs[activeJob].company}</span>
              </h3>
              
              <div className="flex items-center mt-2 text-gray-600 dark:text-text-secondary">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{jobs[activeJob].period}</span>
              </div>
            </div>
            
            <ul className="space-y-4 mb-6">
              {jobs[activeJob].description.map((item, index) => (
                <li key={index} className="flex">
                  <span className="text-secondary mr-2">▹</span>
                  <span className="text-gray-700 dark:text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
            
            <div>
              <h4 className="text-gray-700 dark:text-text-primary font-medium mb-2">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {jobs[activeJob].technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 dark:bg-primary-light text-gray-800 dark:text-text-secondary rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Education section */}
        <div className="mt-24">
          <h3 
            className="text-2xl font-bold mb-8 text-gray-900 dark:text-text-primary"
            data-aos="fade-right"
          >
            Education
          </h3>
          
          <div 
            className="bg-gray-50 dark:bg-primary-light p-6 rounded-lg shadow-sm"
            data-aos="fade-up"
          >
            <div className="flex items-start">
              <div className="hidden sm:block mr-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-primary flex items-center justify-center">
                  <Briefcase className="h-5 w-5 text-gray-600 dark:text-secondary" />
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-text-primary">
                  Bachelors in Computer Science (September 2020 - June 2024)
                </h4>
                <p className="text-gray-700 dark:text-text-secondary mt-1">
                  National University of Computer and Emerging Sciences Karachi, Pakistan
                </p>
                <p className="text-gray-600 dark:text-text-dark mt-1 flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  CGPA: 3.45
                </p>
                <p className="mt-4 text-gray-700 dark:text-text-secondary">
                  Dean's List (4x)
                </p>
              </div>
            </div>
          </div>

          <div 
            className="bg-gray-50 dark:bg-primary-light p-6 rounded-lg shadow-sm"
            data-aos="fade-up"
          >
            <div className="flex items-start">
              <div className="hidden sm:block mr-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-primary flex items-center justify-center">
                  <Briefcase className="h-5 w-5 text-gray-600 dark:text-secondary" />
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-text-primary">
                  Masters in Artificial Intelligence (October 2025 - Present)
                </h4>
                <p className="text-gray-700 dark:text-text-secondary mt-1">
                  Friedrich-Alexander-Universität Erlangen-Nürnberg Erlangen, Germany
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Experience;