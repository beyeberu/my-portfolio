import { motion } from 'framer-motion';
import '../styles/skills.css';

const Skills = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'Express', level: 80 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'Python', level: 50 },
    { name: 'Django', level: 50 },
    { name: 'PHP', level: 50 },
    { name: 'Golang', level: 0, future: true },
    { name: 'TypeScript', level: 0, future: true },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">My Skills</h2>
        <div className="max-w-3xl mx-auto mt-12">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={`skill-item${skill.future ? ' skill-future' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="skill-info">
                <span className="skill-name">
                  {skill.name}
                  {skill.future && (
                    <span className="future-tag">Future Learning</span>
                  )}
                </span>
                <span className="skill-percent">
                  {skill.future ? 'Planned' : `${skill.level}%`}
                </span>
              </div>
              <div className="progress-container">
                <div
                  className={`progress-fill${skill.future ? ' progress-future' : ''}`}
                  style={{
                    width: skill.future ? '20%' : `${skill.level}%`,
                    background: skill.future
                      ? 'linear-gradient(90deg, #f59e42 0%, #fbbf24 100%)'
                      : 'linear-gradient(90deg, #4f46e5 0%, #10b981 100%)'
                  }}
                ></div>
              </div>
              <div className="percentage-range">
                {[0, 25, 50, 75, 100].map((mark) => (
                  <span key={mark} className="percentage-mark">{mark}%</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;