import React from "react";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Link from "next/link";
import axios from "../../config/api";
import { useRouter } from "next/router";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

export default function MenuListComposition({ user }) {
  const router = useRouter();
  useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const logout = async () => {
    await axios
      .get("/api/logout", {
        withCredentials: true,
      })
      .then((res) => res.data);
    if (router.pathname == "/") {
      await router.reload();
    } else {
      await router.push("/");
    }
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div>
      <Button
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        style={{ backgroundColor: "transparent" }}
        disableRipple={true}
        disableFocusRipple={true}
      >
        <Avatar
          style={{ height: "45px", width: "45px" }}
          alt="profile"
          //   src={user?.avatar}
          src={
            "https://avatars.githubusercontent.com/u/20648944?s=460&u=b861ca307ee6726b19f99d439a919ef6054b50fd&v=4"
          }
        >
          {user?.username[0]}
        </Avatar>
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        style={{ zIndex: 9999 }}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  <Link href="/profile">
                    <MenuItem
                      onClick={handleClose}
                      style={{ justifyContent: "center" }}
                    >
                      Mi Perfil
                    </MenuItem>
                  </Link>
                  <MenuItem
                    onClick={handleClose}
                    style={{ justifyContent: "center" }}
                  >
                    Monedas
                  </MenuItem>
                  <MenuItem
                    onClick={(handleClose, logout)}
                    style={{ justifyContent: "center" }}
                  >
                    Cerrar Sesión
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}
