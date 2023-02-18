import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function MaterialSelect ({ id, title, value, options, onChange, width = "100%" }) {
  return (
      <FormControl sx={{ m: 1, width }}>
        <InputLabel id={id}>{title}</InputLabel>
        <Select
          id={id}
          value={value}
          label={title}
          onChange={onChange}
        >
          {options.map((option) => {
            return (<MenuItem key={option.id} value={option.id}>{option.label}</MenuItem>)
          })}
        </Select>
      </FormControl>
  );
};

export default MaterialSelect;
