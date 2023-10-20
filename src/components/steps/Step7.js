import * as React from 'react';
import Box from '@mui/material/Box';
import './Step7.css';

//This component is a placeholder for now to show that a component
//representing a step can be paired into the FormStepper component
export default function Step7() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div style={{textAlign: 'center'}}>
        <h1>Review Your Paper</h1>
        <h2>Student information</h2>
        <h4>Edit this section</h4>
        <table>
          <tr>
            <td>Student's Full Legal Name</td>
            <td>Placeholder</td>
          </tr>
          <tr>
            <td>Degree</td>
            <td>Placeholder</td>
          </tr>
          <tr>
            <td>Graduation Year</td>
            <td>Placeholder</td>
          </tr>
        </table>

        <h2>Document Information</h2>
        <h4>Edit this section</h4>
        <table>
          <tr>
            <td>Template Type</td>
            <td>Placeholder</td>
          </tr>
          <tr>
            <td>Style Guide</td>
            <td>Placeholder</td>
          </tr>
          <tr>
            <td>Font Type</td>
            <td>Placeholder</td>
          </tr>
          <tr>
            <td>Font Size</td>
            <td>Placeholder</td>
          </tr>
          <tr>
            <td>Title Line 1</td>
            <td>Placeholder</td>
          </tr>
          <tr>
            <td>Title Line 2</td>
            <td>Placeholder</td>
          </tr>
          <tr>
            <td>Title Line 3</td>
            <td>Placeholder</td>
          </tr>
        </table>

        <h2>Table of Contents</h2>
        <h4>Edit this section</h4>
        <table>
          <tr>
            <td>Format Type</td>
            <td>Placeholder</td>
          </tr>
          <tr>
            <td>Generate TOC</td>
            <td>Placeholder</td>
          </tr>
        </table>

        <h2>Abstract</h2>
        <h4>Edit this section</h4>
        <table>
          <tr>
            <td>Abstract</td>
            <td>Placeholder</td>
          </tr>
        </table>  

        <h2>Optional Sections</h2>
        <h4>Edit this section</h4>
        <table>
          <tr>
            <td>Dedication:</td>
            <td>Placeholder</td>
          </tr>
          <tr>
            <td>Acknowledgments:</td>
            <td>Placeholder</td>
          </tr>
          <tr>
            <td>Preface:</td>
            <td>Placeholder</td>
          </tr>
          <tr>
            <td>Figures:</td>
            <td>Placeholder</td>
          </tr>
          <tr>
            <td>Tables:</td>
            <td>Placeholder</td>
          </tr>
          <tr>
            <td>Symbols:</td>
            <td>Placeholder</td>
          </tr>
          <tr>
            <td>References:</td>
            <td>Placeholder</td>
          </tr>
          <tr>
            <td>Appendix:</td>
            <td>Placeholder</td>
          </tr>
        </table> 

        <h2>Graduate Supervisory Committee Members</h2>
        <h4>Edit this section</h4>
        <table>
          <tr>
            <td>Chair</td>
            <td>Placeholder</td>
          </tr>
          <tr>
            <td>Co Chair</td>
            <td>Placeholder</td>
          </tr>
          <tr>
            <td>Committee Member</td>
            <td>Placeholder</td>
          </tr>
        </table> 
      </div>
    </Box>
  );
}