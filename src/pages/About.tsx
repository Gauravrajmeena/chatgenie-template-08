
import { useState } from "react";
import { motion } from "framer-motion";
import { Info, Code, Briefcase, Heart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const About = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const aboutCards = [
    {
      icon: <Info className="h-8 w-8 text-blue-400" />,
      title: "About Me",
      description: 
        "I'm a passionate developer and designer with a focus on creating beautiful and functional web applications. My journey in tech started with a curiosity about how things work and evolved into a career building digital experiences."
    },
    {
      icon: <Code className="h-8 w-8 text-green-400" />,
      title: "My Skills",
      description: 
        "Proficient in modern web technologies including React, TypeScript, and Tailwind CSS. I focus on creating responsive, accessible, and performant applications with clean code and intuitive user experiences."
    },
    {
      icon: <Briefcase className="h-8 w-8 text-purple-400" />,
      title: "Experience",
      description: 
        "With several years of experience in software development, I've worked on projects ranging from small business websites to enterprise-level applications, always bringing attention to detail and a user-centered approach."
    },
    {
      icon: <Heart className="h-8 w-8 text-red-400" />,
      title: "Interests",
      description: 
        "Beyond coding, I enjoy exploring new technologies, contributing to open-source projects, and sharing knowledge with the community. I'm passionate about continuous learning and staying on the cutting edge."
    },
  ];

  return (
    <div className="bg-[#030303] min-h-screen px-8">
      <div className="container mx-auto py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 md:text-6xl mb-4">
            About Me
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn more about my background, skills, and the passion that drives my work in web development and design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aboutCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <Card className={cn(
                "dark-card h-full transition-all duration-300",
                hoveredCard === index ? "scale-in" : ""
              )}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    {card.icon}
                    <CardTitle>{card.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-300">
                    {card.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Let's Connect</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <a 
            href="mailto:contact@example.com" 
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
