import React from 'react';
import '../styles/hero.css'; // or wherever you put the CSS

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Typography, Button, Box } from '@mui/material';

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const gradientText = {
    background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    display: 'inline-block'
  };

  return (
    <Box 
  ref={ref}
  component={motion.section}
  className="hero-gradient-bg"
  initial="hidden"
  animate={inView ? "visible" : "hidden"}
  variants={containerVariants}
  sx={{
    minHeight: '50vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    px: 2,
    py: 10,
  }}
>

      <Box
        component={motion.div}
        variants={itemVariants}
        sx={{
          maxWidth: '900px',
          mx: 'auto'
        }}
      >
        <Typography 
          variant="h2" 
          component={motion.h2}
          variants={itemVariants}
          gutterBottom
          sx={{
            fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
            fontWeight: 700,
            lineHeight: 1.2,
            mb: 3
          }}
        >
          Hi, I'm <Box component="span" sx={gradientText}><i>BEYEBERU EYAYU</i></Box>
        </Typography>
        
        <Typography 
          variant="h4" 
          component={motion.p}
          variants={itemVariants}
          color="textSecondary" 
          paragraph
          sx={{
            fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
            mb: 4,
            maxWidth: '700px',
            mx: 'auto'
          }}
        >
          Full Stack Developer | Problem Solver | Tech Enthusiast
        </Typography>
      </Box>

      <Box
        component={motion.div}
        variants={itemVariants}
      >
        <Button 
          variant="contained" 
          size="large"
          component={motion.button}
          whileHover={{ 
            scale: 1.05,
            boxShadow: '0 10px 20px rgba(59, 130, 246, 0.3)'
          }}
          whileTap={{ scale: 0.95 }}
          sx={{
            background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)',
            color: 'white',
            fontSize: '1.1rem',
            px: 5,
            py: 1.5,
            borderRadius: '12px',
            textTransform: 'none',
            position: 'relative',
            overflow: 'hidden',
            '&::after': {
              content: '""',
              position: 'absolute',
              top: '-50%',
              left: '-50%',
              width: '200%',
              height: '200%',
              background: 'linear-gradient(to bottom right, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 60%)',
              transform: 'translate(-30%, -30%) rotate(30deg)',
              transition: 'all 0.5s ease'
            },
            '&:hover::after': {
              transform: 'translate(30%, 30%) rotate(30deg)'
            }
          }}
        ><a href="#projects" style={{ color: 'inherit', textDecoration: 'none' }}>
          View My Work</a>
        </Button>
      </Box>

      {/* Animated background elements */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1, delay: 0.5 }}
        sx={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
          filter: 'blur(40px)',
          zIndex: -1
        }}
      />
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1, delay: 0.7 }}
        sx={{
          position: 'absolute',
          bottom: '10%',
          left: '10%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)',
          filter: 'blur(50px)',
          zIndex: -1
        }}
      />
    </Box>
  );
};

export default Hero;