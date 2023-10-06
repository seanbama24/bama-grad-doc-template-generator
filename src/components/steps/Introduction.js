import * as React from 'react';
import Box from '@mui/material/Box';

//This component is a placeholder for now to show that a component
//representing a step can be paired into the FormStepper component
export default function Introduction() {
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
        <p>The Format WIzard is designed to aid students who must produce a thesis, disseration or equivalent under the supervision of their committee chai, and successfully defend it as part of their degree requirements. The Format Wizard employs The Univeristy of Alabama's specific formatting guidelines to generate a template to which you insert your document's text.
        <br />
        Copies of Your Document will be places in UA Libraru Digital Repository and ProQuest (UMI/ProQuest). Because of this, your document must meet professional standards of published research. Both your committee and the Graduate College expect to see of careful attention to style and format in the document that you present to fulfill the requirements for your graduate degree.
        <br />
        Each page contains instructions and guides. Below is a sample formatted document. Please look at the document before using the Format Wizard so you have an idea of the final product being created as you walk through the steps.
        <br />
        For your reference, please review the <a href='http://services.graduate.ua.edu/etd/templates.html' target='_blank'>Graduate College Format Manual</a> and <a href='http://services.graduate.ua.edu/etd/td_sample.pdf'>Sample Formatted Document</a>.
        <br />
        <strong> For people with Macintosh (MAC), MacBook's, MacAir's, etc. computers if you have a high screen resolution sometimes the instructions will overlap the text fields. The recommended resolution for a Mac computers for this tool is 1040+ by 1280+.</strong>
        <br />
        If you revieve an error message while trying to access or use the Format Wizard, please clea your browser's cache and try accessing the tool again.
        <br />
        <strong>If you do not want previous created document data to be included, please check the below box and click next button.</strong>
        </p>
        <label>
          <input type="checkbox" />
          Clear Previous Document Data
        </label>
      </div>
    </Box>
  );
}