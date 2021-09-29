import React from 'react'

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import Box from '@mui/material/Box';

import AccountBoxIcon from '@mui/icons-material/AccountBox';

export default function UserIcon() {
    return (
        <Box sx={{ minWidth: 40,marginLeft:1 }}>
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
         
          
         <div className="usericon">
          <AccountBoxIcon variant="contained" {...bindTrigger(popupState)}>
            Dashboard
          </AccountBoxIcon>
         
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>Profile</MenuItem>
            <MenuItem onClick={popupState.close}>My account</MenuItem>
            {/* <MenuItem onClick={popupState.close}>Logout</MenuItem> */}
          </Menu>
          </div>
        </React.Fragment>
      )}
    </PopupState>
    </Box>
          
    )
}
