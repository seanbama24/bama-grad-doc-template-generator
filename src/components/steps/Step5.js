// Step 5 - Additional Document Sections
import * as React from 'react';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Step5({ dedication, acknowledgements, preface, figures, tables, symbols, appendix, biographical, updateDedication, updateAcknowledgements, updatePreface, updateFigures, updateTables, updateSymbols, updateAppendix, updateBiographical }) {
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      <div>
        <FormGroup>
          <FormControlLabel control={<Checkbox checked={dedication} onChange={updateDedication} style={{color: '#9E1B32'}} />} label="Dedication" />
          <FormControlLabel control={<Checkbox checked={acknowledgements} onChange={updateAcknowledgements} style={{color: '#9E1B32'}}/>} label="Acknowledgements" />
          <FormControlLabel control={<Checkbox checked={preface} onChange={updatePreface} style={{color: '#9E1B32'}}/>} label="Preface" />
          <FormControlLabel control={<Checkbox checked={figures} onChange={updateFigures} style={{color: '#9E1B32'}}/>} label="Figures" />
          <FormControlLabel control={<Checkbox checked={tables} onChange={updateTables} style={{color: '#9E1B32'}}/>} label="Tables" />
          <FormControlLabel control={<Checkbox checked={symbols} onChange={updateSymbols} style={{color: '#9E1B32'}}/>} label="Symbols" />
          <FormControlLabel control={<Checkbox checked={appendix} onChange={updateAppendix} style={{color: '#9E1B32'}}/>} label="Appendix" />
          <FormControlLabel control={<Checkbox checked={biographical} onChange={updateBiographical} style={{color: '#9E1B32'}}/>} label="Biographical" />
        </FormGroup>
        <h3>Please refer to the sample document and the Format Manual for an example of each additional field.</h3>
      </div>
    </Box>
  );
}