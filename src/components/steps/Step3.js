// Step 3 - Table of Contents
import * as React from 'react';
// import { useState } from 'react'
import Box from '@mui/material/Box';
import { Button } from '@mui/base';
import { ChapterTitleBox } from '../ChapterTitleBox';
import { FormControl, FormControlLabel, Checkbox, TextField, InputAdornment } from '@mui/material';
import FormHelperText from '@mui/material/FormHelperText';

export default function Step3({ form, setForm }) {

  const updateHeading = (heading, index) => {
    let newHeadings = form.chapterHeadings
    newHeadings[index] = heading
    setForm({...form, chapterHeadings: newHeadings})
  }

  // const headingObjects = chapterHeadings.map((heading) => heading.object)
  return (
    <Box
      component="form"
    >
      <div>
        {/* <label htmlFor='chapter-checkbox'>
          <input type="checkbox" id='chapter-checkbox' checked={isChecked} onChange={checkHandler}/>
          Would you like to auto-create sample chapter headings?
        </label>  */}
        <FormControlLabel control={<Checkbox id='chapter-checkbox' checked={form.includesChapterHeadings} onChange={(e) => setForm({...form, includesChapterHeadings: e.target.checked})} style={{color: '#9E1B32'}}/>} label="Would you like to auto-create sample chapter headings?" />

        {form.includesChapterHeadings ? <div id="chapter-input">
          {form.chapterHeadings.map((heading, index) => {
            return(<div>
                    <h3>Chapter Title {index + 1}</h3>
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
                      <TextField
                        id="filled-adornment-weight"
                        endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                        aria-describedby="filled-weight-helper-text"
                        inputProps={{
                          'aria-label': 'weight',
                        }}
                        value={form.chapterHeadings[index]}
                        onChange={(e) => updateHeading(e.target.value, index)}
                      />
                      <FormHelperText id="filled-weight-helper-text">Enter chapter title</FormHelperText>
                    </FormControl>
                  </div>)
          })}
          <div style={{marginTop: '1em'}}>
            <Button onClick={() => setForm({...form, chapterHeadings: [...form.chapterHeadings, "Title goes here..."]})} style={{marginRight: '1em', backgroundColor: '#9E1B32', borderRadius: '20px', color: 'white', border: '10px solid #9E1B32'}}>Add one more</Button>
            <Button 
              onClick={() => {
                if(form.chapterHeadings.length > 0) {
                    setForm({...form, chapterHeadings: form.chapterHeadings.slice(0, form.chapterHeadings.length-1)})
                  }
                }
              } 
              style={{backgroundColor: '#9E1B32', borderRadius: '20px', color: 'white', border: '10px solid #9E1B32'}}>
                Remove previous
            </Button>
          </div>
        </div> : <div id="empty-input"></div>}
      </div>
    </Box>
  );
}