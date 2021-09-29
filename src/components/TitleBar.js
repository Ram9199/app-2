// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import Roles from './Roles';
// import Logout from './Logout';


// // import Tree from './Tree';

// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';




// export default function TitleBar() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar variant="dense">
//           <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 60 }}>
          
//           <PopupState variant="popover" popupId="demo-popup-menu">
//       {(popupState) => (
//         <React.Fragment>
//           {/* <MenuIcon variant="contained" {...bindTrigger(popupState)}>
//             Dashboard
//           </MenuIcon>
//           */}
//           {/* <Menu {...bindMenu(popupState)}>
//             <MenuItem onClick={popupState.close}>Profile</MenuItem>
//             <MenuItem onClick={popupState.close}>My account</MenuItem>
//             <MenuItem onClick={popupState.close}>Logout</MenuItem>
//           </Menu> */}
//         </React.Fragment>
//       )}
//     </PopupState>

//           </IconButton>
           
//           <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 40 }}>

          
//           <Typography variant="h6" color="inherit" component="div">
//             Application
//           </Typography>
//           </IconButton>
         
         
//           <Roles></Roles>
          
//           <Logout/>
         
//         </Toolbar>
        
//       </AppBar> 
//       <br></br>
//       <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 10 }}>
//           </IconButton>
         
//     </Box>
    
//   );
// }