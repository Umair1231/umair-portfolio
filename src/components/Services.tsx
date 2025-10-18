import { CheckCircle } from 'lucide-react';
import Section from './Section.tsx';
import SectionTitle from './SectionTitle.tsx';

const services = [
  'Full-Stack Web Development with Django, Vue, React, and modern frameworks',
  'Custom Backend Solutions using Python, FastAPI, and GoLang',
  'AI-Powered Features (e.g., chatbots, object detection with YOLOv7, predictive models)',
  'Natural Language Interfaces enabling SQL chatbots and AI-driven Q&A systems for intuitive data interaction.',
  'API Design & Integration (RESTful) for seamless connectivity',
  'Database Management (MongoDB, PostgreSQL, SQL) and DevOps with Docker',
  'Custom AI Agents that reason, plan, and take actions (e.g., AWS Bedrock)',
  'Agentic RAG Systems – retrieval-augmented generation with context-aware AI agents',
  'End-to-end solutions for lead generation, customer support, data handling, and more',
];

const whyChooseMe = [
  'Proficient in full-stack web development, AI/ML solutions, and system architecture',
  'Experienced in building AI-driven applications and real-world, data-intensive workflows',
  'Skilled at designing scalable, modular, and secure systems for both startups and enterprises',
  'Deliver fast, custom-tailored solutions with transparent communication throughout',
  'Hands-on expertise with Python, TypeScript, ReactJS, Vue, FastAPI, PyTorch, TensorFlow, and Docker',
  'Committed to client satisfaction with continuous post-delivery support and enhancements',
];


const Services = () => {
  return (
    <Section id="services">
      <SectionTitle>What I Offer</SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {services.map((service, index) => (
          <div key={index} className="flex items-start space-x-4" data-aos="fade-up" data-aos-delay={index * 100}>
            <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
            <p className="text-gray-700 dark:text-text-secondary">{service}</p>
          </div>
        ))}
      </div>

      <div className="mt-20">
        <SectionTitle>Why Choose Me?</SectionTitle>
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {whyChooseMe.map((reason, index) => (
            <div key={index} className="flex items-start space-x-4" data-aos="fade-up" data-aos-delay={index * 100}>
              <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
              <p className="text-gray-700 dark:text-text-secondary">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Services; 