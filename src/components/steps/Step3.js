import * as React from 'react';
import { useState } from 'react'
import Box from '@mui/material/Box';
import { TextField} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputAdornment from '@mui/material/InputAdornment';
import FilledInput from '@mui/material/FilledInput';

import Input from '@mui/material/Input';
import { Button } from '@mui/base';

//This component is a placeholder for now to show that a component
//representing a step can be paired into the FormStepper component
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
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
    >
      <div style={{margin: '5em'}}>
        <label htmlFor='chapter-checkbox'>
          <input type="checkbox" id='chapter-checkbox' checked={isChecked} onChange={checkHandler}/>
          Would you like to create sample chapter headings
        </label> 
        {isChecked ? 
        <div id="chapter-input">
          {generatedChapters}
          {/* <div>
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
          <div>
            <h3>Chapter Title 2</h3>
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
          <div>
            <h3>Chapter Title 3</h3>
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
          </div> */}
          {/* <ChapterTitleBox num={4} /> */}
          <div>
            <Button onClick={generateNewChapter}>Add one more</Button>
            <Button onClick={removeLastChapter}>Remove previous</Button>
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
        {/* <FormHelperText id="filled-weight-helper-text">Please limit this line to 90 characters.</FormHelperText> */}
      </FormControl>
    </div>
  )
}
