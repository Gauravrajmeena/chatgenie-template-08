
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { Box, Code, Database } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";
import { AppleDock } from "@/components/AppleDock";
import { SplineSceneBasic } from "@/components/SplineSceneBasic";
import { GradientCards } from "@/components/GradientCards";
import { ThreeDCards } from "@/components/ThreeDCards";
import { Link } from "react-router-dom";

const ProjectPreview = ({
  title,
  description,
  icon: Icon,
  area
}: {
  title: string;
  description: string;
  icon: React.ElementType;
  area: string;
}) => {
  return <li className={cn("min-h-[14rem] list-none", area)}>
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={3} />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
              <Icon className="h-4 w-4" />
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
                {title}
              </h3>
              <h2 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>;
};
const Index = () => {
  const featuredProjects = [{
    title: "Python Projects",
    description: "Data analysis, ML, and automation",
    icon: Code,
    area: "md:[grid-area:1/1/2/7]"
  }, {
    title: "Arduino Projects",
    description: "IoT and hardware solutions",
    icon: Box,
    area: "md:[grid-area:1/7/2/13]"
  }, {
    title: "Java Projects",
    description: "Enterprise and Android apps",
    icon: Database,
    area: "md:[grid-area:2/1/3/13]"
  }];
  
  const navigationLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" }
  ];
  
  return <div>
      <AppleDock />
      <div className="absolute top-4 right-4 z-50 flex gap-4">
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
      <HeroGeometric badge="Gaurav's Projects" title1="My Digital" title2="Portfolio" />
      <div className="bg-[#030303] px-8">
        <div className="container mx-auto py-16">
          <SplineSceneBasic />
          
          {/* 3D Cards */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-white mb-8text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 md:text-6xl">Top Project's</h2>
            <ThreeDCards />
          </div>
          
          {/* Gradient Cards */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-white mb-8">Core Competencies</h2>
            <GradientCards />
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-8 mt-16">Featured Projects</h2>
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-12 md:grid-rows-2">
            {featuredProjects.map((project, index) => <ProjectPreview key={index} {...project} />)}
          </ul>
        </div>
      </div>
    </div>;
};
export default Index;
