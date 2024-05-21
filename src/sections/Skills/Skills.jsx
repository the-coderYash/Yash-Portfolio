/* eslint-disable no-unused-vars */
import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';

function Skills() {
  return (
    <section id='skills' className={styles.container}>
      <h1 className='sectionTitle'>Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill='HTML' />
        <SkillList src={checkMarkIcon} skill='CSS' />
        <SkillList src={checkMarkIcon} skill='JavaScript' />
        <SkillList src={checkMarkIcon} skill='TypeScript' />
        <SkillList src={checkMarkIcon} skill='React' />
      </div>
      <hr />

      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill='Angular' />
        <SkillList src={checkMarkIcon} skill='Tailwind CSS' />
        <SkillList src={checkMarkIcon} skill='Python' />
        <SkillList src={checkMarkIcon} skill='Java' />
        <SkillList src={checkMarkIcon} skill='PHP' />
      </div>
      <hr />

      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill='Redux' />
        <SkillList src={checkMarkIcon} skill='Jest' />
        <SkillList src={checkMarkIcon} skill='WebPack' />
        <SkillList src={checkMarkIcon} skill='Git' />
        <SkillList src={checkMarkIcon} skill='Bootstrap' />
      </div>
      <hr />
    </section>
  );
}

export default Skills;
