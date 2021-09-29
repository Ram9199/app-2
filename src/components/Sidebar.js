
import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import IconButton from '@mui/material/IconButton';

  
 import Logout from './Logout';

import Roles from './Roles';
import UserIcon from "./UserIcon";

const Nav = styled.div`
background: #2576e8;

  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
  
const NavIcon = styled(Link)`
  margin-left: 2rem; 
  font-size: 2rem;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  
`;
  
const SidebarNav = styled.nav`
  
  background-color:#000208;
  width: 170px;
  height: 120vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;
  
const SidebarWrap = styled.div`
  width: 100%;
`;
  
const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  
  const showSidebar = () => setSidebar(!sidebar);
  
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavIcon to="#">
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
          <h1
            style={{ textAlign: "center", 
                     marginLeft: "450px", 
                     marginBottom: "25px",
                     marginTop: "20px",
                     color: "white" }}
          >
          Application
          </h1>

                   

          <Roles ></Roles>
         
         <UserIcon></UserIcon>
          
          <Logout></Logout>
          

        </Nav>
        <SidebarNav sidebar={sidebar} inputMode="">
          <SidebarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
        
        
      </IconContext.Provider>

      {/* <IconContext.Provider value={{ color: "#fff" }}> */}
        {/* <Nav> */}
          
{/*           
        </Nav> */}
        {/* <SidebarNav sidebar={sidebar} inputMode="">
          <SidebarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider> */}
    </>
  );
};
  
export default Sidebar;





// background: #15171c;
