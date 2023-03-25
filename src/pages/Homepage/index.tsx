import ArrowCircleDownOutlinedIcon from "@mui/icons-material/ArrowCircleDownOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { Box, Button, Drawer } from "@mui/material";
import React, { useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import SignIn from "../../components/HomepageComponents/SignIn";
import SignUp from "../../components/HomepageComponents/SignUp";
import { createFile, readFile, writeFile } from "../../operation/fsCRUD";
import { HomepageBox, HomepageHeading } from "./muistyles.homepage";

type Anchor = "top" | "left" | "bottom" | "right";

function App() {
  const [name, setName] = useState("");
  const [text, helper] = useTypewriter({
    words: ["Welcome to My CRM"],
    loop: false,
    delaySpeed: 2000,
  });
  /* Hook helper */
  const { isType, isDelete, isDelay, isDone } = helper;

  async function greet() {
    await createFile("/Users/akshaydeosthale/Documents/Codes/akshay.txt");
    await writeFile("/Users/akshaydeosthale/Documents/Codes/akshay.txt", name);
    await readFile("/Users/akshaydeosthale/Documents/Codes/akshay.txt");
  }

  //drawer
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  return (
    <HomepageBox>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <HomepageHeading variant="h1">{text}</HomepageHeading>
        <Cursor
          cursorStyle={<HomepageHeading variant="h1">|</HomepageHeading>}
          cursorColor="blue"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "40px",
        }}
      >
        <Button
          variant="outlined"
          size="large"
          endIcon={<ArrowCircleDownOutlinedIcon />}
          color="secondary"
          onClick={toggleDrawer("bottom", true)}
        >
          sign up
        </Button>
        <Button
          variant="outlined"
          size="large"
          endIcon={<ArrowCircleRightOutlinedIcon />}
          color="success"
          onClick={toggleDrawer("right", true)}
        >
          sign in
        </Button>
      </Box>
      <Drawer
        anchor={"bottom"}
        open={state["bottom"]}
        onClose={toggleDrawer("bottom", false)}
      >
        <SignUp />
      </Drawer>
      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        <SignIn />
      </Drawer>
    </HomepageBox>
  );
}

export default App;
