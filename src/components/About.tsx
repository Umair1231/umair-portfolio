import { User, Mail, MapPin, Calendar } from 'lucide-react';
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-primary">
      <div className="section-container">
        <div className="text-center">
          <h2 className="section-title" data-aos="fade-up">About Me</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-16 mt-16 items-center">
          <div className="md:col-span-3 space-y-6" data-aos="fade-right" data-aos-delay="100">
            <p className="text-xl text-gray-700 dark:text-text-secondary leading-relaxed">
              I’m a results-oriented Software and AI Engineer passionate about building intelligent, production-ready systems. Currently pursuing my M.Sc. in Artificial Intelligence at Friedrich-Alexander-Universität Erlangen-Nürnberg, I focus on bridging the gap between machine learning research and scalable software solutions.            </p>
            
            <p className="text-lg text-gray-600 dark:text-text-secondary leading-relaxed">
              At Folio3, I led both frontend and AI initiatives across multiple international projects. I engineered an AI-powered booking system using AWS Bedrock and LangGraph that streamlined hotel reservations and cut response latency by 75%. For Cargill, I developed a Computer Vision pipeline estimating cattle body condition scores with 92% accuracy and delivered a mobile SQL chatbot for natural-language database interaction. I also modernized frontend systems, revamping authentication flows and refactoring React and Vue applications for smoother experiences and 50% faster load times.            </p>
            
            <p className="text-lg text-gray-600 dark:text-text-secondary leading-relaxed">
              My technical toolkit includes Python, TypeScript, ReactJS, FastAPI, AWS, and Docker, along with experience in PyTorch and TensorFlow for cloud-native AI deployment. I thrive on turning advanced AI concepts into reliable, usable products and enjoy collaborating on teams developing next-generation AI-enabled software and intelligent systems at scale.            </p>
            
            <div className="pt-6">
              <a href="#contact" className="btn-secondary text-lg">
                Get In Touch
              </a>
            </div>
          </div>
          
          <div 
            className="md:col-span-2 bg-gray-50 dark:bg-primary-light rounded-xl p-8 shadow-lg border border-gray-100 dark:border-primary"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-text-primary text-center">
              Personal Details
            </h3>
            
            <div className="space-y-6">
              <InfoItem icon={<User />} label="Full Name" value="Muhammad Umair Amir" />
              <InfoItem icon={<Mail />} label="Email" value="umairamir9001@gmail.com" />
              <InfoItem icon={<MapPin />} label="Location" value="Erlangen, Germany" />
              <InfoItem icon={<Calendar />} label="Availability" value="Open to Work" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface InfoItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const InfoItem = ({ icon, label, value }: InfoItemProps) => (
  <div className="flex items-center">
    <div className="w-12 h-12 rounded-full bg-secondary/10 dark:bg-secondary/20 flex-shrink-0 flex items-center justify-center">
      <div className="text-secondary">{icon}</div>
    </div>
    <div className="ml-4">
      <p className="text-sm text-gray-500 dark:text-text-secondary">{label}</p>
      <p className="font-semibold text-gray-900 dark:text-text-primary">{value}</p>
    </div>
  </div>
);

export default About;