import * as React from 'react';
import Box from '@mui/material/Box';
import { TextField} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputAdornment from '@mui/material/InputAdornment';
import FilledInput from '@mui/material/FilledInput';

import Input from '@mui/material/Input';

//This component is a placeholder for now to show that a component
//representing a step can be paired into the FormStepper component
export default function Step3() {
  const styles = [
    {value: 'None', label: 'Void Style'},
    { value: 'MLA', label: 'MLA' },
    { value: 'Chicago Style', label: 'Chicago Style' },
  ];
  const documentTypes = [
    {value: 'None', label: 'Void Style'},
    { value: 'Dissertation', label: 'Dissertation' },
    { value: 'Doctoral Paper', label: 'Doctoral Paper' },
  ];
  const fontList = [
    {value: 'None', label: 'Void Style'},
    { value: 'Times New Roman', label: 'Times New Roman' },
    { value: 'Comic Sans', label: 'Comic Sans' },
  ];
  const [style, setSetStyle] = React.useState(styles[0].value);
  const [docType, setDocType] = React.useState(documentTypes[0].value);
  const [font, setFont] = React.useState(documentTypes[0].value);
  const handleChangeStyle = (event) => {
    setSetStyle(event.target.value);
  };
  const handleChangeDocumentType = (event) => {
    setDocType(event.target.value);
  };
  const handleChangeFont = (event) => {
    setFont(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <div>
        <h3>Choose Style Guide *</h3>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Style</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={style}
          label="Style"
          onChange={handleChangeStyle}
        >
          <MenuItem disabled={true} value={styles[0].value}>
            <em>None</em>
          </MenuItem>
          <MenuItem value={styles[1].value}>{styles[1].value}</MenuItem>
          <MenuItem value={styles[2].value}>{styles[2].value}</MenuItem>
        </Select>
        <FormHelperText>Select Prefered Style Ex. MLA</FormHelperText>
      </FormControl>
      </div>
      <div>
        <h3>What is your document type? *</h3>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Document Type</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={docType}
          label="Document Type"
          onChange={handleChangeDocumentType}
        >
          <MenuItem disabled={true} value={documentTypes[0].value}>
            <em>None</em>
          </MenuItem>
          <MenuItem value={documentTypes[1].value}>{documentTypes[1].value}</MenuItem>
          <MenuItem value={documentTypes[2].value}>{documentTypes[2].value}</MenuItem>
        </Select>
        <FormHelperText>Select Document Type Ex. Dissertation</FormHelperText>
      </FormControl>
      </div>
      <div>
        <h3>Choose an approved font *</h3>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Font Type</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={font}
          label="Font Type"
          onChange={handleChangeFont}
        >
          <MenuItem disabled={true} value={fontList[0].value}>
            <em>None</em>
          </MenuItem>
          <MenuItem value={fontList[1].value}>{fontList[1].value}</MenuItem>
          <MenuItem value={fontList[2].value}>{fontList[2].value}</MenuItem>
        </Select>
        <FormHelperText>Select Prefered Font Ex. Times New Roman</FormHelperText>
      </FormControl>
      <div>
        <h3>Please enter the first line of your title here</h3>
        {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
        <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
          <TextField
            id="filled-adornment-weight"
            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
            aria-describedby="filled-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          <FormHelperText id="filled-weight-helper-text">Please limit this line to 90 characters.</FormHelperText>
        </FormControl>
      </div>
      <div>
        <h3>Please enter the second line of your title here</h3>
        {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
        <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
          <TextField
            id="filled-adornment-weight"
            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
            aria-describedby="filled-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          <FormHelperText id="filled-weight-helper-text">Please limit this line to 90 characters.</FormHelperText>
        </FormControl>
      </div>
      <div>
        <h3>Please enter the thrid line of your title here</h3>
        {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
        <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
          <TextField
            id="filled-adornment-weight"
            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
            aria-describedby="filled-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          <FormHelperText id="filled-weight-helper-text">Please limit this line to 90 characters.</FormHelperText>
        </FormControl>
      </div>
    </div>

    </Box>
  );
}
