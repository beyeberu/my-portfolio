import { motion } from 'framer-motion';
import '../styles/about.css';

const About = () => {
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };
  
  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="about" className="about-section py-20 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-900">
      <div className="container mx-auto px-4 max-w-6xl about-content">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            variants={textVariants}
            className="about-info order-2 md:order-1 space-y-6"
          >
            <h2 className="about-title text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              About Me
            </h2>
            <p className="about-text playwrite-au-nsw-regular text-lg md:text-xl dark:text-gray-300">
              Hello! I'm <span className="font-bold text-blue-600 dark:text-purple-400">Beyeberu Eyayu</span>, a passionate Full Stack Developer. I specialize in modern JavaScript frameworks and love building solutions that are both beautiful and functional.
            </p>
            <p className="about-text playwrite-au-nsw-regular text-lg md:text-xl dark:text-gray-300">
              I graduated this year(2025) from Gondar University with a degree in Computer Science. My approach combines technical expertise with creative problem-solving. When I'm not coding, you can find me contributing to open-source projects, exploring new technologies, or mentoring aspiring developers.
            </p>
            <div className="about-buttons flex flex-wrap gap-4 pt-4">
              <a href="#skills" className="secondary-btn hover:bg-blue-600 hover:text-white transition-colors">
                My Skills →
              </a>
              <a href="#projects" className="primary-btn bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                See My Work
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={imageVariants}
            className="profile-container order-1 md:order-2 relative group"
          >
            <div className="profile-image-wrapper relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white dark:border-gray-800">
              <div className="profile-overlay absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <img 
                src="/profile1.png" 
                alt="Beyeberu Eyayu - Full Stack Developer" 
                className="profile-image w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <motion.div 
              className="emoji-badge absolute -bottom-4 -right-4 flex items-center justify-center text-4xl"
              whileHover={{ scale: 1.2, rotate: 20 }}
            >
              👨‍💻
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;