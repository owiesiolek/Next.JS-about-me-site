import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/oskar.png'
          alt="Image - Oskar"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Oskar</h1>
      <p>I appreciate your interest in checking my website. Please feel free to check out my projects!</p>
    </section>
  );
}

export default Hero;
