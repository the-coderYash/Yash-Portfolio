/* eslint-disable no-unused-vars */
import styles from './ProjectsStyles.module.css';
import GCEWEB from '../../assets/gceweb.png';
import clock from '../../assets/clock.png';
import calculator from '../../assets/calculator.png';
import loginPage from '../../assets/loginPage.png';
import jokesWebsite from '../../assets/jokes.png';
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
        <ProjectCard
          src={calculator}
          link=''
          h3='Neumorphic Calculator '
          p='Calculator with Neumorphism Design '
        />
        <ProjectCard
          src={loginPage}
          link=''
          h3='Login Page'
          p='Login Page with animation'
        />
        <ProjectCard
          src={jokesWebsite}
          link=''
          h3='Online Jokes Generator'
          p='Website which generate Jokes'
        />
      </div>
    </section>
  );
}

export default Projects;
