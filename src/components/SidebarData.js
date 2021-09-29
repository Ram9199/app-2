import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
  
export const SidebarData = [
  {
    title: "Dashboard",
    path: "/Dashboard",
    // icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  
    // subNav: [
    //   {
    //     title: "Our Aim",
    //     path: "/about-us/aim",
    //     icon: <IoIcons.IoIosPaper />,
    //   },
    //   {
    //     title: "Our Vision",
    //     path: "/about-us/vision",
    //     icon: <IoIcons.IoIosPaper />,
    //   },
    // ],
  },
  {
    title: "CreateUser",
    path: "/CreateUser",
    // icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  
    // subNav: [
    //   {
    //     title: "Service 1",
    //     path: "/services/services1",
    //     icon: <IoIcons.IoIosPaper />,
    //     cName: "sub-nav",
    //   },
    //   {
    //     title: "Service 2",
    //     path: "/services/services2",
    //     icon: <IoIcons.IoIosPaper />,
    //     cName: "sub-nav",
    //   },
    //   {
    //     title: "Service 3",
    //     path: "/services/services3",
    //     icon: <IoIcons.IoIosPaper />,
    //   },
    // ],
  },
  {
    title: "CreateTask",
    path: "/CreateTask",
    // icon: <FaIcons.FaPhone />,
  },
 
  {
    title: "ViewTask",
    path: "/ViewTask",
    // icon: <FaIcons.FaEnvelopeOpenText />,
  
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  
    subNav: [
      {
        title: "Todo",
        path: "/Todo/Todo1",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Ongoing",
        path: "/Ongoing/Ongoing2",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Completed",
        path: "/Completed/Completed3",
        icon: <IoIcons.IoIosPaper />,
      },

      
    ],
  },
  {
    title: "CreateRole",
    path: "/CreateRole",
    // icon: <IoIcons.IoMdHelpCircle />,
  },
];