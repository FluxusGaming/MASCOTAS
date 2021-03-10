import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import styles from "../../styles/FeedCard.module.css";
import { IoEllipsisHorizontal } from "react-icons/io5";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: "5px",
    outline: "none",
    boxShadow: theme.shadows[5],
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        type="button"
        onClick={handleOpen}
        disableRipple
        style={{ background: "none", outline: "none" }}
      >
        <IoEllipsisHorizontal className={styles.feed__card__more} />
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <p id="transition-modal-description">
              <div className={styles.feed_card__modal__options}>
                <p className={styles.feed_card__modal__report}>Denunciar</p>
                <p>Dejar de Seguir</p>
                <p>Ir a la publicación</p>
                <p>Compartir en...</p>
                <p>Copiar Enlace</p>
                <p>Cancelar</p>
              </div>
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
