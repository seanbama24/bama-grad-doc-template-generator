// Step 8 - Create Document
import * as React from 'react';
import Box from '@mui/material/Box';

export default function Step8() {
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      <div>
        <p>Once you have created your document, insert your text into the Additional information sections, and into each chapter. Please note: you must update the page numbers in the Table of Contents to correspond with your chapters in the document once you have inserted your content. Return to the review step to make changes to the document.</p>
        <p>For your reference, please review the <a href='http://services.graduate.ua.edu/etd/templates.html' target='_blank'>Graduate School Format Manual</a> and <a href='http://services.graduate.ua.edu/etd/td_sample.pdf' target='_blank'>Sample Formatted Document</a>.</p>
        <p>By clicking the Create Document button, a Word document will be generated that meets UA Format Review guidelines. This tool has successfully been tested and verified with the version of Word that is included in Office 365. You can get Office 365 Education Edition for free <a href='https://oit.ua.edu/software/microsoft-office-365-education/' target='_blank'>here</a>.</p>
        <p>Once you have generated your document by clicking on "Create Document," save it as a Microsoft Word Document. When you open it you'll be asked if you'd like to update fields. Click yes.</p>
        <p>Guides and Hints:</p>
        <ol>
          <li>First level headings of each chapter are formatted for you. Only paste text and subheadings of chapters into the generated document.</li>
          <li>Check the abstract to ensure that no special characters were turned to coding; if they were, correct accordingly.</li>
          <li>Check the pagination of the Table of Contents, List of Tables, List of Figures, et cetera, against the pages of the finished document.</li>
          <li>Check your citations to ensure they follow your chosen style guide.</li>
          <li>Save the generated document as a Word file.</li>
          <li>See the format manual for further information on tables, figures, and symbols/nomenclature</li>
          <li>See the style guide quick references for further information specific to style guides.</li>
        </ol>
        <p>After you click Create Document, changes to the created document can be made through editing in the review step. To return to the review step click the back button. Note, once you click create document again, you will need to reinsert text if necessary.</p>
      </div>
    </Box>
  );
}