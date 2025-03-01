
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Code, Database, X } from "lucide-react";
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
}

const ProjectCard = ({ project }: { project: Project }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <motion.div 
        className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
        whileHover={{ scale: 1.02 }}
        onClick={toggleOpen}
      >
        <div className="h-48 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {project.title}
          </h3>
          <p className="text-gray-600 mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleOpen}
          >
            <motion.div
              className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <div className="h-64 md:h-80 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <button 
                  className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
                  onClick={toggleOpen}
                >
                  <X className="h-5 w-5 text-gray-700" />
                </button>
              </div>
              <div className="p-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h2>
                <p className="text-gray-600 mb-6 text-lg">
                  {project.description}
                </p>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-3">Project Details</h3>
                  <p className="text-gray-700">
                    {project.details || "This is a detailed description of the project. It includes the purpose, methodology, and outcomes of the project. The details are meant to give a comprehensive understanding of what the project is about, how it was developed, and what it achieves."}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Smart Home Automation",
      description: "Arduino-based home automation system with mobile app control",
      image: "/lovable-uploads/963ae073-5a03-48ed-9e1d-bb0f9f86d4ec.png",
      tags: [
        { name: "Arduino" },
        { name: "IoT" },
        { name: "Mobile App" }
      ],
      details: "This project utilizes Arduino microcontrollers to create a comprehensive home automation system. The system includes sensors for temperature, humidity, and motion detection. Users can control lights, appliances, and climate systems through a custom-built mobile application. The system uses Wi-Fi connectivity to allow remote access and control from anywhere."
    },
    {
      title: "Face Attendance System",
      description: "Python application for analyzing and visualizing large datasets",
      image: "/lovable-uploads/ef26aad7-5bc3-4fb4-a44e-737ca9c4b935.png",
      tags: [
        { name: "Python" },
        { name: "Firebase" },
        { name: "Realtime Detection" }
      ],
      details: "The Face Attendance System is built with Python using OpenCV and Firebase for backend storage. It implements real-time face detection and recognition algorithms to accurately identify individuals and mark their attendance. The system includes a user-friendly dashboard for administrators to view attendance reports, manage user profiles, and export data for analysis."
    },
    {
      title: "Library Management System",
      description: "Java-based system for managing library operations",
      image: "/lovable-uploads/963ae073-5a03-48ed-9e1d-bb0f9f86d4ec.png",
      tags: [
        { name: "Java" },
        { name: "Desktop App" },
        { name: "Database" }
      ],
      details: "This Java application streamlines library operations with features for book cataloging, member management, checkout/return processes, and fine calculations. It includes a search function, reporting tools, and an intuitive interface designed for library staff. The system uses a relational database to maintain data integrity and provide efficient access to library resources."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <AppleDock />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">My Projects</h1>
          <Link 
            to="/" 
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Back to Home
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
