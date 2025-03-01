
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Code, Database, Terminal } from "lucide-react";

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const GradientCard = ({ title, description, icon }: CardProps) => {
  return (
    <BackgroundGradient className="rounded-[22px] p-4 sm:p-6 bg-black/80 dark:bg-zinc-900">
      <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center mb-4">
        {icon}
      </div>
      <p className="text-base sm:text-xl text-white mb-2 font-semibold">
        {title}
      </p>
      <p className="text-sm text-neutral-400">
        {description}
      </p>
    </BackgroundGradient>
  );
};

export function GradientCards() {
  const cards = [
    {
      title: "Programming Skills",
      description: "Proficient in Python, Java, and C++ with experience in both academic and real-world projects.",
      icon: <Code className="w-5 h-5 text-white" />
    },
    {
      title: "Database Management",
      description: "Skilled in SQL, MongoDB, and database design principles for efficient data storage and retrieval.",
      icon: <Database className="w-5 h-5 text-white" />
    },
    {
      title: "Command Line Mastery",
      description: "Experienced with Linux/Unix environments, shell scripting, and automation tools.",
      icon: <Terminal className="w-5 h-5 text-white" />
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
      {cards.map((card, index) => (
        <GradientCard 
          key={index}
          title={card.title}
          description={card.description}
          icon={card.icon}
        />
      ))}
    </div>
  );
}
