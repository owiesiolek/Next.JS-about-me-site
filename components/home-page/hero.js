import Image from "next/image";

import classes from "./hero.module.css";

import img from '../../public/images/site/oskar.jpg';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/oskar.jpg'
          alt="Image showing Oskar"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Oskar</h1>
      <p>That's my project written using Next.js and React!</p>
    </section>
  );
}

export default Hero;
