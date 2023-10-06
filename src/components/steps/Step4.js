import * as React from 'react';
import Box from '@mui/material/Box';
import { TextField, Typography } from '@mui/material';
import { useState } from 'react';

//This component is a placeholder for now to show that a component
//representing a step can be paired into the FormStepper component
export default function Step4() {

  const [wordCount, setWordCount] = useState(0);

  return (
    <Box
      component="form"
      sx={{
        "width": "60%"
      }}
      noValidate
      autoComplete="off"
      margin="auto"
    >
      <div>
        <Typography variant="h5">Abstract</Typography>
        <TextField 
          variant="outlined" 
          required
          multiline
          fullWidth
          rows={4} 
          width="100%"/>
        <Typography marginBottom="20px">Type or copy your abstract here</Typography>

        <Typography>Quick notes about the abstract:</Typography>
        <ol>
          <li>Do not use future tense.</li>
          <li>Do not include bibliographic citations.</li>
          <li>After you complete your abstract, ensure that it has proper paragraphs.</li>
          <li>Make sure to summarize actual results and findings.</li>
          <li>Do not use first person plurals (we, our, us).</li>
        </ol>

        <Typography fontWeight="bold">Please note: The abstract must not exceed 350 words.</Typography>
        <Typography>Your word count is {wordCount}</Typography>
      </div>
    </Box>
  );
}