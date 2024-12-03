import React from 'react'
import {motion} from "framer-motion";

interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
  }



const ProjectsCard: React.FC<ProjectCardProps> = ({title, description, imageUrl, link, }) => {
  return (
    <motion.div
    className='bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300' 
    initial={{opacity:0, y: 30}}
    animate={{opacity:1, y:0}}
    transition={{duration:0.5}}
    >
        <a href={link} target='_blank' rel='noopener noreferrer'>
            <div>
                <img
                src={imageUrl}
                alt={title}
                className='h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110'
                />
                <div className='absolute inset-0bg-gradient-to-t from-black via-transparent opacity-50 group-hover:opacity-70 transition-opacity'></div>
                <div className='text-lg font-bold text-white'>
                    <h2 className='text-lg font-bold tex-white'>{title}</h2>
                    <p className='text-sm text-gray-600 dark:text-gray-400 mt-2'>{description}</p>
                    <a className='inline-block mt-4 text-indigo-500 font-semibold hover:text-indigo-700 transition'>View Projecet → </a>
                </div>
            </div>
        </a>

    </motion.div>
  )
}

export default ProjectsCard;