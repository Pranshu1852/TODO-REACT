import { MenuItem, TextField } from "@mui/material";

function LanguageSelector() {
  return (
    <TextField
      id="outlined-select-currency "
      select
      defaultValue="en"
      size="small"
      sx={{
        color: "black",
        border: "none"
      }}
    >
      <MenuItem value="en">English</MenuItem>
      <MenuItem value="gj">Gujarati</MenuItem>
      <MenuItem value="hi">Hindi</MenuItem>
      <MenuItem value="fr">French</MenuItem>
      <MenuItem value="ar">Arabic</MenuItem>
    </TextField>
  );
}

export default LanguageSelector;
