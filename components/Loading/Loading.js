import Head from "next/head";
import { useLoading, BallTriangle } from "@agney/react-loading";
import styles from "../../styles/Loading.module.css";
export default function Loading() {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <BallTriangle width="100" color="white" />,
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Cargando...</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <section {...containerProps}>{indicatorEl}</section>
      </div>
    </div>
  );
}
