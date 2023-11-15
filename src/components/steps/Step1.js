// Step 1 - Student Information
// import * as React from 'react';
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@mui/material/TextField';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { degreeList } from '../../fieldValues';
import { colors } from '@mui/material';
import { red } from '@mui/material/colors';

export default function Step1({ form, setForm }) {
  degreeList.sort();

  
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      <h3>What is your full legal name?</h3>
      <FormControl sx={{ m: 1, minWidth: 250 }}>
        <TextField value={form.name} onChange={(e) => setForm({...form, name: e.target.value})}></TextField>
        <FormHelperText>Please enter your full legal name</FormHelperText>
      </FormControl>
      <h3>What degree are you currently pursuing?</h3>
      <FormControl sx={{ m: 1, minWidth: 250 }}>
        <TextField id="degree-selection" select label="Select" value={form.degree} onChange={(e) => setForm({...form, degree: e.target.value})}>
            {degreeList.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </TextField>
        <FormHelperText>Select current degree being pursued</FormHelperText>
      </FormControl>
      <h3>When is your anticipated graduation year?</h3>
      <DatePicker
          selected={form.gradYear}
          onChange={(e) => setForm({...form, gradYear: e})}
          showYearPicker
          dateFormat="yyyy"
        />
    </Box>
  );
}