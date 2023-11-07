// Step 7 - Review
import * as React from 'react';
import Box from '@mui/material/Box';
import './Step7.css';

export default function Step7({updateStep, name, degree, graduationYear, style, docType, font, titleLine1, titleLine2, titleLine3, abstract, dedication, acknowledgements, preface, figures, tables, symbols, references, appendix, comchair, comcochair, includesCoChair}) {
  const handleEditInfo = (index) => {
    updateStep(index);
  };
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      <div>
        {/* <h2 style={{color: '#9E1B32'}}>Review Your Paper</h2>
        <hr></hr> */}
        <h2>Student Info: <a onClick={() => handleEditInfo(1)} style={{'color':'blue', 'text-decoration': 'underline'}}>Edit Student Info</a></h2>
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

        <h2>Document Information: <a onClick={() => handleEditInfo(2)} style={{'color':'blue', 'text-decoration': 'underline'}}>Edit Document Info</a></h2>
        <table style={{margin: '0 0 5em 2em'}}>
          <tr>
            <td>Style Guide</td>
            <td>{style}</td>
          </tr>
          <tr>
            <td>Template Type</td>
            <td>{docType}</td>
          </tr>
          <tr>
            <td>Font Type</td>
            <td>{font}</td>
          </tr>
          <tr>
            <td>Font Size</td>
            <td>Placeholder</td>
          </tr>
          <tr>
            <td>Title Line 1</td>
            <td>{titleLine1}</td>
          </tr>
          <tr>
            <td>Title Line 2</td>
            <td>{titleLine2}</td>
          </tr>
          <tr>
            <td>Title Line 3</td>
            <td>{titleLine3}</td>
          </tr>
        </table>

        <h2>Table of Contents: <a onClick={() => handleEditInfo(3)} style={{'color':'blue', 'text-decoration': 'underline'}} >Edit Table of Contents</a></h2>{/*<div onClick={handleEditInfo(3)}>Edit Table of Contents</div>*/}
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

        <h2>Abstract: <a onClick={() => handleEditInfo(4)} style={{'color':'blue', 'text-decoration': 'underline'}} >Edit Abstract</a></h2>{/*<div onClick={handleEditInfo(4)}>Edit Abstract</div>*/}
        <table style={{margin: '0 0 5em 2em'}}>
          <tr>
            <td>Abstract</td>
            <td>{abstract}</td>
          </tr>
        </table>  

        <h2>Optional Sections: <a onClick={() => handleEditInfo(5)} style={{'color':'blue', 'text-decoration': 'underline'}}>Change Optional Sections Included</a></h2>{/*<div onClick={handleEditInfo(5)}>Edit Optional Sections</div>*/}
        <table style={{margin: '0 0 5em 2em'}}>
          <tr>
            <td>Dedication:</td>
            <td>{dedication ? 'Included':'Not Included'}</td>
          </tr>
          <tr>
            <td>Acknowledgments:</td>
            <td>{acknowledgements ? 'Included':'Not Included'}</td>
          </tr>
          <tr>
            <td>Preface:</td>
            <td>{preface ? 'Included':'Not Included'}</td>
          </tr>
          <tr>
            <td>Figures:</td>
            <td>{figures ? 'Included':'Not Included'}</td>
          </tr>
          <tr>
            <td>Tables:</td>
            <td>{tables ? 'Included':'Not Included'}</td>
          </tr>
          <tr>
            <td>Symbols:</td>
            <td>{symbols ? 'Included':'Not Included'}</td>
          </tr>
          <tr>
            <td>References:</td>
            <td>{references ? 'Included':'Not Included'}</td>
          </tr>
          <tr>
            <td>Appendix:</td>
            <td>{appendix ? 'Included':'Not Included'}</td>
          </tr>
        </table> 

        <h2>Graduate Supervisory Committee Members: <a onClick={() => handleEditInfo(6)} style={{'color':'blue', 'text-decoration': 'underline'}}>Edit Committee Members</a></h2>{/*<div onClick={handleEditInfo(6)}>Edit Committee Info</div>*/}
        <table style={{margin: '0 0 5em 2em'}}>
          <tr>
            <td>Chair</td>
            <td>{comchair}</td>
          </tr>
          {includesCoChair ? 
          <tr>
            <td>Co-Chair</td>
            <td>{comcochair}</td>
          </tr> : <div></div>}
          <tr>
            <td>Committee Member</td>
            <td>Placeholder</td>
          </tr>
        </table> 
      </div>
    </Box>
  );
}