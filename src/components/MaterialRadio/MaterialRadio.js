import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { MATERIAL_MARGIN } from '../../constants/cssConstants';

function MaterialRadio ({ id, title, name, options, value, onChange, error, helperText, width = "100%" }) {
  return (
    <FormControl error={error} sx={{ width, margin: MATERIAL_MARGIN }}>
      <FormLabel id={id}>{title}</FormLabel>
      <RadioGroup name={name} value={value} onChange={onChange}>
        {options.map((option) => {
          return (
            <FormControlLabel key={option.id} value={option.id} label={option.label} control={<Radio />}/>
          );
        })}
      </RadioGroup>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
}

export default MaterialRadio;
