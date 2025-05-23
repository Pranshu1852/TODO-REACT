import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select, { type SelectChangeEvent } from '@mui/material/Select';
import { type Theme, useTheme } from '@mui/material/styles';
import * as React from 'react';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(option: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight: personName.includes(option)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

interface MultiSelectProps{
    label: string,
    value: string[]
    options: string[],
    onChange: (value: string|string[], label: string) => void;
}

export default function MultipleSelectChip({label ,value: initValue ,options, onChange}: MultiSelectProps) {
  const theme = useTheme();
  
  const [data, setData] = React.useState<string[]>(initValue);

  const handleChange = (event: SelectChangeEvent<typeof data>) => {
    const {
      target: { value },
    } = event;

    onChange(value,label.toLowerCase());
    
    setData(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 0, width: 200, '& .MuiOutlinedInput-notchedOutline':{
        border: 'solid',
        borderWidth: '2px',
        borderColor: 'black'
      } }}>
        <InputLabel id="demo-multiple-chip-label">{label}</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={data}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label={label} />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', overflow: 'auto', scrollbarWidth: 'none', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {options.map((option) => (
            <MenuItem
              key={option}
              value={option}
              style={getStyles(option, data, theme)}
            >
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}