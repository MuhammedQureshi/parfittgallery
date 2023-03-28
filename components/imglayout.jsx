import Link from 'next/link';
import styles from "../styles/Home.module.css";

export default function Imgly() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Artwork
      </h1>

      <div className={styles.imagecontainer}>
        <img className="rounded-xl"
          src="/ci.JPG"
          alt="/"
          width={850}
          height={780}
          
        />
        <img className=" rounded-xl"
          src="/Capture.jpg"
          alt="/"
          width={650}
          height={580}
        />

        <img className=" rounded-xl"
          src="/ci2.jpeg"
          alt="/"
          width={350}
          height={180}
         
        />


      </div>

    </div>
  );
}
