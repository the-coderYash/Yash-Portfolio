import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import themeIcon from "../../assets/sun.svg";

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
        <span></span>
      </div>
    </section>
  );
}

export default Hero;
