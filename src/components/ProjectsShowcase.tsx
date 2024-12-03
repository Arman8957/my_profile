import React from 'react'
import { motion } from 'framer-motion';
import ProjectsCard from './ProjectsCard';




const projects = [
    {
        title: "Portfolio website",
        description: "A personal portfolio showcasing my skills and projects.",
        imageUrl: "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",
        link: "#",

    },
    {
        title: "Portfolio website",
        description: "A personal portfolio showcasing my skills and projects.",
        imageUrl: "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",
        link: "#",

    },
    {
        title: "Portfolio website",
        description: "A personal portfolio showcasing my skills and projects.",
        imageUrl: "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",
        link: "#",

    },
    {
        title: "Portfolio website",
        description: "A personal portfolio showcasing my skills and projects.",
        imageUrl: "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",
        link: "#",

    },
]





const ProjectsShowcase: React.FC = () => {
    return (
        <motion.div
            className='container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'
            initial="hidden"
            animate=" visible"
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { staggerChildren: 0.3 },
                },
            }}
        >
            {projects.map((project, key) => (
                <motion.div className='key={key} variants ={{hidden:{ opacity: 0}, visible: {opacity :1}}}'>
                    <ProjectsCard {...project} />
                </motion.div>
            )

            )}

        </motion.div>
    )
}

export default ProjectsShowcase;