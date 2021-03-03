import Head from "next/head";
import styles from "../../styles/AdoptForm.module.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import { useState } from "react";
import MomentUtils from "@date-io/moment";
import moment from "moment";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import Logo from "../../public/img/svg/logo__huella.svg";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  datePicker: {
    minWidth: "100%",
  },
}));

export default function AdoptForm() {
  moment.locale("es");
  const classes = useStyles();
  const [state, setState] = useState({
    sexo: "",
    name: "",
    castrated: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  /* Date */
  const [selectedDate, setSelectedDate] = useState(moment().format());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  /* Date */
  return (
    <div className={styles.container__form}>
      <Head>
        <title>Mascotas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.form__container}>
        <Logo className={styles.logo} />
        <p className={styles.form__label}>Nombre</p>
        <TextField
          color="secondary"
          error={false}
          fullWidth
          variant="outlined"
        />
        <p className={styles.form__label}>Sexo</p>
        <FormControl className={classes.formControl}>
          <Select
            native
            value={state.sexo}
            onChange={handleChange}
            inputProps={{
              name: "sexo",
              id: "sexo-native-simple",
            }}
            color="secondary"
            variant="outlined"
          >
            <option aria-label="None" value="">
              N/A
            </option>
            <option value={10}>Macho</option>
            <option value={20}>Hembra</option>
          </Select>
        </FormControl>
        <p className={styles.form__label}>Fecha de Nacimiento</p>
        <MuiPickersUtilsProvider
          utils={MomentUtils}
          locale={"es"}
          className={classes.datePicker}
        >
          <KeyboardDatePicker
            inputVariant="outlined"
            className={classes.datePicker}
            required
            locale={"es-ES"}
            color="secondary"
            margin="normal"
            id="date-picker-dialog"
            format="L"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
            maxDateMessage=""
            mask="__/__/____"
            okLabel="Listo"
            clearLabel="Text"
            cancelLabel="Cancelar"
          />
        </MuiPickersUtilsProvider>
        <p className={styles.form__label}>Castrado</p>
        <FormControl className={classes.formControl}>
          <Select
            native
            value={state.castrated}
            onChange={handleChange}
            inputProps={{
              name: "castrated",
              id: "castrated-native-simple",
            }}
            color="secondary"
            variant="outlined"
          >
            <option aria-label="None" value="">
              N/A
            </option>
            <option value={10}>SI</option>
            <option value={20}>NO</option>
          </Select>
        </FormControl>
        <p className={styles.form__label}>Direccion</p>
        <TextField
          color="secondary"
          error={false}
          fullWidth
          variant="outlined"
        />
      </div>
    </div>
  );
}
