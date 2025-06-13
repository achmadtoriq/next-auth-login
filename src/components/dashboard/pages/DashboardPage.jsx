import { getDataTotal } from '@/lib/data-mysql'
import Link from 'next/link'
import React from 'react'

const Dashboard = async () => {
    const { article, menus, partner, layanan, portofolio } = await getDataTotal()
    return (
        <div className='grid grid-cols-5 gap-4'>
            <Link href={'/menu'}>
                <div className='border border-gray-400 rounded-lg py-3 px-4 flex justify-between items-center bg-white'>
                    <h2 className='text-2xl font-bold'>Menu</h2>
                    <div className='flex flex-col'>
                        <div className='flex flex-row gap-3 items-center'>
                            <p className='text-3xl font-bold'>{menus.aktif}</p>
                            <p className='text-sm'>Aktif</p>
                        </div>
                        <div className='flex flex-row gap-3 items-center'>
                            <p className='text-3xl font-bold'>{menus.nonaktif}</p>
                            <p className='text-sm'>Non Aktif</p>
                        </div>
                    </div>
                </div>
            </Link>

            <Link href={'/artikel'}>
                <div className='border border-gray-400 rounded-lg p-4 flex justify-between items-center bg-white'>
                    <h2 className='text-2xl font-bold'>Artikel</h2>
                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <p className='text-3xl font-bold'>{article}</p>
                        <p className='text-sm'>Artikel</p>
                    </div>
                </div>
            </Link>

            <Link href={'/artikel'}>
                <div className='border border-gray-400 rounded-lg p-4 flex justify-between items-center bg-white'>
                    <h2 className='text-2xl font-bold'>Portofolio</h2>
                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <p className='text-3xl font-bold'>{portofolio}</p>
                        <p className='text-sm'>Gambar</p>
                    </div>
                </div>
            </Link>

            <Link href={''}>
                <div className='border border-gray-400 rounded-lg p-4 flex justify-between items-center bg-white'>
                    <h2 className='text-2xl font-bold'>Layanan</h2>
                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <p className='text-3xl font-bold'>{layanan}</p>
                        <p className='text-sm'>Layanan</p>
                    </div>
                </div>
            </Link>

            <Link href={''}>
                <div className='border border-gray-400 rounded-lg p-4 flex justify-between items-center bg-white'>
                    <h2 className='text-2xl font-bold'>Partner</h2>
                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <p className='text-3xl font-bold'>{partner}</p>
                        <p className='text-sm'>Company</p>
                    </div>
                </div>
            </Link>

        </div>
    )
}

export default Dashboard