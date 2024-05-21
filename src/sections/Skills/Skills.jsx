/* eslint-disable no-unused-vars */
import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';

function Skills() {
  return (
    <section id='skills' className={styles.container}>
      <h1>Skills</h1>
      <div className={styles.skillList}>
        <SkillList />
      </div>
    </section>
  );
}

export default Skills;
