import { memo } from "react";
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { MATERIAL_MARGIN } from '../../constants/cssConstants';

type Option = {
  id: string,
  label: string | number
}

type Props = {
  id: string,
  name: string,
  value: string,
  error: boolean,
  helperText: string,
  title: string,
  options: Option[],
  width: string,
  onChange: ((event: React.ChangeEvent<HTMLInputElement>) => void) 
}

function MaterialRadio ({ id, title, name, options, value, onChange, error, helperText, width = "100%" }: Props) {
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

export default memo(MaterialRadio);
