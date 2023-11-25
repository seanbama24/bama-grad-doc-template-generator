// Step 7 - Review
import * as React from 'react';
import Box from '@mui/material/Box';
// import './Step7.css';
import {
  TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper
} from '@mui/material'
import { tab } from '@testing-library/user-event/dist/tab';

export default function Step7({updateStep, form, setForm}) {
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
              <TableCell>{form.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Degree</TableCell>
              <TableCell>{form.degree}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Graduation Year</TableCell>
              <TableCell>{form.gradYear.getFullYear().toString()}</TableCell>
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
              <TableCell>{form.style}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Document Type</TableCell>
              <TableCell>{form.docType}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Font Type</TableCell>
              <TableCell>{form.font}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Font Size</TableCell>
              <TableCell>{12}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Title Line 1</TableCell>
              <TableCell>{form.titleLine1}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Title Line 2</TableCell>
              <TableCell>{form.titleLine2}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Title Line 3</TableCell>
              <TableCell>{form.titleLine3}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <h3 style={{'color':'black'}}>Click <a onClick={() => handleEditInfo(3)} style={{'color':'#9E1B32', 'text-decoration': 'underline'}}>here</a> to edit Table of Contents</h3>
      <TableContainer sx={{border: '1px solid black'}}>
        {form.includesChapterHeadings ?
          <Table aria-label='simple table'>
            <TableBody>
              <TableRow>
                <TableCell>Auto-Create Sample Chapter Headings</TableCell>
                <TableCell>Yes</TableCell>
              </TableRow>
              {form.chapterHeadings.map((chapter, index) => (
                <TableRow>
                  <TableCell>Chapter {index + 1}</TableCell>
                  <TableCell>{chapter}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        :
          <Table aria-label='simple table'>
            <TableBody>
              <TableRow>
                <TableCell>Auto-Create Sample Chapter Headings</TableCell>
                <TableCell>No</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        }
      </TableContainer>

      <h3 style={{'color':'black'}}>Click <a onClick={() => handleEditInfo(4)} style={{'color':'#9E1B32', 'text-decoration': 'underline'}}>here</a> to edit Abstract</h3>
      <TableContainer sx={{border: '1px solid black'}}>
        <Table aria-label='simple table'>
          <TableBody>
            <TableRow>
              <TableCell>{form.abstractText}</TableCell>
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
              <TableCell>{form.includeDedication ? 'Included':'Not Included'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Acknowledgements</TableCell>
              <TableCell>{form.includeAcknowledgements ? 'Included':'Not Included'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Preface</TableCell>
              <TableCell>{form.includePreface ? 'Included':'Not Included'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Figures</TableCell>
              <TableCell>{form.includeFigures ? 'Included':'Not Included'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Tables</TableCell>
              <TableCell>{form.includeTables ? 'Included':'Not Included'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Symbols</TableCell>
              <TableCell>{form.includeSymbols ? 'Included':'Not Included'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>References</TableCell>
              <TableCell>{form.includeReferences ? 'Included':'Not Included'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Appendix</TableCell>
              <TableCell>{form.includeAppendix ? 'Included':'Not Included'}</TableCell>
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
              <TableCell>{form.committeeChair}</TableCell>
            </TableRow>
            { form.includesCoChair ?
            <TableRow>
              <TableCell>Co-Chair</TableCell>
              <TableCell>{form.committeeCoChair}</TableCell>
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