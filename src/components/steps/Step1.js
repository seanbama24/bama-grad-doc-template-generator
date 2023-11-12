// Step 1 - Student Information
// import * as React from 'react';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { degreeList } from '../../fieldValues';
import { colors } from '@mui/material';
import { red } from '@mui/material/colors';

export default function Step1({ name, degree, gradYear, updateName, updateDegree, updateGradYear}) {
  console.log(degreeList.sort());
  function YearPicker() {
    const MyDatePicker = () => {
      // const [startDate, setStartDate] = useState(new Date());
  
      return (
        <DatePicker
          style={{borderColor: "red"}}
          selected={gradYear}
          onChange={updateGradYear}
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
      <h3>What is your full name?</h3>
      <TextField value={name} onChange={updateName} /* required={true} label="What is your full name?"*/></TextField>
      <h3>What degree are you currently pursuing?</h3>
      <FormControl sx={{ minWidth: 250 }}>
        <TextField id="degree-selection" select label="Select" value={degree} onChange={updateDegree}>
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