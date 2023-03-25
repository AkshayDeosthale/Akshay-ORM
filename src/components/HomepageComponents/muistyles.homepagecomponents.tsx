import { Box, BoxProps, Typography, TypographyProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SignInBox = styled(Box)<BoxProps>(({ theme }) => ({
  width: "500px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  padding: "20px",
  justifyContent: "center",
  alignItems: "flex-start",
  height: "100%",
}));

export const SignUpBox = styled(Box)<BoxProps>(({ theme }) => ({
  height: "600px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  padding: "20px",
  justifyContent: "center",
  alignItems: "center",
}));
