import * as React from 'react';
import { TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';

export const CommitteeMemberBox = ({ boxtitle, text, handler }) => {
    // const [text, setText] = React.useState('')
    // const handleText = (event) => {
    //     setText(event.target.value);
    // };
    return (
      <div>
        <h3>{boxtitle}</h3>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
          <TextField
            id="filled-adornment-weight"
            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
            aria-describedby="filled-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
            value={text}
            onChange={handler}
          />
        </FormControl>
      </div>
    )
}
