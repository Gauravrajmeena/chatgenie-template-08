
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';

const Projects = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  const navigationLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" }
  ];
  
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with cart, checkout, and payment integration.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#"
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing projects and skills with modern design.",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      link: "#"
    },
    {
      title: "Task Management App",
      description: "A productivity app for managing tasks, projects, and deadlines with team collaboration.",
      tags: ["React", "Firebase", "Material UI"],
      link: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather information with forecasts, maps, and location-based updates.",
      tags: ["React", "OpenWeather API", "Chart.js"],
      link: "#"
    },
    {
      title: "Social Media Analytics",
      description: "Dashboard for tracking and analyzing social media performance across platforms.",
      tags: ["React", "D3.js", "Node.js", "Express"],
      link: "#"
    },
    {
      title: "Recipe Finder",
      description: "Search and discover recipes based on ingredients, dietary restrictions, and preferences.",
      tags: ["React", "Spoonacular API", "Styled Components"],
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-[#030303] px-6 py-12">
      <div className="container mx-auto">
        <div className="mb-8 flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
          >
            My Projects
          </motion.h1>
          
          <div className="flex gap-4">
            {navigationLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="px-4 py-2 text-white hover:text-blue-400 transition-colors rounded-md"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground max-w-2xl mb-12"
        >
          Explore my portfolio of projects spanning web development, mobile applications, and interactive experiences.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="h-full"
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <Card className={`dark-card h-full transition-all duration-300 ${hoveredCard === index ? 'scale-in' : ''}`}>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 mb-4">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <a 
                    href={project.link} 
                    className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
                  >
                    View Project →
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
