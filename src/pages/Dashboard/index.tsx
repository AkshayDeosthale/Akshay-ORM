// ** MUI Imports

// ** Icons Imports
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <Box>
      hi
      <Button onClick={() => navigate("/")}>go back</Button>
    </Box>
  );
};

export default Dashboard;
