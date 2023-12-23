"use client";

import React from 'react'
import Image from 'next/image'
import { useProjectCardStyles } from './ProjectCard.styles'
import { ProjectCardProps } from './ProjectCard.interface'

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, techStacks, description, github, website }) => {
  const styles = useProjectCardStyles();

  return (
    <div className={styles.main}>
      <Image 
        src={image} 
        alt={'project image'} 
        style={{ width: "50%", borderRadius: "100px", marginBottom: '10px' }} 
      />
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.techStackGroup}>
        {
          techStacks.map((item: string, key) =>  {
            return (
              <h2 key={key} className={styles.techStackItem}>{item}</h2>
            )
          })
        }
      </div>
      <p className={styles.description}>{description}</p>
      <div className={styles.buttonGroup}>
        <button className={styles.buttonPrimary} onClick={() => window.open(github)}>Github →</button>
        <button className={styles.buttonSecondary} onClick={() => window.open(website)}>Go to →</button>
      </div>
    </div>
  )
}

export default ProjectCard

