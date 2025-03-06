
import React from "react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { Code, Database, Terminal } from "lucide-react";

export function ThreeDCards() {
  const cards = [{
    title: "Face Attendence System",
    description: "This is our face attendence it will recognize your face for your attendence and save data to firebase for more view this video",
    icon: <Code className="w-6 h-6 text-white" />,
    color: "bg-gradient-to-br from-purple-500 to-blue-500",
    image: "/lovable-uploads/ef26aad7-5bc3-4fb4-a44e-737ca9c4b935.png"
  }, {
    title: "Jarvis AI",
    description: "The AI-Powered Chatbot project employs advanced natural language processing algorithms to create an interactive digital assistant",
    icon: <Database className="w-6 h-6 text-white" />,
    color: "bg-gradient-to-br from-blue-500 to-teal-500",
    image: "/lovable-uploads/4a18b1d0-cf87-4ff8-a6f9-8ec41ee6d14a.png"
  }, {
    title: "Gaurav Coder",
    description: "AI-powered development platform on Hugging Face for coding assistance and collaboration",
    icon: <Terminal className="w-6 h-6 text-white" />,
    color: "bg-gradient-to-br from-teal-500 to-emerald-500",
    image: "/lovable-uploads/2f184cc4-d1a2-4025-ab9e-210599fd5b6c.png"
  }];
  
  return (
    <div className="flex flex-wrap justify-center gap-8 py-8 px-4">
      {cards.map((card, index) => (
        <CardContainer key={index} className="inter-var">
          <CardBody className="bg-black relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[20rem] md:w-[24rem] lg:w-[30rem] h-auto rounded-xl p-4 md:p-6 border">
            <CardItem translateZ="50" className="text-xl font-bold text-white">
              {card.title}
            </CardItem>
            <CardItem as="p" translateZ="60" className="text-white text-sm max-w-sm mt-2">
              {card.description}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <div className={`w-full h-48 sm:h-40 rounded-xl ${card.color} flex items-center justify-center text-white overflow-hidden`}>
                {card.image ? (
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-full object-cover rounded-xl"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-black/70 flex items-center justify-center">
                    {card.icon}
                  </div>
                )}
              </div>
            </CardItem>
            <CardItem translateZ="50" className="text-xs font-normal text-neutral-400 mt-4">
              Hover and move your cursor around this card
            </CardItem>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
}
