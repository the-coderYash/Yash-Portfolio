/* eslint-disable no-unused-vars */
import styles from './ProjectsStyles.module.css';
import GCEWEB from '../../assets/gceweb.png';
import clock from '../../assets/clock.png';
import calculator from '../../assets/calculator.png';
import loginPage from '../../assets/loginPage.png';
import jokesWebsite from '../../assets/jokes.png';
// import keyCodes from '../../assets/keyCodes.png';
import soundBoard from '../../assets/soundBoard.png';
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
          link='https://github.com/the-coderYash/CodSoft-Calculator'
          h3='Neumorphic Calculator '
          p='Calculator with Neumorphism Design '
        />
        <ProjectCard
          src={loginPage}
          link='https://github.com/the-coderYash/Project-8---Login-Page'
          h3='Login Page'
          p='Login Page with animation'
        />
        <ProjectCard
          src={jokesWebsite}
          link='https://github.com/the-coderYash/Project-10---Jokes-Website'
          h3='Online Jokes Generator'
          p='Website which generate Jokes'
        />
        <ProjectCard
          src={soundBoard}
          link='https://github.com/the-coderYash/Project-9---Sound-Board'
          h3='Sound Board'
          p='Can play different Sound'
        />
        {/* <ProjectCard
          src={keyCodes}
          link='https://github.com/the-coderYash/Project-11---Key-Codes'
          h3='Key Codes'
          p='Know your Key Codes'
        /> */}
      </div>
    </section>
  );
}

export default Projects;
