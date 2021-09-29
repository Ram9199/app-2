import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import Box from '@mui/material/Box';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
export default function Logout() {
  return (
    <Box sx={{ minWidth: 10,marginLeft:1 }}>
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
         
          <div>
          <LogoutIcon variant="contained" {...bindTrigger(popupState)}>
            
          </LogoutIcon>
         
          <Menu {...bindMenu(popupState)}>
            {/* <MenuItem onClick={popupState.close}>Profile</MenuItem>
            <MenuItem onClick={popupState.close}>My account</MenuItem> */}
            <MenuItem onClick={popupState.close}>Logout</MenuItem>
          </Menu>
          </div>
        </React.Fragment>
      )}
    </PopupState>
    </Box>
  );
}