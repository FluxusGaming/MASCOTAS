import Head from "next/head";
import styles from "../styles/Home.module.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { UseLogin } from "../services/Auth";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const { mutateAsync: login } = UseLogin();
  const onSubmit = async (values) => {
    try {
      await console.log(values);
      await login(values);
      await router.push("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Mascotas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <div className={styles.login__container}>
          <div className={styles.form__container}>
            <form
              className={styles.form}
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit(onSubmit)}
            >
              <h1 className={styles.form__title}>MascotyAPP</h1>
              <div className={styles.form__inputs}>
                <label>Usuario</label>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  color="secondary"
                  id="standard-error-helper-text"
                  error={false}
                  InputProps={{
                    inputRef: register({ required: true }),
                    name: "username",
                  }}
                />
                <label>Contraseña</label>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  color="secondary"
                  type="password"
                  error={false}
                  InputProps={{
                    inputRef: register({ required: true }),
                    name: "password",
                  }}
                />
              </div>
              {/* <p className={styles.error__text}>
                ¡Usuario y/o Contraseña Incorrectos!
              </p> */}
              <Button
                className="login__btn"
                variant="contained"
                color="secondary"
                style={{ height: "3rem", width: "50%" }}
                type="submit"
              >
                Entrar
              </Button>
              <div className={styles.forgot__container}>
                <Link href="/prueba">
                  <p>
                    ¿No tienes<span className={styles.bold__text}> Cuenta</span>
                    ?
                  </p>
                </Link>
                <Link href="/prueba2">
                  <p>
                    ¿Olvidaste tu
                    <span className={styles.bold__text}> Contraseña</span>?
                  </p>
                </Link>
              </div>
            </form>
          </div>
          <img
            className={styles.dog__img}
            src="/img/dog__logo.png"
            alt="Picture of the author"
          ></img>
        </div>
      </div>
    </div>
  );
}
