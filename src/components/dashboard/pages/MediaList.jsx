import { getMenus } from '@/lib/data-mysql';
import { IoCheckmarkSharp, IoCloseSharp } from "react-icons/io5";
import React from 'react'
import { formatDate } from '@/lib/utils';

const MediaList = async () => {
    // const menus = await getMenus();
    // console.log(menus);

    // if (!menus?.length) return <h1 className="text-2xl">No Menus Found</h1>
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
                    {/* {
                        menus.map((menu, idx) => (
                            <tr key={menu.id}>
                                <td className="py-3 px-6">{ ++idx }.</td>
                                <td className="py-3 px-6">{menu.name}</td>
                                <td className="py-3 px-6">{menu.url}</td>
                                <td className="py-3 px-6 text-center">{menu.order}</td>
                                <td className="py-3 px-6">{menu.is_active ? <IoCheckmarkSharp className='mx-auto font-bold text-green-600' /> : <IoCloseSharp className='mx-auto font-bold text-green-600' />}</td>
                                <td className="py-3 px-6">{formatDate(menu.created_at)}</td>
                                <td className="py-3 px-6">{formatDate(menu.updated_at)}</td>
                            </tr>
                        ))
                    } */}
                </tbody>
            </table>
        </>
    )
}

export default MediaList