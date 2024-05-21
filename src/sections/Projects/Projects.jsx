import styles from './ProjectsStyles.module.css';
import GCEWEB from '../../assets/gceweb.png';

function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
        <a
          href='https://github.com/the-coderYash/GCE-Website-Project'
          target='_blank'
        >
          <img className='hover' src={GCEWEB} alt='GCE Website' />
          <h3>Gaya College Of ENGG.</h3>
          <p>Website for college</p>
        </a>
      </div>
    </section>
  );
}

export default Projects;
