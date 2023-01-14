import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import React from "react";

export const Header: React.FC = () => {
  return (
    <FormControl sx={{ display: 'flex', margin: '0'}}>
      <OutlinedInput placeholder="Please enter text" sx={{
        width: "600px",
        height: "50px",
        
        background: "#FFFFFF",
        border: "1px solid #EAEAEA",
        boxShadow: "1px solid #EAEAEA",
        borderRadius: "5px",
      }} />
    </FormControl>
  );
};
