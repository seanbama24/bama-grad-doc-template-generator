import * as React from 'react';
import { TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';

export const ChapterTitleBox = ({ num, text, updateText}) => {
    // const handleTextsUpdate = (event) => {
    //   updateText(num, event);
    // }
    return (
      <div>
        <h3>Chapter Title {num}</h3>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
          <TextField
            id="filled-adornment-weight"
            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
            aria-describedby="filled-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
            value={text}
            onChange={updateText(num)}
          />
        </FormControl>
      </div>
    )
}
