'use client'

import { IoCheckmarkSharp, IoCloseSharp } from "react-icons/io5";
import React, { useState } from 'react'
import { formatDate } from '@/lib/utils';
import { useRouter } from 'next/navigation';

const MenuList = ({initValue}) => {
    const [menuData, setMenuData] = useState(initValue);

    const handleUpdate = async (menuId, currentStatus) => {
        
        console.log(`Curr : ${currentStatus}`);
        
        const newStatus = currentStatus === true ? false : true;
        console.log(`New : ${newStatus}`);
        

        try {
            await fetch(`/api/menuall`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ menu_id: menuId, is_active: newStatus }),
            });

            // update state lokal agar UI berubah
            setMenuData(prev =>
                prev.map(menu =>
                    menu.id === menuId ? { ...menu, is_active: newStatus } : menu
                )
            );
        } catch (err) {
            console.error("Gagal update status:", err);
        }
    };

    if (!menuData?.length) return <h1 className="text-2xl">No Menus Found</h1>
    return (
        <>
            <table className="w-full mt-3">
                <thead className="border-b border-gray-400">
                    <tr>
                        <th className="py-3 px-6 text-left text-sm">No</th>
                        <th className="py-3 px-6 text-left text-sm">Name</th>
                        <th className="py-3 px-6 text-left text-sm">Path</th>
                        <th className="py-3 px-6 text-center text-sm">Urutan</th>
                        <th className="py-3 px-6 text-center text-sm">Status</th>
                        <th className="py-3 px-6 text-left text-sm">Waktu di buat</th>
                        <th className="py-3 px-6 text-left text-sm">Waktu di update</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        menuData.map((menu, idx) => (
                            <tr key={menu.id}>
                                <td className="py-3 px-6">{++idx}.</td>
                                <td className="py-3 px-6">{menu.name}</td>
                                <td className="py-3 px-6">{menu.url}</td>
                                <td className="py-3 px-6 text-center">{menu.order}</td>
                                <td className="py-3 px-6">{menu.is_active ? <IoCheckmarkSharp onClick={() => handleUpdate(menu.id, menu.is_active)} className='mx-auto font-bold cursor-pointer text-green-600' /> : <IoCloseSharp onClick={() => handleUpdate(menu.id, menu.is_active)} className='mx-auto font-bold cursor-pointer text-red-600' />}</td>
                                <td className="py-3 px-6">{formatDate(menu.created_at)}</td>
                                <td className="py-3 px-6">{formatDate(menu.updated_at)}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default MenuList