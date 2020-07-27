import React, { useState } from "react";
import {
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Typography,
  Grid,
  Container,
  Link,
  Checkbox,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { userApi } from "../../../utils/api/index";
import { useDispatch } from "react-redux";
import actions from "../../../redux/actions/user";
import validate from "../../../utils/validate";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Signin: React.FC<any> = (props) => {
  const classes = useStyles();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errEmail, setErrEmail] = useState<string>("");
  const [errPassword, setErrPassword] = useState<string>("");

  const handlerChange = (event: any) => {
    setErrEmail("");
    setErrPassword("");
    if (event.target.id === "email") {
      const error = validate.email(event.target.value);
      if (error !== undefined) {
        setErrEmail(error);
      }
      setEmail(event.target.value);
    }

    if (event.target.id === "password") {
      const error = validate.password(event.target.value);
      if (error !== undefined) {
        setErrPassword(error === "Слишком лёгкий пароль" ? "" : error);
      }
      setPassword(event.target.value);
    }
  };
 

  const sendServer = (e: any) => {
    e.preventDefault();
    if (!email.trim() && !password.trim()) {
      setErrEmail("");
      setErrPassword("");
      const error = validate.email(email);
      const error2 = validate.password(password);

      if (error !== undefined && error2 != undefined) {
        return (
          setErrEmail(error),
          setErrPassword(error2 === "Слишком лёгкий пароль" ? "" : error2)
        );
      }
    }
    userApi.signin({ email, password }).then(user => {
    })

  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            error={errEmail.length > 1 ? true : false}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label={errEmail.length > 1 ? errEmail : "Email Address"}
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handlerChange}
          />
          <TextField
            error={errPassword.length > 1 ? true : false}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label={errPassword.length > 1 ? errPassword : "Password"}
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handlerChange}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={sendServer}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};
export default Signin;
