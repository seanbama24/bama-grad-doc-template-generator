// Step 7 - Review
import * as React from 'react';
import Box from '@mui/material/Box';
import './Step7.css';

export default function Step7({name, degree, graduationYear}) {
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      <div>
        <h2 style={{color: '#9E1B32'}}>Review Your Paper</h2>
        <hr></hr>
        <h2>Student information</h2>
        <table style={{margin: '0 0 5em 2em'}}>
          <tr>
            <td>Student's Full Legal Name</td>
            <td>{name}</td>
          </tr>
          <tr>
            <td>Degree</td>
            <td>{degree}</td>
          </tr>
          <tr>
            <td>Graduation Year</td>
            <td>{graduationYear.getFullYear().toString()}</td>
          </tr>
        </table>

        <h2>Document Information</h2>
        <table style={{margin: '0 0 5em 2em'}}>
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
        <table style={{margin: '0 0 5em 2em'}}>
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
        <table style={{margin: '0 0 5em 2em'}}>
          <tr>
            <td>Abstract</td>
            <td>Placeholder</td>
          </tr>
        </table>  

        <h2>Optional Sections</h2>
        <table style={{margin: '0 0 5em 2em'}}>
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
        <table style={{margin: '0 0 5em 2em'}}>
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