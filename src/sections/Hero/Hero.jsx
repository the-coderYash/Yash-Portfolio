import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import themeIcon from '../../assets/sun.svg';
import twitterIcon from '../../assets/twitter-light.svg';
import githubIcon from '../../assets/github-light.svg';
import linkedinIcon from '../../assets/linkedin-light.svg';
import CV from '../../assets/cv.pdf';

function Hero() {
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
          With a passion for developing modern React web apps for commercial
          businesses.
        </p>
        <a href={CV}>
          <button className='hover' download>
            Resume
          </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
