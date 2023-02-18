import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { MATERIAL_MARGIN } from '../../constants/cssConstants';

function MaterialRadio ({ id, title, name, options, value, onChange, width = "100%" }) {
  return (
    <FormControl sx={{ width, margin: MATERIAL_MARGIN }}>
      <FormLabel id={id}>{title}</FormLabel>
      <RadioGroup name={name} value={value} onChange={onChange}>
        {options.map((option) => {
          return (
            <FormControlLabel key={option.id} value={option.id} label={option.label} control={<Radio />}/>
          );
        })}
      </RadioGroup>
    </FormControl>
  );
}

export default MaterialRadio;
