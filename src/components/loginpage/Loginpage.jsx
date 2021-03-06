import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import { useLoading } from "../../hooks/useLoading";
import { getUserDetails } from "../../utils/api";
import { useError } from "../../hooks/useError";
import {
  FormControl,
  InputLabel,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { InputAdornment, OutlinedInput } from "@mui/material";
import { BackdropUnstyled, CircularProgress } from "@mui/material";

import "./loginpage.scss";

const Loginpage = () => {
  const { isError, setIsError } = useError(false);
  const { loading, setIsLoading } = useLoading(false);
  const { username, setUsername, setCurrentUser, setLoggedIn } =
    useContext(UserContext);
  const [values, setValues] = useState({
    password: "",
    showPassword: "",
  });
  const navigate = useNavigate();

  const handleUsernameInput = (event) => {
    const usernameInput = event.target.value;
    setUsername(usernameInput);
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  useEffect(() => {});

  const handleSignIn = (event) => {
    setIsError(false);
    setIsLoading(false);
    event.preventDefault();
    getUserDetails(username)
      .then((user) => {
        if (values.password === "password") {
          setIsLoading(true);
          setCurrentUser(user);
          navigate(`/reviews`);
          setLoggedIn(true);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        setUsername("");
        setIsError(true);
      });
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleSignIn} className="form">
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <TextField
            fullWidth
            id="outlined-basic"
            label="Username"
            variant="outlined"
            placeholder="Username"
            onChange={handleUsernameInput}
            value={username}
            margin="dense"
            autoComplete="off"
            required
          />
        </FormControl>
        <div className="username">
          <FormControl sx={{ m: 1, ml: 1, width: "25ch" }} variant="outlined">
            <InputLabel sx={{ m: 1 }} htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              fullWidth
              sx={{ m: 1 }}
              id="outlined-adornment-password"
              margin="dense"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              required
              autoComplete="off"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </div>
        <br />
        <Button className="button" variant="contained" type="submit">
          Log In
        </Button>
      </form>
      {isError && (
        <div className="error">
          <p>Invalid Username and/or Password</p>
        </div>
      )}
      {!loading && (
        <BackdropUnstyled className="backdrop">
          <CircularProgress color="inherit" className="circleprogress" />
          <p>Loading...</p>
        </BackdropUnstyled>
      )}
    </div>
  );
};

export default Loginpage;
