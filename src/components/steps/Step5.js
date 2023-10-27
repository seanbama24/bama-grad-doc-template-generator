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
      noValidate
      autoComplete="off"
    >
      <div>
        <h2 style={{color: '#9E1B32'}}>Additional Document Sections</h2>
        <hr></hr>
        <FormGroup>
          <FormControlLabel control={<Checkbox style={{color: '#9E1B32'}}/>} label="Dedication" />
          <FormControlLabel control={<Checkbox style={{color: '#9E1B32'}}/>} label="Acknowledgements" />
          <FormControlLabel control={<Checkbox style={{color: '#9E1B32'}}/>} label="Preface" />
          <FormControlLabel control={<Checkbox style={{color: '#9E1B32'}}/>} label="Figures" />
          <FormControlLabel control={<Checkbox style={{color: '#9E1B32'}}/>} label="Tables" />
          <FormControlLabel control={<Checkbox style={{color: '#9E1B32'}}/>} label="Symbols" />
          <FormControlLabel control={<Checkbox style={{color: '#9E1B32'}}/>} label="Appendix" />
          <FormControlLabel control={<Checkbox style={{color: '#9E1B32'}}/>} label="Biographical" />
        </FormGroup>
        <h3>Please refer to the sample document and the Format Manual for an example of each additional field.</h3>
      </div>
    </Box>
  );
}