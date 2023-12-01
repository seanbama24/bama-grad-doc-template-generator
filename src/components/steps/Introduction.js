// Step 0 - Introduction
import * as React from 'react';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Introduction({checkmark, onClick}) {
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
    >
        <p>This tool is designed to aid students who must produce a thesis, dissertation, or equivalent under the supervision of their committee chair and successfully defend it as part of their degree requirements. It employs The University of Alabama's specific formatting guidelines to generate a template to which you insert your document's text.</p>
        <p>Copies of your Document will be placed in the UA Library Digital Repository and ProQuest (UMI/ProQuest). Because of this, your document must meet professional standards of published research. Both your committee and your Graduate School expect to see careful attention to style and format in the document you present to fulfill the requirements for your graduate degree.</p>
        <p>Each page contains instructions and guides. Below is a sample formatted document. Please look at the document before using this tool, so you have an idea of the final product being created as you walk through the steps.</p>
        <p>For your reference, please review the <a href='https://graduate.ua.edu/current-students/thesis-and-dissertations/' target='_blank'>Graduate School Format Manual</a> and <a href='https://graduate.ua.edu/wp-content/uploads/2022/10/Sample-ETD-Preliminary-Pages-Suggested-Layout-and-Format.pdf' target='_blank'>Sample Formatted Document</a>.</p>
        {/* <p><strong> For people with Macintosh (MAC), MacBook's, MacAir's, etc. computers if you have a high screen resolution sometimes the instructions will overlap the text fields. The recommended resolution for a Mac computers for this tool is 1040+ by 1280+.</strong></p> */}
        <p>If you receive an error message while trying to access or use this tool, please clear your browser's cache and try accessing the tool again.</p>
    </Box>
  );
}