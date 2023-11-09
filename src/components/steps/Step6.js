// Step 6 - Graduate Supervisory Committee Information
import * as React from 'react';
import { useState } from 'react'
import Box from '@mui/material/Box';
import { TextField, Typography } from '@mui/material';
import { Button } from '@mui/base';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { CommitteeMemberBox } from '../CommitteeMemberBox';

export default function Step6({ checkmark, committeeMembers, committeeChairName, committeeCoChairName, updateCommitteeChair, updateCommitteeCoChair, updateCheckmark, updateCommitteeMembers }) {
  const generateNewMember = () => {
    const newMember = <CommitteeMemberBox boxtitle={"Committee Member"}/>;
    updateCommitteeMembers([...committeeMembers, newMember]);
  };
  const removeLastMember = () => {
    if (committeeMembers.length > 0) {
      const newMemberList = [...committeeMembers]
      newMemberList.splice(committeeMembers.length - 1, 1)
      updateCommitteeMembers(newMemberList);
    }
  };
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

        <CommitteeMemberBox boxtitle={"Committee Chair"} handler={updateCommitteeChair} text={committeeChairName}/>
        
        <FormControlLabel control={<Checkbox id='chapter-checkbox' checked={checkmark} onChange={updateCheckmark} style={{color: '#9E1B32'}}/>} label="Would you like add a Co-Chair?" />
        {checkmark ? 
        <div id="chapter-input">
          <CommitteeMemberBox boxtitle={"Co-Chair"} handler={updateCommitteeCoChair} text={committeeCoChairName}/>
        </div> : <div id="empty-input"></div>}
      </div>
      
      <div>
        <div id="chapter-input">
          {committeeMembers}
          <div style={{marginTop: '1em'}}>
            <Button onClick={generateNewMember} style={{marginRight: '1em', backgroundColor: '#9E1B32', borderRadius: '20px', color: 'white', border: '10px solid #9E1B32'}}>Add committee member</Button>
            <Button onClick={removeLastMember} style={{backgroundColor: '#9E1B32', borderRadius: '20px', color: 'white', border: '10px solid #9E1B32'}}>Remove last committee member</Button>
          </div>
        </div>
      </div>
    </Box>
  );
}