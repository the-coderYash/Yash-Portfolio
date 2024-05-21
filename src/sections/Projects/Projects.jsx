/* eslint-disable no-unused-vars */
import styles from './ProjectsStyles.module.css';
import GCEWEB from '../../assets/gceweb.png';
import clock from '../../assets/clock.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={GCEWEB}
          link='https://github.com/the-coderYash/GCE-Website-Project'
          h3='Gaya College Of ENGG.'
          p='Website for college'
        />
        <ProjectCard
          src={clock}
          link='https://github.com/the-coderYash/Analog-Clock'
          h3='Analog Clock'
          p='A Beautiful Analog Clock'
        />
      </div>
    </section>
  );
}

export default Projects;
