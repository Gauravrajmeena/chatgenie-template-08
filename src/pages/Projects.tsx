
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Code, Database, X, Github, Youtube, ExternalLink } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";
import { AppleDock } from "@/components/AppleDock";
import { motion, AnimatePresence } from "framer-motion";

interface Tag {
  name: string;
}

interface Project {
  title: string;
  description: string;
  image: string;
  tags: Tag[];
  details?: string;
  githubUrl?: string;
  youtubeUrl?: string;
  liveDemoUrl?: string;
}

const ProjectCard = ({
  project
}: {
  project: Project;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return <>
      <motion.div className="bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-700" whileHover={{
      scale: 1.03
    }} initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.5
    }} onClick={toggleOpen}>
        <div className="h-48 overflow-hidden">
          <motion.img src={project.image} alt={project.title} className="w-full h-full object-cover" whileHover={{
          scale: 1.05
        }} transition={{
          duration: 0.3
        }} />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-white mb-2">
            {project.title}
          </h3>
          <p className="text-gray-300 mb-4">
            {project.description}
          </p>
          <motion.div className="flex flex-wrap gap-2" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.2,
          staggerChildren: 0.1
        }}>
            {project.tags.map((tag, index) => <motion.span key={index} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm" initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            delay: index * 0.05
          }} whileHover={{
            backgroundColor: "#4B5563",
            scale: 1.05
          }}>
                {tag.name}
              </motion.span>)}
          </motion.div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && <motion.div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} onClick={toggleOpen}>
            <motion.div className="bg-gray-900 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-gray-700" initial={{
          scale: 0.9,
          opacity: 0
        }} animate={{
          scale: 1,
          opacity: 1
        }} exit={{
          scale: 0.9,
          opacity: 0
        }} transition={{
          type: "spring",
          damping: 20
        }} onClick={e => e.stopPropagation()}>
              <div className="relative">
                <motion.div className="h-64 md:h-80 overflow-hidden" whileInView={{
              y: [10, 0],
              opacity: [0, 1]
            }} transition={{
              duration: 0.5
            }}>
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </motion.div>
                <motion.button className="absolute top-4 right-4 p-2 bg-gray-800 rounded-full shadow-md hover:bg-gray-700 transition-colors border border-gray-700" onClick={toggleOpen} whileHover={{
              scale: 1.1,
              rotate: 90
            }} transition={{
              duration: 0.2
            }}>
                  <X className="h-5 w-5 text-gray-300" />
                </motion.button>
              </div>
              <motion.div className="p-6" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2
          }}>
                <motion.h2 className="text-3xl font-bold text-white mb-4" initial={{
              opacity: 0,
              x: -20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              delay: 0.3
            }}>
                  {project.title}
                </motion.h2>
                <motion.p className="text-gray-300 mb-6 text-lg" initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} transition={{
              delay: 0.4
            }}>
                  {project.description}
                </motion.p>
                <motion.div className="mb-6" initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} transition={{
              delay: 0.5
            }}>
                  <h3 className="text-xl font-semibold mb-3 text-white">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => <motion.span key={index} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm" initial={{
                  opacity: 0,
                  y: 10
                }} animate={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  delay: 0.5 + index * 0.1
                }} whileHover={{
                  backgroundColor: "#4B5563",
                  y: -2
                }}>
                        {tag.name}
                      </motion.span>)}
                  </div>
                </motion.div>
                <motion.div className="mb-4" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.6
            }}>
                  <h3 className="text-xl font-semibold mb-3 text-white">Project Details</h3>
                  <p className="text-gray-300">
                    {project.details || "This is a detailed description of the project. It includes the purpose, methodology, and outcomes of the project. The details are meant to give a comprehensive understanding of what the project is about, how it was developed, and what it achieves."}
                  </p>
                </motion.div>
                
                <motion.div className="mt-8 flex flex-wrap gap-4" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.7
            }}>
                  {project.githubUrl && (
                    <motion.a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="h-5 w-5" />
                      View Code
                    </motion.a>
                  )}
                  
                  {project.youtubeUrl && (
                    <motion.a 
                      href={project.youtubeUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-600 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Youtube className="h-5 w-5" />
                      Watch Demo
                    </motion.a>
                  )}
                  
                  {project.liveDemoUrl && (
                    <motion.a 
                      href={project.liveDemoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-600 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="h-5 w-5" />
                      Live Demo
                    </motion.a>
                  )}
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>}
      </AnimatePresence>
    </>;
};

const Projects = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const projects: Project[] = [{
    title: "Jarvis AI",
    description: "AI-Powered Chatbot with advanced natural language processing",
    image: "/lovable-uploads/4a18b1d0-cf87-4ff8-a6f9-8ec41ee6d14a.png",
    tags: [{
      name: "NLP"
    }, {
      name: "AI"
    }, {
      name: "Python"
    }],
    details: "The AI-Powered Chatbot project employs advanced natural language processing algorithms to create an interactive digital assistant. This intelligent system can handle customer inquiries, provide recommendations, and learn from interactions to improve over time. Designed for various applications, it helps businesses enhance customer service while reducing operational costs. Our chatbot exemplifies the power of AI in today's digital landscape.",
    githubUrl: "https://github.com/username/jarvis-ai",
    youtubeUrl: "https://youtube.com/watch?v=example1"
  }, {
    title: "Face Attendance System",
    description: "Python application for analyzing and visualizing large datasets",
    image: "/lovable-uploads/ef26aad7-5bc3-4fb4-a44e-737ca9c4b935.png",
    tags: [{
      name: "Python"
    }, {
      name: "Firebase"
    }, {
      name: "Realtime Detection"
    }],
    details: "The Face Attendance System is built with Python using OpenCV and Firebase for backend storage. It implements real-time face detection and recognition algorithms to accurately identify individuals and mark their attendance. The system includes a user-friendly dashboard for administrators to view attendance reports, manage user profiles, and export data for analysis.",
    githubUrl: "https://github.com/Rca-Team/face-attendce",
    youtubeUrl: "https://www.youtube.com/watch?v=AsIkI6Cl5es",
    liveDemoUrl: "https://presence-electronic.vercel.app/"
  }, {
    title: "Gaurav Coder",
    description: "AI-powered development platform for coding assistance and collaboration",
    image: "/lovable-uploads/2f184cc4-d1a2-4025-ab9e-210599fd5b6c.png",
    tags: [{
      name: "AI"
    }, {
      name: "Hugging Face"
    }, {
      name: "Software Engineering"
    }],
    details: "The \"Gemini Coder\" platform on Hugging Face, created by Gauravog, is an exceptional resource aimed at supporting developers with their coding projects. It features sophisticated AI models specifically designed for programming tasks such as debugging and automation. Additionally, the platform may offer tools for collaborative coding, code enhancement, and educational materials to assist learners. Emphasizing technological advancement, it acts as a link between artificial intelligence and software engineering, optimizing processes and boosting efficiency. For further information, visit Gemini Coder.",
    githubUrl: "https://github.com/username/gaurav-coder",
    youtubeUrl: "https://youtube.com/watch?v=example3",
    liveDemoUrl: "https://huggingface.co/spaces/Gauravorg/gemini-coder"
  }];

  const containerVariants = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return <div className="min-h-screen bg-gray-900 text-white">
      <AppleDock />
      <div className="container mx-auto px-4 py-12">
        <motion.div className="flex justify-between items-center mb-12" initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }}>
          <motion.h1 whileInView={{
          scale: [0.9, 1]
        }} transition={{
          duration: 0.5
        }} className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 text-left font-bold text-4xl my-0 px-[4px] py-0 mx-[240px]">My Projects</motion.h1>
          <Link to="/" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
            <motion.span whileHover={{
            x: -5
          }} transition={{
            type: "spring",
            stiffness: 400
          }}>
              Back to Home
            </motion.span>
          </Link>
        </motion.div>
        
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" animate={mounted ? "show" : "hidden"}>
          {projects.map((project, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 50
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: index * 0.2
        }}>
              <ProjectCard project={project} />
            </motion.div>)}
        </motion.div>
      </div>
    </div>;
};

export default Projects;
