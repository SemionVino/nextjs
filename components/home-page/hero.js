import Image from 'next/image';
import classes from './hero.module.css';
export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/sami.jpg" width={300} height={300} />
      </div>
      <h1>Hi i'm max</h1>
      <p></p>
      </section>
  
  );
}