// Step 6 - Graduate Supervisory Committee Information
import * as React from 'react';
import { useState } from 'react'
import Box from '@mui/material/Box';
import { TextField, Typography } from '@mui/material';
import { Button } from '@mui/base';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { CommitteeMemberBox } from '../CommitteeMemberBox';

export default function Step6({ form, setForm }) {
  const updateMember = (member, index) => {
    let newMembers = form.committeeMembers
    newMembers[index] = member
    setForm({...form, committeeMembers: newMembers})
  }

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      <div>
        <h3>Adding Committee Members:</h3>
        <Typography>For a Thesis, you need at least three people on the committee.</Typography>
        <Typography>For an EdD, you need at least four people on the committee.</Typography>
        <Typography>For a PhD, you need at least five people on the committee.</Typography>

        <CommitteeMemberBox boxtitle={"Committee Chair *"} handler={(e) => setForm({...form, committeeChair: e.target.value})} text={form.committeeChair}/>
        
        <FormControlLabel control={<Checkbox id='chapter-checkbox' checked={form.includesCoChair} onChange={(e) => setForm({...form, includesCoChair: e.target.checked})} style={{color: '#9E1B32'}}/>} label="Would you like add a Co-Chair?" />
        {form.includesCoChair ? 
        <div id="chapter-input">
          <CommitteeMemberBox boxtitle={"Co-Chair *"} handler={(e) => setForm({...form, committeeCoChair: e.target.value})} text={form.committeeCoChair}/>
        </div> : <div id="empty-input"></div>}
      </div>
      
      <div>
        <div id="chapter-input">
          {form.committeeMembers.map((member, index) => <CommitteeMemberBox boxtitle={"Committee Member *"} handler={(e) => updateMember(e.target.value, index)} text={form.committeeMembers[index]}/>)}
          <div style={{marginTop: '1em'}}>
            <Button onClick={() => setForm({...form, committeeMembers: [...form.committeeMembers, '']})} style={{marginRight: '1em', backgroundColor: '#9E1B32', borderRadius: '20px', color: 'white', border: '10px solid #9E1B32'}}>Add committee member</Button>
            <Button onClick={() => setForm({...form, committeeMembers: form.committeeMembers.slice(0, form.committeeMembers.length-1)})} style={{backgroundColor: '#9E1B32', borderRadius: '20px', color: 'white', border: '10px solid #9E1B32'}}>Remove last committee member</Button>
          </div>
        </div>
      </div>
    </Box>
  );
}