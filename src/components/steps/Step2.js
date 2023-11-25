// Step 2 - Document Information
import * as React from 'react';
import Box from '@mui/material/Box';
import { TextField} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputAdornment from '@mui/material/InputAdornment';
import { styles, documentTypes, fontList } from '../../fieldValues';

export default function Step2({ form, setForm }) {

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      <div>
          <h3>Choose Style Guide *</h3>
          <FormControl sx={{ m: 1, minWidth: 120, width: '25ch' }}>
          <InputLabel id="demo-simple-select-helper-label">Style</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={form.style}
            label="Style"
            onChange={(e) => setForm({...form, style: e.target.value})}
          >
            {styles.map( function (option) {
                if (option.value === 'None') {
                  return <MenuItem disabled={true} value={styles[0].value}>
                    <em>None</em>
                  </MenuItem>
                } 
                else {
                return <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
                }
            })}            
          </Select>
          <FormHelperText>Select Prefered Style Ex. MLA</FormHelperText>
        </FormControl>
        </div>
        <div>
          <h3>What is your document type? *</h3>
          <FormControl sx={{ m: 1, minWidth: 120, width: '25ch'}}>
          <InputLabel id="demo-simple-select-helper-label">Document Type</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={form.documentType}
            label="Document Type"
            onChange={(e) => setForm({...form, docType: e.target.value})}
          >
            {documentTypes.map( function (option) {
                if (option.value === 'None') {
                  return <MenuItem disabled={true} value={documentTypes[0].value}>
                    <em>None</em>
                  </MenuItem>
                } 
                else {
                return <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
                }
            })}   
          </Select>
          <FormHelperText>Select Document Type Ex. Dissertation</FormHelperText>
        </FormControl>
        </div>
        <div>
          <h3>Choose an approved font *</h3>
          <FormControl sx={{ m: 1, minWidth: 120, width: '25ch'}}>
          <InputLabel id="demo-simple-select-helper-label">Font Type</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={form.font}
            label="Font Type"
            onChange={(e) => setForm({...form, font: e.target.value})}
          >
            {fontList.map( function (option) {
                if (option.value === 'None') {
                  return <MenuItem disabled={true} value={fontList[0].value}>
                    <em>None</em>
                  </MenuItem>
                } 
                else {
                return <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
                }
            })}       
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
                maxLength: 90
              }}
              value={form.titleLine1}
              onChange={(e) => setForm({...form, titleLine1: e.target.value})}
            />
            <FormHelperText id="filled-weight-helper-text">Please limit this line to 90 characters.</FormHelperText>
          </FormControl>
        </div>
        <div>
          <h3>Please enter the second line of your title here</h3>
          <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
            <TextField
              id="filled-adornment-weight"
              endAdornment={<InputAdornment position="end">kg</InputAdornment>}
              aria-describedby="filled-weight-helper-text"
              inputProps={{
                'aria-label': 'weight',
                maxLength: 60
              }}
              value={form.titleLine2}
              onChange={(e) => setForm({...form, titleLine2: e.target.value})}
            />
            <FormHelperText id="filled-weight-helper-text">Please limit this line to 60 characters.</FormHelperText>
          </FormControl>
        </div>
        <div>
          <h3>Please enter the third line of your title here</h3>
          {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
          <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
            <TextField
              id="filled-adornment-weight"
              endAdornment={<InputAdornment position="end">kg</InputAdornment>}
              aria-describedby="filled-weight-helper-text"
              inputProps={{
                'aria-label': 'weight',
                maxLength: 30
              }}
              value={form.titleLine3}
              onChange={(e) => setForm({...form, titleLine3: e.target.value})}
            />
            <FormHelperText id="filled-weight-helper-text">Please limit this line to 30 characters.</FormHelperText>
          </FormControl>
        </div>
      </div>
    </Box>
  );
}
