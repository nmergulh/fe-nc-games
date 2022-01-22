import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import { getUsername } from "../../utils/api";
import { useError } from "../../hooks/useError";
import { FormControl, InputLabel, IconButton, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { InputAdornment, OutlinedInput } from "@mui/material";

import "./loginpage.scss";

const Loginpage = () => {
  const { isError, setIsError } = useError();
  const { username, setUsername } = useContext(UserContext);
  const [values, setValues] = useState({
    password: "",
    showPassword: "",
  });
  const navigate = useNavigate();

  const handleUsernameInput = (event) => {
    const username = event.target.value;
    setUsername(username);
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

  const handleSignIn = (event) => {
    setIsError(false);
    event.preventDefault();
    getUsername(username)
      .then((itemsFromApi) => {
        if (values.password === "password") {
          navigate(`/dashboard/${username}`);
        } else {
          setValues({
            ...values,
            password: "",
          });
          setUsername("");
          setIsError(true);
        }
      })
      .catch((err) => {
        setUsername("");
        setValues({
          ...values,
          password: "",
        });
        setIsError(true);
      });
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleSignIn} className="form">
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            placeholder="Username"
            onChange={handleUsernameInput}
            value={username}
            margin="dense"
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel
            sx={{ m: 1, width: "25ch" }}
            htmlFor="outlined-adornment-password"
          >
            Password
          </InputLabel>
          <OutlinedInput
            sx={{ m: 1, width: "25ch" }}
            id="outlined-adornment-password"
            margin="dense"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
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
        <br />
        <button>Login</button>
      </form>
      {isError && (
        <div className="error">
          <p>User does not exist.</p>
          <Link to="/register">Register instead.</Link>
        </div>
      )}
    </div>
  );
};

export default Loginpage;
