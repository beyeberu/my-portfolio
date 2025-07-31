import '../styles/footer.css';
import { FaGithub, FaLinkedin, FaTelegram, FaEnvelope } from 'react-icons/fa';

const socialLinks = [
  { icon: 'github', url: 'https://github.com/beyeberu', label: 'GitHub' },
  { icon: 'linkedin', url: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' }, // Replace with your actual LinkedIn
  { icon: 'telegram', url: 'https://t.me/mezinachew', label: 'Telegram' },
  { icon: 'email', url: 'mailto:beyeberueyayu@gmail.com', label: 'Email' }
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container mx-auto px-4 footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3><b><i>beyeberu eyayu</i></b></h3>
            <p>Full Stack Web Developer</p>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-social">
            <h4>Connect With Me</h4>
            <div className="social-icons">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={link.label}
                  title={link.label}
                >
                  {link.icon === 'github' && <FaGithub className="icon" aria-label="GitHub" />}
                  {link.icon === 'linkedin' && <FaLinkedin className="icon" aria-label="LinkedIn" />}
                  {link.icon === 'telegram' && <FaTelegram className="icon" aria-label="Telegram" />}
                  {link.icon === 'email' && <FaEnvelope className="icon" aria-label="Email" />}
                  <span className="sr-only">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="footer-copyright">
          <p>© {new Date().getFullYear()} beyeberu eyayu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;