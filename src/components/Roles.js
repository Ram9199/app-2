import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Button from '@mui/material/Button';

export default function Roles() {
  return (
    <Box sx={{ minWidth: 10,marginLeft:40 }}>
      <FormControl fullWidth >
        {/* <InputLabel variant="standard" htmlFor="uncontrolled-native" >
          Roles
        </InputLabel> */}
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
        >
          <option value={10}>Admin</option>
          <option value={20}>Manager</option>
          <option value={30}>TeamMember</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}