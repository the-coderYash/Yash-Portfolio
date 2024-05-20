/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme(); //

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id='hero' className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt='Animated Profile Picture of Yash Raj'
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt='Color mode icon'
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Yash
          <br />
          Raj
        </h1>
        <h2>Full Stack Developer</h2>
        <span>
          <a href='https://twitter.com' target='_blank'>
            <img src={twitterIcon} alt='Twitter Icon' />
          </a>
          <a href='https://github.com/the-coderYash' target='_blank'>
            <img src={githubIcon} alt='GitHub Icon' />
          </a>
          <a
            href='https://linkedin.com/in/yash-raj-mishra-1976912a7'
            target='_blank'
          >
            <img src={linkedinIcon} alt='Linkedin Icon' />
          </a>
        </span>
        <p>
          As an ambitious and driven student with a keen interest in coding and
          technology.Currently pursuing my B.Tech at Gaya College Of
          Engineering, GAYA.
        </p>
        <a href={CV} download>
          <button className='hover'>Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
