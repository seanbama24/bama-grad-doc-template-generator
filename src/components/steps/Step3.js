// Step 3 - Table of Contents
import * as React from 'react';
// import { useState } from 'react'
import Box from '@mui/material/Box';
import { Button } from '@mui/base';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { ChapterTitleBox } from '../ChapterTitleBox';

export default function Step3({ checkmark, chapterHeadings, chapterHeadingsText, updateCheckmark, updateChapterHeadings, updateChapterHeadingsText, handleNewText}) {
  const generateNewChapter = () => {
    const fillerText = 'Title Goes Here...';
    // var updatedChapterTexts = [...chapterHeadingsText, fillerText];
    const newChapter = <ChapterTitleBox num={chapterHeadings.length + 1} text={fillerText} updateText={updateChapterHeadingsText}/>;
    updateChapterHeadings([...chapterHeadings, newChapter]);
    // chapterHeadingsText.push(newText);
    // handleNewText(updatedChapterTexts);
    // console.log('adding ' + chapterHeadingsText);
  };
  const removeLastChapter = () => {
    if (chapterHeadings.length > 1) {
      const newChapterList = [...chapterHeadings];
      newChapterList.pop();
      const newTextList = [...chapterHeadingsText];
      newTextList.pop();
      newTextList.pop();
      // chapterHeadings.pop();
      // newTextList.splice(chapterHeadings.length - 1, 1);
      updateChapterHeadings(newChapterList);
      handleNewText(newTextList);
      console.log('deleting ' + chapterHeadingsText);
      // chapterHeadings = newChapterList
    }
  };
  if (chapterHeadings.length === 0) {
    generateNewChapter();
  }
  // const headingObjects = chapterHeadings.map((heading) => heading.object)
  return (
    <Box
      component="form"
    >
      <div>
        <h2 style={{color: '#9E1B32'}}>Table of Contents Information</h2>
        <hr></hr>
        {/* <label htmlFor='chapter-checkbox'>
          <input type="checkbox" id='chapter-checkbox' checked={isChecked} onChange={checkHandler}/>
          Would you like to auto-create sample chapter headings?
        </label>  */}
        <FormControlLabel control={<Checkbox id='chapter-checkbox' checked={checkmark} onChange={updateCheckmark} style={{color: '#9E1B32'}}/>} label="Would you like to auto-create sample chapter headings?" />

        {checkmark ? 
        <div id="chapter-input">
          {chapterHeadings}
          <div style={{marginTop: '1em'}}>
            <Button onClick={generateNewChapter} style={{marginRight: '1em', backgroundColor: '#9E1B32', borderRadius: '20px', color: 'white', border: '10px solid #9E1B32'}}>Add one more</Button>
            <Button onClick={removeLastChapter} style={{backgroundColor: '#9E1B32', borderRadius: '20px', color: 'white', border: '10px solid #9E1B32'}}>Remove previous</Button>
          </div>
        </div> : <div id="empty-input"></div>}
      </div>
    </Box>
  );
}