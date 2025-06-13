"use client"
import React, { useState } from 'react'
import { BsArrowLeftShort, BsSearch, BsChevronDown, BsFillImageFill, BsReverseLayoutTextSidebarReverse, BsPerson } from "react-icons/bs";
import { AiFillEnvironment, AiOutlineBarChart, AiOutlineFileText, AiOutlineMail, AiOutlineSetting, AiOutlineLogout } from "react-icons/ai";
import { BsAmd, BsAmazon, BsAndroid2, BsApple } from "react-icons/bs";

import { RiDashboardFill } from "react-icons/ri";
import Link from 'next/link';
import { logoutAction } from '@/lib/action';

const SidebarFrame = () => {
    const [open, setOpen] = useState(true)
    const [submenuOpen, setSubmenuOpen] = useState(false)
    const Menus = [
        { title: "Dashboard", path: "/dashboard" },
        { title: "List Menu", path: "/menu" },
        {
            title: "Article",
            icon: <AiOutlineFileText />,
            path: "",
            submenu: true,
            submenuItems: [
                { title: "List Content", icon: <BsAndroid2 />, path: "/artikel" },
                { title: "Tambah Content", icon: <BsAmazon />, path: "/artikel/add" }
            ]
        },
        // { title: "Media", path: "/media", icon: <BsFillImageFill />, spacing: true },
        // {
        //     title: "Project",
        //     icon: <BsReverseLayoutTextSidebarReverse />,
        //     path: "",
        //     submenu: true,
        //     submenuItems: [
        //         { title: "Express JS", icon: <BsAndroid2 /> },
        //         { title: "Next JS", icon: <BsAmazon /> },
        //         { title: "Laravel", icon: <BsAmd /> },
        //         { title: "CodeIgneter", icon: <BsApple /> }
        //     ]
        // },
        // { title: "Analytics", path: "/analytics", icon: <AiOutlineBarChart /> },
        // { title: "Inbox", path: "/inbox", icon: <AiOutlineMail /> },
        // { title: "Profile", path: "/user", icon: <BsPerson />, spacing: true },
        // { title: "Setting", path: "/setting", icon: <AiOutlineSetting /> },
        { title: "Logout", path: "", icon: <AiOutlineLogout /> }
    ]
    return (
        <div className={`sticky left-0 top-0 bg-amber-300 h-screen p-5 pt-8 ${open ? "w-80" : "w-20"} duration-500 relative z-50`}>
            {/* Logo */}
            <BsArrowLeftShort className={`text-black bg-white ${!open && "rotate-180"} duration-500 rounded-full text-3xl absolute z-20 -right-3 top-11 border cursor-pointer`} onClick={() => setOpen(!open)} />
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
                {Menus.map((menu, index) => {
                    const isLogout = menu.title.toLowerCase() === "logout";
                    const hasSubmenu = menu.submenu && open;

                    const handleClick = () => {
                        if (isLogout) {
                            logoutAction();
                        } else if (hasSubmenu) {
                            setSubmenuOpen(prev => (prev === index ? null : index)); // biar toggle per item
                        }
                    };

                    const listItem = (
                        <li
                            key={index}
                            onClick={handleClick}
                            className={`text-zinc-500 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-white rounded-md ${menu.spacing ? "mt-9" : "mt-2"
                                }`}
                        >
                            <span className='text-2xl block float-left'>
                                {menu.icon || <RiDashboardFill />}
                            </span>
                            <span className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"}`}>
                                {menu.title}
                            </span>
                            {hasSubmenu && (
                                <BsChevronDown
                                    className={`${submenuOpen === index ? "rotate-180" : ""}`}
                                />
                            )}
                        </li>
                    );

                    return (
                        <React.Fragment key={index}>
                            {isLogout ? listItem : <Link href={menu.path || "#"}>{listItem}</Link>}

                            {hasSubmenu && submenuOpen === index && (
                                <ul>
                                    {menu.submenuItems.map((subMenu, idx) => (
                                        <Link href={subMenu.path} 
                                        key={idx}>
                                            <li
                                                className='text-zinc-500 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-white rounded-md px-5'
                                            >
                                                <span className='text-2xl block float-left'>
                                                    {subMenu.icon || <RiDashboardFill />}
                                                </span>
                                                <span className='text-base font-medium flex-1 duration-200'>
                                                    {subMenu.title}
                                                </span>
                                            </li>
                                        </Link>
                                    ))}
                                </ul>
                            )}
                        </React.Fragment>
                    );
                })}
            </ul>

        </div >
    )
}

export default SidebarFrame