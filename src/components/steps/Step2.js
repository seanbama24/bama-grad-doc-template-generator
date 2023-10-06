// Step 2 - Document Information
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const templateList = [
  {
    value: 'word',
    label: 'Microsoft Word',
  }
];

const styleGuideList = [
  {
    value: 'style1',
    label: 'Style 1',
  },
  {
    value: 'style2',
    label: 'Style 2',
  }
];

const docTypeList = [
  {
    value: 'type1',
    label: 'Document Type 1',
  },
  {
    value: 'type2',
    label: 'Document Type 2',
  }
];

const fontList = [
  {
    value: 'arial',
    label: 'Arial',
  },
  {
    value: 'timesnewroman',
    label: 'Times New Roman',
  }
];

export default function Step2() {
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
        <h2>Document Information</h2>
        <h3>Which template would you like to use?</h3>
        <TextField
          id="template-selector"
          select
          label="Select"
        >
          {templateList.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        
        <h3>Choose Style Guide</h3>
        <TextField
          id="style-guide-selector"
          select
          label="Select"
        >
          {styleGuideList.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        
        <h3>What is your document type?</h3>
        <TextField
          id="doc-type-selector"
          select
          label="Select"
        >
          {docTypeList.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        
        <h3>Choose an approved font</h3>
        <TextField
          id="font-selector"
          select
          label="Select"
        >
          {fontList.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}