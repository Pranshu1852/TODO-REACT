import { MenuItem, TextField } from "@mui/material";
import { useContext } from "react";
import {
  GeneralContext,
  GeneralContextAction,
} from "../../context/GeneralContext";
import { useTranslation } from "react-i18next";

function LanguageSelector() {
  const { i18n } = useTranslation();
  const generalContext = useContext(GeneralContext);

  if (!generalContext) {
    return;
  }

  function handleLanguageChange(lang: string) {
    generalContext!.dispatch({
      type: GeneralContextAction.CHANGELANGUAGE,
      payload: lang,
    });
    i18n.changeLanguage(lang);
  }

  return (
    <TextField
      id="outlined-select-currency "
      select
      defaultValue="en"
      size="small"
      sx={{
        color: "black",
        border: "none",
      }}
      value={generalContext.state.language}
      onChange={(event) => {
        handleLanguageChange(event.target.value);
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
