"use client"
import React, { useState } from 'react'
import { BsArrowLeftShort, BsSearch, BsChevronDown, BsFillImageFill, BsReverseLayoutTextSidebarReverse, BsPerson } from "react-icons/bs";
import { AiFillEnvironment, AiOutlineBarChart, AiOutlineFileText, AiOutlineMail, AiOutlineSetting, AiOutlineLogout } from "react-icons/ai";
import { BsAmd, BsAmazon, BsAndroid2, BsApple } from "react-icons/bs";

import { RiDashboardFill } from "react-icons/ri";

const SidebarFrame = () => {
    const [open, setOpen] = useState(true)
    const [submenuOpen, setSubmenuOpen] = useState(false)
    const Menus = [
        { title: "Dashboard" },
        { title: "Pages", icon: <AiOutlineFileText /> },
        { title: "Media", icon: <BsFillImageFill />, spacing: true },
        {
            title: "Project",
            icon: <BsReverseLayoutTextSidebarReverse />,
            submenu: true,
            submenuItems: [
                { title: "Express JS", icon: <BsAndroid2 /> },
                { title: "Next JS", icon: <BsAmazon /> },
                { title: "Laravel", icon: <BsAmd /> },
                { title: "CodeIgneter", icon: <BsApple /> }
            ]
        },
        { title: "Analytics", icon: <AiOutlineBarChart /> },
        { title: "Inbox", icon: <AiOutlineMail /> },
        { title: "Profile", icon: <BsPerson />, spacing: true },
        { title: "Setting", icon: <AiOutlineSetting /> },
        { title: "Logout", icon: <AiOutlineLogout /> }
    ]
    return (
        <div className={`bg-amber-300 h-screen p-5 pt-8 ${open ? "w-72" : "w-20"} duration-500 relative`}>
            {/* Logo */}
            <BsArrowLeftShort className={`text-black bg-white ${!open && "rotate-180"} duration-500 rounded-full text-3xl absolute -right-3 top-9 border cursor-pointer`} onClick={() => setOpen(!open)} />
            <div className='inline-flex items-center'>
                <AiFillEnvironment className={`bg-black text-white text-4xl rounded cursor-pointer block float-left mr-2 duration-500 p-1 ${!open && "rotate-[360deg]"}`} />
                <h1 className={`text-black origin-left font-medium text-lg duration-500 ${!open && "scale-0"}`}>Dashboard</h1>
            </div>

            {/* search */}
            <div className={`flex items-center rounded-md bg-amber-200 mt-6 py-2 justify-center ${!open ? "px-1" : "px-4"}`}>
                <BsSearch className={`text-black text-lg block float-left cursor-pointer ${open && "mr-2"}`} />
                <input type={"search"} placeholder='Search' className={`text-base bg-transparent w-full focus:outline-none ${!open && "hidden"}`} />
            </div>

            {/* List Menu */}
            <ul className='pt-2'>
                {
                    Menus.map((menu, index) => (
                        <React.Fragment key={index}>
                            <li className={`text-zinc-500 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-white rounded-md ${menu.spacing ? "mt-9" : "mt-2"}`}>
                                <span className='text-2xl block float-left'>
                                    {menu.icon ? menu.icon : <RiDashboardFill />}
                                </span>
                                <span className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"}`}>{menu.title}</span>
                                {
                                    menu.submenu && open && (
                                        <BsChevronDown className={`${submenuOpen && "rotate-180"}`} onClick={() => setSubmenuOpen(!submenuOpen)} />
                                    )
                                }
                            </li>
                            {
                                menu.submenu && submenuOpen && open && (
                                    <ul>
                                        {
                                            menu.submenuItems.map((subMenu, idx) => (
                                                <li key={idx} className='text-zinc-500 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-white rounded-md px-5'>
                                                    <span className='text-2xl block float-left'>
                                                        {subMenu.icon ? subMenu.icon : <RiDashboardFill />}
                                                    </span>
                                                    <span className={`text-base font-medium flex-1 duration-200`}>{subMenu.title}</span>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                )
                            }
                        </React.Fragment>
                    ))
                }
            </ul>
        </div >
    )
}

export default SidebarFrame