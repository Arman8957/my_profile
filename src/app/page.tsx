import AnimatedComponent, { FramTest } from '@/components/AnimatedCompnents';
import ProjectsShowcase from '@/components/ProjectsShowcase';
import SkillShowcase from '@/components/Showcase';
import Header from '@/sections/Header';
import Hero from '@/sections/Hero';



export default function Home() {
  return (
    <>

      <Header />
      <Hero />
      {/* <ProjectsShowcase /> */}
     {/* <SkillShowcase /> */}
     <AnimatedComponent />
      

    </>


  )
}