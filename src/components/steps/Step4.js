// Step 4 - Abstract
import * as React from 'react';
import Box from '@mui/material/Box';
import { TextField, Typography } from '@mui/material';

export default function Step4({form, setForm}) {
  // const [abstractText, setAbstractText] = useState('');
  const getWordCount = () => {
    // Split the text by whitespace and filter out empty strings
    const words = form.abstractText.trim().split(/\s+/).filter(Boolean);
    return words.length;
  };
  const handleAbstractText = (event) => {
    const words = event.target.value.trim().split(/\s+/).filter(Boolean)
    if (words.length <= 350) {
      setForm({...form, abstractText: event.target.value})
    }
  };
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      <div>
        <Typography variant="h7" fontWeight="bold">Abstract *</Typography>
        <TextField 
          variant="outlined" 
          required
          multiline
          fullWidth
          rows={4} 
          width="100%"
          value={form.abstractText}
          onChange={
            (e) => handleAbstractText(e)}/>
          
        <Typography marginBottom="20px">Type or copy your abstract here.</Typography>

        <Typography>Quick notes about the abstract:</Typography>
        <ol>
          <li>Do not use future tense.</li>
          <li>Do not include bibliographic citations.</li>
          <li>After you complete your abstract, ensure that it has proper paragraphs.</li>
          <li>Make sure to summarize actual results and findings.</li>
          <li>Do not use first person plurals (we, our, us).</li>
        </ol>

        <Typography fontWeight="bold">Please note: The abstract must not exceed 350 words.</Typography>
        <Typography>Your word count is {getWordCount()}.</Typography>
      </div>
    </Box>
  );
}