// Step 5 - Additional Document Sections
import * as React from 'react';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Step5({ form, setForm }) {

  // -Dedication
  // -List of Abbreviations and Symbols (required where they are not self-explanatory)
  // -List of tables (required if tables are part of doc)
  // -List of figures (required if figures)
  // -List of illustrations (required if illustrations)

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      <div>
        <h1>Additional Document Sections</h1>
        <h3>Check the box next to the additional document sections you would like to include. Please refer to the sample document and the Format Manual for an example of each additional field.</h3>
        <FormGroup>
          <FormControlLabel control={<Checkbox checked={form.includeDedication} onChange={(e) => setForm({...form, includeDedication: e.target.checked})} style={{color: '#9E1B32'}} />} label="Dedication" />
          <FormControlLabel control={<Checkbox checked={form.includeAbbreviationsAndSymbols} onChange={(e) => setForm({...form, includeAbbreviationsAndSymbols: e.target.checked})} style={{color: '#9E1B32'}}/>} label="Abbreviations and Symbols" />
          <FormControlLabel control={<Checkbox checked={form.includeTables} onChange={(e) => setForm({...form, includeTables: e.target.checked})} style={{color: '#9E1B32'}}/>} label="Tables" />
          <FormControlLabel control={<Checkbox checked={form.includeFigures} onChange={(e) => setForm({...form, includeFigures: e.target.checked})} style={{color: '#9E1B32'}}/>} label="Figures" />
          <FormControlLabel control={<Checkbox checked={form.includeIllustrations} onChange={(e) => setForm({...form, includeIllustrations: e.target.checked})} style={{color: '#9E1B32'}}/>} label="Illustrations" />
        </FormGroup>
        {/* <h3></h3> */}
      </div>
    </Box>
  );
}