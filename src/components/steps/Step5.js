// Step 5 - Additional Document Sections
import * as React from 'react';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Step5({ form, setForm }) {
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      <div>
        <FormGroup>
          <FormControlLabel control={<Checkbox checked={form.includeDedication} onChange={(e) => setForm({...form, includeDedication: e.target.checked})} style={{color: '#9E1B32'}} />} label="Dedication" />
          <FormControlLabel control={<Checkbox checked={form.includeAcknowledgements} onChange={(e) => setForm({...form, includeAcknowledgements: e.target.checked})} style={{color: '#9E1B32'}}/>} label="Acknowledgements" />
          <FormControlLabel control={<Checkbox checked={form.includePreface} onChange={(e) => setForm({...form, includePreface: e.target.checked})} style={{color: '#9E1B32'}}/>} label="Preface" />
          <FormControlLabel control={<Checkbox checked={form.includeFigures} onChange={(e) => setForm({...form, includeFigures: e.target.checked})} style={{color: '#9E1B32'}}/>} label="Figures" />
          <FormControlLabel control={<Checkbox checked={form.includeTables} onChange={(e) => setForm({...form, includeTables: e.target.checked})} style={{color: '#9E1B32'}}/>} label="Tables" />
          <FormControlLabel control={<Checkbox checked={form.includeSymbols} onChange={(e) => setForm({...form, includeSymbols: e.target.checked})} style={{color: '#9E1B32'}}/>} label="Symbols" />
          <FormControlLabel control={<Checkbox checked={form.includeAppendix} onChange={(e) => setForm({...form, includeAppendix: e.target.checked})} style={{color: '#9E1B32'}}/>} label="Appendix" />
          <FormControlLabel control={<Checkbox checked={form.includeBiographical} onChange={(e) => setForm({...form, includeBiographical: e.target.checked})} style={{color: '#9E1B32'}}/>} label="Biographical" />
        </FormGroup>
        <h3>Please refer to the sample document and the Format Manual for an example of each additional field.</h3>
      </div>
    </Box>
  );
}