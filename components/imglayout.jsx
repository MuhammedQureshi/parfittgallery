import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function imgly() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Responsive images using Next JS Image Component
      </h1>

      <div className={styles.imagecontainer}>
        <Image
          src="../public/Capture.jpg"
          alt="Sunset"
          width={650}
          height={380}
          fill="responsive"
        />
        <Image
          src="/snow.jpg"
          alt="Sunset"
          width={650}
          height={380}
          fill="responsive"
        />
      </div>
    </div>
  );
}
