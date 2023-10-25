// import * as React from 'react';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const degreeList = [
  {value: 'computerScience', label: 'Computer Science'}
];

//This component is a placeholder for now to show that a component
//representing a step can be paired into the FormStepper component
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
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div style={{margin: '5em'}}>
        <h2 style={{color: '#9E1B32'}}>Tell Us About Yourself</h2>
        <hr></hr>
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
        <h3>When is your anticipated graduation year?</h3>
        <YearPicker/>
      </div>
    </Box>
  );
}