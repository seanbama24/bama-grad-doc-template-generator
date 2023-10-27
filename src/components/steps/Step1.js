// Step 1 - Student Information
// import * as React from 'react';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const degreeList = [
  {value: 'computerScience', label: 'Computer Science'}
];

export default function Step1() {

  function YearPicker() {
    const MyDatePicker = () => {
      const [startDate, setStartDate] = useState(new Date());
  
      return (
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          showYearPicker
          dateFormat="yyyy"
        />
      );
    };
  
    return (
      <div>
        <MyDatePicker />
      </div>
    );
  }

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      <h2 style={{ color: '#9E1B32' }}>Tell Us About Yourself</h2>
      <hr></hr>
      <h3>What is your full name?</h3>
      <TextField></TextField>
      <h3>What degree are you currently pursuing?</h3>
      <FormControl sx={{ m: 1, minWidth: 250 }}>
        <TextField id="degree-selection" select label="Select">
            {degreeList.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </TextField>
      </FormControl>
      <h3>When is your anticipated graduation year?</h3>
      <YearPicker />
    </Box>
  );
}