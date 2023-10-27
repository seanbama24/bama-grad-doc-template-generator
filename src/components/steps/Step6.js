// Step 6 - Graduate Supervisory Committee Information
import * as React from 'react';
import Box from '@mui/material/Box';
import { TextField, Typography } from '@mui/material';
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';

const committeeChairList = [
  {
    value: '1',
    label: 'I have one chair',
  },
  {
    value: '2',
    label: 'I have two co-chairs',
  }
];

export default function Step2() {
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      <div>
        <h2 style={{color: '#9E1B32'}}>Graduate Supervisory Committee Information</h2>
        <hr></hr>
        <Typography variant="h5">Do you have one committee chair or two co-chairs?</Typography>
        <TextField
          id="template-selector"
          select
          label="Select"
          helperText="Please enter your committee members."
        >
          {committeeChairList.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <Typography variant="h5">Chair</Typography>
        <TextField 
          variant="outlined" 
          required
          fullWidth
          rows={1}/>
        
        <Typography variant="h5">Committee Member</Typography>
        <TextField 
          variant="outlined" 
          required
          fullWidth
          rows={1}/>
        
        <Typography variant="h5">Committee Member</Typography>
        <TextField 
          variant="outlined" 
          required
          fullWidth
          rows={1}/>
      </div>
      <div style={{marginTop: '2em'}}>
        <button style={{backgroundColor: '#9E1B32', borderRadius: '20px', color: 'white', border: '10px solid #9E1B32'}}>
          Add another committee member
        </button>
      </div>
    </Box>
  );
}