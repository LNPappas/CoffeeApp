import Head from "next/head";
import Image from "next/image"
import Banner from "../components/banner";
import styles from "../styles/Home.module.css"

export default function Home() {
  const handleOnBannerBtnClick = () => {
    console.log("handleOnBannerBtnClick");
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Hub</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/CoffeeApp/static/coffeeCroissant.png" />
      </Head>

      <main className={styles.main}>
        <Banner
          buttonText="View Nearby Stores"
          handleOnClick={handleOnBannerBtnClick}
        />
        <div className={styles.heroImage}>
          <Image src="/CoffeeApp/static/coffeeCroissant.png" alt="Coffee Croissant Image" width={700} height={400} />
        </div>
      </main>
    </div>
  );
}
