// Step 7 - Review
import * as React from 'react';
import Box from '@mui/material/Box';
// import './Step7.css';
import {
  TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper
} from '@mui/material'
import { tab } from '@testing-library/user-event/dist/tab';

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

    <h3 style={{'color':'black'}}>Click <a onClick={() => handleEditInfo(1)} style={{'color':'#9E1B32', 'text-decoration': 'underline'}}>here</a> to edit Student Information</h3>
      <TableContainer sx={{border: '1px solid black'}}>
        <Table aria-label='simple table'>
          <TableBody>
            <TableRow>
              <TableCell>Students Full Legal Name</TableCell>
              <TableCell>{name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Degree</TableCell>
              <TableCell>{degree}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Graduation Year</TableCell>
              <TableCell>{graduationYear.getFullYear().toString()}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

    <h3 style={{'color':'black'}}>Click <a onClick={() => handleEditInfo(2)} style={{'color':'#9E1B32', 'text-decoration': 'underline'}}>here</a> to edit Document Information</h3>
      <TableContainer sx={{border: '1px solid black'}}>
        <Table aria-label='simple table'>
          <TableBody>
            <TableRow>
              <TableCell>Style Guide</TableCell>
              <TableCell>{style}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Template Type</TableCell>
              <TableCell>{docType}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Font Type</TableCell>
              <TableCell>{font}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Font Size</TableCell>
              <TableCell>{12}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Title Line 1</TableCell>
              <TableCell>{titleLine1}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Title Line 2</TableCell>
              <TableCell>{titleLine2}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Title Line 3</TableCell>
              <TableCell>{titleLine3}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <h3 style={{'color':'black'}}>Click <a onClick={() => handleEditInfo(3)} style={{'color':'#9E1B32', 'text-decoration': 'underline'}}>here</a> to edit Table of Contents</h3>
      <TableContainer sx={{border: '1px solid black'}}>
        <Table aria-label='simple table'>
          <TableBody>
            <TableRow>
              <TableCell>Format Type</TableCell>
              <TableCell>Placeholder</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Generate TOC</TableCell>
              <TableCell>Placeholder</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <h3 style={{'color':'black'}}>Click <a onClick={() => handleEditInfo(4)} style={{'color':'#9E1B32', 'text-decoration': 'underline'}}>here</a> to edit Abstract</h3>
      <TableContainer sx={{border: '1px solid black'}}>
        <Table aria-label='simple table'>
          <TableBody>
            <TableRow>
              {/* <TableCell>Abstract</TableCell> */}
              <TableCell>{abstract}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <h3 style={{'color':'black'}}>Click <a onClick={() => handleEditInfo(5)} style={{'color':'#9E1B32', 'text-decoration': 'underline'}}>here</a> to edit Additional Document Sections</h3>
      <TableContainer sx={{border: '1px solid black'}}>
        <Table aria-label='simple table'>
          <TableBody>
            <TableRow>
              <TableCell>Dedication</TableCell>
              <TableCell>{dedication ? 'Included':'Not Included'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Acknowledgements</TableCell>
              <TableCell>{acknowledgements ? 'Included':'Not Included'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Preface</TableCell>
              <TableCell>{preface ? 'Included':'Not Included'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Figures</TableCell>
              <TableCell>{figures ? 'Included':'Not Included'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Tables</TableCell>
              <TableCell>{tables ? 'Included':'Not Included'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Symbols</TableCell>
              <TableCell>{symbols ? 'Included':'Not Included'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>References</TableCell>
              <TableCell>{references ? 'Included':'Not Included'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Appendix</TableCell>
              <TableCell>{appendix ? 'Included':'Not Included'}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <h3 style={{'color':'black'}}>Click <a onClick={() => handleEditInfo(6)} style={{'color':'#9E1B32', 'text-decoration': 'underline'}}>here</a> to edit Graduate Supervisory Committee Information</h3>
      <TableContainer sx={{border: '1px solid black'}}>
        <Table aria-label='simple table'>
          <TableBody>
            <TableRow>
              <TableCell>Chair</TableCell>
              <TableCell>{comchair}</TableCell>
            </TableRow>
            { includesCoChair ?
            <TableRow>
              <TableCell>Co-Chair</TableCell>
              <TableCell>{comcochair}</TableCell>
            </TableRow> : <div></div>}
            <TableRow>
              <TableCell>Committee Member</TableCell>
              <TableCell>Placeholder</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}