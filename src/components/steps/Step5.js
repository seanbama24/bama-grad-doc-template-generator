// Step 5 - Additional Document Sections
import * as React from 'react';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Step5() {
  return (
    <Box
      component="form"
      sx={{
        "width": "60%",
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      margin="auto"
    >
      <div>
        <h2>Additional Document Sections</h2>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Dedication" />
          <FormControlLabel control={<Checkbox />} label="Acknowledgements" />
          <FormControlLabel control={<Checkbox />} label="Preface" />
          <FormControlLabel control={<Checkbox />} label="Figures" />
          <FormControlLabel control={<Checkbox />} label="Tables" />
          <FormControlLabel control={<Checkbox />} label="Symbols" />
          <FormControlLabel control={<Checkbox />} label="Appendix" />
          <FormControlLabel control={<Checkbox />} label="Biographical" />
        </FormGroup>
        <h3>Please refer to the sample document and the Format Manual for an example of each additional field.</h3>
      </div>
    </Box>
  );
}