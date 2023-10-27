// Step 3 - Table of Contents
import * as React from 'react';
import { useState } from 'react'
import Box from '@mui/material/Box';
import { TextField} from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import { Button } from '@mui/base';

export default function Step3() {
  const [isChecked, setIsChecked] = useState(false)
  const [generatedChapters, setGenerateChapters] = useState([< ChapterTitleBox num={1}/>])
  const checkHandler = () => {
    setIsChecked(!isChecked)
  }
  const generateNewChapter = () => {
    const newChapter = <ChapterTitleBox num={generatedChapters.length + 1} />;
    setGenerateChapters([...generatedChapters, newChapter]);
  };
  const removeLastChapter = () => {
    if (generatedChapters.length > 1) {
      const newChapterList = [...generatedChapters]
      newChapterList.splice(generatedChapters.length - 1, 1)
      setGenerateChapters(newChapterList);
    }
  };

  return (
    <Box
      component="form"
    >
      <div>
        <h2 style={{color: '#9E1B32'}}>Table of Contents Information</h2>
        <hr></hr>
        <label htmlFor='chapter-checkbox'>
          <input type="checkbox" id='chapter-checkbox' checked={isChecked} onChange={checkHandler}/>
          Would you like to auto-create sample chapter headings?
        </label> 

        {isChecked ? 
        <div id="chapter-input">
          {generatedChapters}
          <div style={{marginTop: '1em'}}>
            <Button onClick={generateNewChapter} style={{marginRight: '1em', backgroundColor: '#9E1B32', borderRadius: '20px', color: 'white', border: '10px solid #9E1B32'}}>Add one more</Button>
            <Button onClick={removeLastChapter} style={{backgroundColor: '#9E1B32', borderRadius: '20px', color: 'white', border: '10px solid #9E1B32'}}>Remove previous</Button>
          </div>
        </div> : <div id="empty-input"></div>}
      </div>
    </Box>
  );
}

const ChapterTitleBox = ({ num }) => {
  return (
    <div>
      <h3>Chapter Title {num}</h3>
      <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
        <TextField
          id="filled-adornment-weight"
          endAdornment={<InputAdornment position="end">kg</InputAdornment>}
          aria-describedby="filled-weight-helper-text"
          inputProps={{
            'aria-label': 'weight',
          }}
        />
      </FormControl>
    </div>
  )
}
