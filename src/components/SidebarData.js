import React from "react";
import * as AiIcons from 'react-icons/ai'

export const SidebarData = [
    {
        title: 'Main',
        path: '/',
        icon: <AiIcons.AiOutlineEnvironment/>,
        cName: 'nav-text'
    },
    {
        title: 'Statistics',
        path: '/statistics',
        icon: <AiIcons.AiOutlineFund/>,
        cName: 'nav-text'
    },
    {
        title: 'About',
        path: '/about',
        icon: <AiIcons.AiOutlineInfoCircle/>,
        cName: 'nav-text'
    },
    {
        title: 'Credits',
        path: '/credits',
        icon: <AiIcons.AiOutlinePicRight/>,
        cName: 'nav-text'
    },
]