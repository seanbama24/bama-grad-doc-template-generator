// import * as React from 'react';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import DatePicker from 'react-date-picker'
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

const degreeList = [
  {value: 'computerScience', label: 'Computer Science'}
];

//This component is a placeholder for now to show that a component
//representing a step can be paired into the FormStepper component
export default function Step1() {

  const [defenseDate, setdefenseDate] = useState(new Date());
  const [graduationDate, setgraduationDate] = useState(new Date());

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div style={{textAlign: 'center'}}>
        <h2>Tell us about yourself</h2>
        <h3>What is your full name?</h3>
        <TextField></TextField>
        <h3>What degree are you currently pursuing?</h3>
        <TextField id="degree-selection" select label="Select">
          {degreeList.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
        </TextField>
        <h3>When is your anticipated defense date?</h3>
        <DatePicker selected={defenseDate} value={defenseDate} onChange={(defenseDate) => setdefenseDate(defenseDate)} />
        <p>Please select the month and year you will be defending.</p>
        <h3>When is your anticipated graduation date?</h3>
        <DatePicker selected={graduationDate} value={graduationDate} onChange={(graduationDate) => setgraduationDate(graduationDate)} />
        <p>Please select the month and year you will be graduating.</p>
      </div>
    </Box>
  );
}