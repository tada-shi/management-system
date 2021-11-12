import React from 'react';
import {AiFillFileExclamation}from 'react-icons/ai';
import {GiLetterBomb} from 'react-icons/gi';
import {FaHome, FaUserCircle} from 'react-icons/fa';
import {BsFillFileEarmarkExcelFill} from 'react-icons/bs';
import {MdWhereToVote} from 'react-icons/md';
import {RiLogoutBoxFill} from 'react-icons/ri';


export const sidebarData = [
    {
        title: "Home",
        path: "/home",
        icon: <FaHome/>,
        cName: "nav-text"
    },
    {
        title: "Notice",
        path: "/notice",
        icon: <GiLetterBomb/>,
        cName: "nav-text"
    },
    {
        title: "Leave Application",
        path: "/leave",
        icon: <AiFillFileExclamation/>,
        cName: "nav-text"
    },
    {
        title: "Complain Application",
        path: "/complain",
        icon: <BsFillFileEarmarkExcelFill/>,
        cName: "nav-text"
    },
    {
        title: "Attendance",
        path: "/attendance",
        icon: <MdWhereToVote/>,
        cName: "nav-text"
    },
    {
        title: "Profile",
        path: "/profile",
        icon: <FaUserCircle/>,
        cName: "nav-text"
    },
    {
        title: "Log Out",
        path: "/",
        icon: <RiLogoutBoxFill/>,
        cName: "nav-text"
    },
]
