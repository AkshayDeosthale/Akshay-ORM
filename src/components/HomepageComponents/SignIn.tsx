import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { Button, TextField } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { SignInBox } from "./muistyles.homepagecomponents";

type Props = {};

const SignIn = ({}: Props) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <SignInBox component="form">
      <h1>Log In</h1>
      <TextField
        required
        id="outlined-required"
        label="Username or Email"
        defaultValue="Hello World"
        color="secondary"
        fullWidth
      />
      {/* <OutlinedInput
        label="Password"
        color="secondary"
        fullWidth
        type={showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      /> */}
      <TextField
        id="outlined-password-input"
        required
        label="Password"
        type="password"
        autoComplete="current-password"
        color="secondary"
        fullWidth
      />
      <Button
        variant="outlined"
        size="large"
        endIcon={<ArrowCircleRightOutlinedIcon />}
        color="success"
        type="submit"
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Log In
      </Button>
    </SignInBox>
  );
};

export default SignIn;
