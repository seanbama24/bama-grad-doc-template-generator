import * as React from 'react';
import Box from '@mui/material/Box';

//This component is a placeholder for now to show that a component
//representing a step can be paired into the FormStepper component
export default function Step8() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      </div>
    </Box>
  );
}