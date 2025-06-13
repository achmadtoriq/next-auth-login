import { getDataTotal } from '@/lib/data-mysql'
import Link from 'next/link'
import React from 'react'

const Dashboard = async () => {
    const { menus, articles, portofolio, partner } = await getDataTotal()
    return (
        <div className='grid grid-cols-4 gap-2'>
            <Link href={'/menu'}>
                <div className='border border-gray-400 rounded-lg p-4 flex justify-between items-center bg-white'>
                    <h2 className='text-2xl font-bold'>{menus.name}</h2>
                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <p className='text-3xl font-bold'>{menus.data[0].total}</p>
                        <p className='text-sm'>Aktif</p>
                    </div>
                </div>
            </Link>

            <div className='border border-gray-400 rounded-lg p-4 flex justify-between items-center bg-white'>
                <h2 className='text-2xl font-bold'>{articles.name}</h2>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-3xl font-bold'>{articles.total}</p>
                    <p className='text-sm'>Artikel</p>
                </div>
            </div>

            <Link href={'/media'}>
                <div className='border border-gray-400 rounded-lg p-4 flex justify-between items-center bg-white'>
                    <h2 className='text-2xl font-bold'>{portofolio.name}</h2>
                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <p className='text-3xl font-bold'>{portofolio.total}</p>
                        <p className='text-sm'>Gambar</p>
                    </div>
                </div>
            </Link>

            <div className='border border-gray-400 rounded-lg p-4 flex justify-between items-center bg-white'>
                <h2 className='text-2xl font-bold'>{partner.name}</h2>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-3xl font-bold'>{partner.total}</p>
                    <p className='text-sm'>Partner</p>
                </div>
            </div>


            <Link href={'/menu'}>
                <div className='border border-gray-400 rounded-lg p-4 flex justify-between items-center bg-white'>
                    <h2 className='text-2xl font-bold'>{menus.name}</h2>
                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <p className='text-3xl font-bold'>{menus.data[0].total}</p>
                        <p className='text-sm'>Aktif</p>
                    </div>
                </div>
            </Link>

            <div className='border border-gray-400 rounded-lg p-4 flex justify-between items-center bg-white'>
                <h2 className='text-2xl font-bold'>{articles.name}</h2>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-3xl font-bold'>{articles.total}</p>
                    <p className='text-sm'>Artikel</p>
                </div>
            </div>

            <Link href={'/media'}>
                <div className='border border-gray-400 rounded-lg p-4 flex justify-between items-center bg-white'>
                    <h2 className='text-2xl font-bold'>{portofolio.name}</h2>
                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <p className='text-3xl font-bold'>{portofolio.total}</p>
                        <p className='text-sm'>Gambar</p>
                    </div>
                </div>
            </Link>

            <div className='border border-gray-400 rounded-lg p-4 flex justify-between items-center bg-white'>
                <h2 className='text-2xl font-bold'>{partner.name}</h2>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-3xl font-bold'>{partner.total}</p>
                    <p className='text-sm'>Partner</p>
                </div>
            </div>

            <Link href={'/menu'}>
                <div className='border border-gray-400 rounded-lg p-4 flex justify-between items-center bg-white'>
                    <h2 className='text-2xl font-bold'>{menus.name}</h2>
                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <p className='text-3xl font-bold'>{menus.data[0].total}</p>
                        <p className='text-sm'>Aktif</p>
                    </div>
                </div>
            </Link>

            <div className='border border-gray-400 rounded-lg p-4 flex justify-between items-center bg-white'>
                <h2 className='text-2xl font-bold'>{articles.name}</h2>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-3xl font-bold'>{articles.total}</p>
                    <p className='text-sm'>Artikel</p>
                </div>
            </div>

            <Link href={'/media'}>
                <div className='border border-gray-400 rounded-lg p-4 flex justify-between items-center bg-white'>
                    <h2 className='text-2xl font-bold'>{portofolio.name}</h2>
                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <p className='text-3xl font-bold'>{portofolio.total}</p>
                        <p className='text-sm'>Gambar</p>
                    </div>
                </div>
            </Link>

            <div className='border border-gray-400 rounded-lg p-4 flex justify-between items-center bg-white'>
                <h2 className='text-2xl font-bold'>{partner.name}</h2>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-3xl font-bold'>{partner.total}</p>
                    <p className='text-sm'>Partner</p>
                </div>
            </div>

            <Link href={'/menu'}>
                <div className='border border-gray-400 rounded-lg p-4 flex justify-between items-center bg-white'>
                    <h2 className='text-2xl font-bold'>{menus.name}</h2>
                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <p className='text-3xl font-bold'>{menus.data[0].total}</p>
                        <p className='text-sm'>Aktif</p>
                    </div>
                </div>
            </Link>

            <div className='border border-gray-400 rounded-lg p-4 flex justify-between items-center bg-white'>
                <h2 className='text-2xl font-bold'>{articles.name}</h2>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-3xl font-bold'>{articles.total}</p>
                    <p className='text-sm'>Artikel</p>
                </div>
            </div>

            <Link href={'/media'}>
                <div className='border border-gray-400 rounded-lg p-4 flex justify-between items-center bg-white'>
                    <h2 className='text-2xl font-bold'>{portofolio.name}</h2>
                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <p className='text-3xl font-bold'>{portofolio.total}</p>
                        <p className='text-sm'>Gambar</p>
                    </div>
                </div>
            </Link>

            <div className='border border-gray-400 rounded-lg p-4 flex justify-between items-center bg-white'>
                <h2 className='text-2xl font-bold'>{partner.name}</h2>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-3xl font-bold'>{partner.total}</p>
                    <p className='text-sm'>Partner</p>
                </div>
            </div>

            <Link href={'/menu'}>
                <div className='border border-gray-400 rounded-lg p-4 flex justify-between items-center bg-white'>
                    <h2 className='text-2xl font-bold'>{menus.name}</h2>
                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <p className='text-3xl font-bold'>{menus.data[0].total}</p>
                        <p className='text-sm'>Aktif</p>
                    </div>
                </div>
            </Link>

            <div className='border border-gray-400 rounded-lg p-4 flex justify-between items-center bg-white'>
                <h2 className='text-2xl font-bold'>{articles.name}</h2>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-3xl font-bold'>{articles.total}</p>
                    <p className='text-sm'>Artikel</p>
                </div>
            </div>

            <Link href={'/media'}>
                <div className='border border-gray-400 rounded-lg p-4 flex justify-between items-center bg-white'>
                    <h2 className='text-2xl font-bold'>{portofolio.name}</h2>
                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <p className='text-3xl font-bold'>{portofolio.total}</p>
                        <p className='text-sm'>Gambar</p>
                    </div>
                </div>
            </Link>

            <div className='border border-gray-400 rounded-lg p-4 flex justify-between items-center bg-white'>
                <h2 className='text-2xl font-bold'>{partner.name}</h2>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-3xl font-bold'>{partner.total}</p>
                    <p className='text-sm'>Partner</p>
                </div>
            </div>

            <Link href={'/menu'}>
                <div className='border border-gray-400 rounded-lg p-4 flex justify-between items-center bg-white'>
                    <h2 className='text-2xl font-bold'>{menus.name}</h2>
                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <p className='text-3xl font-bold'>{menus.data[0].total}</p>
                        <p className='text-sm'>Aktif</p>
                    </div>
                </div>
            </Link>

            <div className='border border-gray-400 rounded-lg p-4 flex justify-between items-center bg-white'>
                <h2 className='text-2xl font-bold'>{articles.name}</h2>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-3xl font-bold'>{articles.total}</p>
                    <p className='text-sm'>Artikel</p>
                </div>
            </div>

            <Link href={'/media'}>
                <div className='border border-gray-400 rounded-lg p-4 flex justify-between items-center bg-white'>
                    <h2 className='text-2xl font-bold'>{portofolio.name}</h2>
                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <p className='text-3xl font-bold'>{portofolio.total}</p>
                        <p className='text-sm'>Gambar</p>
                    </div>
                </div>
            </Link>

            <div className='border border-gray-400 rounded-lg p-4 flex justify-between items-center bg-white'>
                <h2 className='text-2xl font-bold'>{partner.name}</h2>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-3xl font-bold'>{partner.total}</p>
                    <p className='text-sm'>Partner</p>
                </div>
            </div>

            <Link href={'/menu'}>
                <div className='border border-gray-400 rounded-lg p-4 flex justify-between items-center bg-white'>
                    <h2 className='text-2xl font-bold'>{menus.name}</h2>
                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <p className='text-3xl font-bold'>{menus.data[0].total}</p>
                        <p className='text-sm'>Aktif</p>
                    </div>
                </div>
            </Link>

            <div className='border border-gray-400 rounded-lg p-4 flex justify-between items-center bg-white'>
                <h2 className='text-2xl font-bold'>{articles.name}</h2>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-3xl font-bold'>{articles.total}</p>
                    <p className='text-sm'>Artikel</p>
                </div>
            </div>

            <Link href={'/media'}>
                <div className='border border-gray-400 rounded-lg p-4 flex justify-between items-center bg-white'>
                    <h2 className='text-2xl font-bold'>{portofolio.name}</h2>
                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <p className='text-3xl font-bold'>{portofolio.total}</p>
                        <p className='text-sm'>Gambar</p>
                    </div>
                </div>
            </Link>

            <div className='border border-gray-400 rounded-lg p-4 flex justify-between items-center bg-white'>
                <h2 className='text-2xl font-bold'>{partner.name}</h2>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-3xl font-bold'>{partner.total}</p>
                    <p className='text-sm'>Partner</p>
                </div>
            </div> 

            <Link href={'/menu'}>
                <div className='border border-gray-400 rounded-lg p-4 flex justify-between items-center bg-white'>
                    <h2 className='text-2xl font-bold'>{menus.name}</h2>
                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <p className='text-3xl font-bold'>{menus.data[0].total}</p>
                        <p className='text-sm'>Aktif</p>
                    </div>
                </div>
            </Link>

            <div className='border border-gray-400 rounded-lg p-4 flex justify-between items-center bg-white'>
                <h2 className='text-2xl font-bold'>{articles.name}</h2>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-3xl font-bold'>{articles.total}</p>
                    <p className='text-sm'>Artikel</p>
                </div>
            </div>

            <Link href={'/media'}>
                <div className='border border-gray-400 rounded-lg p-4 flex justify-between items-center bg-white'>
                    <h2 className='text-2xl font-bold'>{portofolio.name}</h2>
                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <p className='text-3xl font-bold'>{portofolio.total}</p>
                        <p className='text-sm'>Gambar</p>
                    </div>
                </div>
            </Link>

            <div className='border border-gray-400 rounded-lg p-4 flex justify-between items-center bg-white'>
                <h2 className='text-2xl font-bold'>{partner.name}</h2>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-3xl font-bold'>{partner.total}</p>
                    <p className='text-sm'>Partner</p>
                </div>
            </div>

            <Link href={'/menu'}>
                <div className='border border-gray-400 rounded-lg p-4 flex justify-between items-center bg-white'>
                    <h2 className='text-2xl font-bold'>{menus.name}</h2>
                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <p className='text-3xl font-bold'>{menus.data[0].total}</p>
                        <p className='text-sm'>Aktif</p>
                    </div>
                </div>
            </Link>

            <div className='border border-gray-400 rounded-lg p-4 flex justify-between items-center bg-white'>
                <h2 className='text-2xl font-bold'>{articles.name}</h2>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-3xl font-bold'>{articles.total}</p>
                    <p className='text-sm'>Artikel</p>
                </div>
            </div>

            <Link href={'/media'}>
                <div className='border border-gray-400 rounded-lg p-4 flex justify-between items-center bg-white'>
                    <h2 className='text-2xl font-bold'>{portofolio.name}</h2>
                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <p className='text-3xl font-bold'>{portofolio.total}</p>
                        <p className='text-sm'>Gambar</p>
                    </div>
                </div>
            </Link>

            <div className='border border-gray-400 rounded-lg p-4 flex justify-between items-center bg-white'>
                <h2 className='text-2xl font-bold'>{partner.name}</h2>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-3xl font-bold'>{partner.total}</p>
                    <p className='text-sm'>Partner</p>
                </div>
            </div>

            <Link href={'/menu'}>
                <div className='border border-gray-400 rounded-lg p-4 flex justify-between items-center bg-white'>
                    <h2 className='text-2xl font-bold'>{menus.name}</h2>
                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <p className='text-3xl font-bold'>{menus.data[0].total}</p>
                        <p className='text-sm'>Aktif</p>
                    </div>
                </div>
            </Link>

            <div className='border border-gray-400 rounded-lg p-4 flex justify-between items-center bg-white'>
                <h2 className='text-2xl font-bold'>{articles.name}</h2>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-3xl font-bold'>{articles.total}</p>
                    <p className='text-sm'>Artikel</p>
                </div>
            </div>

            <Link href={'/media'}>
                <div className='border border-gray-400 rounded-lg p-4 flex justify-between items-center bg-white'>
                    <h2 className='text-2xl font-bold'>{portofolio.name}</h2>
                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <p className='text-3xl font-bold'>{portofolio.total}</p>
                        <p className='text-sm'>Gambar</p>
                    </div>
                </div>
            </Link>

            <div className='border border-gray-400 rounded-lg p-4 flex justify-between items-center bg-white'>
                <h2 className='text-2xl font-bold'>{partner.name}</h2>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-3xl font-bold'>{partner.total}</p>
                    <p className='text-sm'>Partner</p>
                </div>
            </div>

            <Link href={'/menu'}>
                <div className='border border-gray-400 rounded-lg p-4 flex justify-between items-center bg-white'>
                    <h2 className='text-2xl font-bold'>{menus.name}</h2>
                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <p className='text-3xl font-bold'>{menus.data[0].total}</p>
                        <p className='text-sm'>Aktif</p>
                    </div>
                </div>
            </Link>

            <div className='border border-gray-400 rounded-lg p-4 flex justify-between items-center bg-white'>
                <h2 className='text-2xl font-bold'>{articles.name}</h2>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-3xl font-bold'>{articles.total}</p>
                    <p className='text-sm'>Artikel</p>
                </div>
            </div>

            <Link href={'/media'}>
                <div className='border border-gray-400 rounded-lg p-4 flex justify-between items-center bg-white'>
                    <h2 className='text-2xl font-bold'>{portofolio.name}</h2>
                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <p className='text-3xl font-bold'>{portofolio.total}</p>
                        <p className='text-sm'>Gambar</p>
                    </div>
                </div>
            </Link>

            <div className='border border-gray-400 rounded-lg p-4 flex justify-between items-center bg-white'>
                <h2 className='text-2xl font-bold'>{partner.name}</h2>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-3xl font-bold'>{partner.total}</p>
                    <p className='text-sm'>Partner</p>
                </div>
            </div>

            <Link href={'/menu'}>
                <div className='border border-gray-400 rounded-lg p-4 flex justify-between items-center bg-white'>
                    <h2 className='text-2xl font-bold'>{menus.name}</h2>
                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <p className='text-3xl font-bold'>{menus.data[0].total}</p>
                        <p className='text-sm'>Aktif</p>
                    </div>
                </div>
            </Link>

            <div className='border border-gray-400 rounded-lg p-4 flex justify-between items-center bg-white'>
                <h2 className='text-2xl font-bold'>{articles.name}</h2>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-3xl font-bold'>{articles.total}</p>
                    <p className='text-sm'>Artikel</p>
                </div>
            </div>

            <Link href={'/media'}>
                <div className='border border-gray-400 rounded-lg p-4 flex justify-between items-center bg-white'>
                    <h2 className='text-2xl font-bold'>{portofolio.name}</h2>
                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <p className='text-3xl font-bold'>{portofolio.total}</p>
                        <p className='text-sm'>Gambar</p>
                    </div>
                </div>
            </Link>

            <div className='border border-gray-400 rounded-lg p-4 flex justify-between items-center bg-white'>
                <h2 className='text-2xl font-bold'>{partner.name}</h2>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-3xl font-bold'>{partner.total}</p>
                    <p className='text-sm'>Partner</p>
                </div>
            </div>

            <Link href={'/menu'}>
                <div className='border border-gray-400 rounded-lg p-4 flex justify-between items-center bg-white'>
                    <h2 className='text-2xl font-bold'>{menus.name}</h2>
                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <p className='text-3xl font-bold'>{menus.data[0].total}</p>
                        <p className='text-sm'>Aktif</p>
                    </div>
                </div>
            </Link>

            <div className='border border-gray-400 rounded-lg p-4 flex justify-between items-center bg-white'>
                <h2 className='text-2xl font-bold'>{articles.name}</h2>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-3xl font-bold'>{articles.total}</p>
                    <p className='text-sm'>Artikel</p>
                </div>
            </div>

            <Link href={'/media'}>
                <div className='border border-gray-400 rounded-lg p-4 flex justify-between items-center bg-white'>
                    <h2 className='text-2xl font-bold'>{portofolio.name}</h2>
                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <p className='text-3xl font-bold'>{portofolio.total}</p>
                        <p className='text-sm'>Gambar</p>
                    </div>
                </div>
            </Link>

            <div className='border border-gray-400 rounded-lg p-4 flex justify-between items-center bg-white'>
                <h2 className='text-2xl font-bold'>{partner.name}</h2>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-3xl font-bold'>{partner.total}</p>
                    <p className='text-sm'>Partner</p>
                </div>
            </div>

            <Link href={'/menu'}>
                <div className='border border-gray-400 rounded-lg p-4 flex justify-between items-center bg-white'>
                    <h2 className='text-2xl font-bold'>{menus.name}</h2>
                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <p className='text-3xl font-bold'>{menus.data[0].total}</p>
                        <p className='text-sm'>Aktif</p>
                    </div>
                </div>
            </Link>

            <div className='border border-gray-400 rounded-lg p-4 flex justify-between items-center bg-white'>
                <h2 className='text-2xl font-bold'>{articles.name}</h2>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-3xl font-bold'>{articles.total}</p>
                    <p className='text-sm'>Artikel</p>
                </div>
            </div>

            <Link href={'/media'}>
                <div className='border border-gray-400 rounded-lg p-4 flex justify-between items-center bg-white'>
                    <h2 className='text-2xl font-bold'>{portofolio.name}</h2>
                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <p className='text-3xl font-bold'>{portofolio.total}</p>
                        <p className='text-sm'>Gambar</p>
                    </div>
                </div>
            </Link>

            <div className='border border-gray-400 rounded-lg p-4 flex justify-between items-center bg-white'>
                <h2 className='text-2xl font-bold'>{partner.name}</h2>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-3xl font-bold'>{partner.total}</p>
                    <p className='text-sm'>Partner</p>
                </div>
            </div>

            <Link href={'/menu'}>
                <div className='border border-gray-400 rounded-lg p-4 flex justify-between items-center bg-white'>
                    <h2 className='text-2xl font-bold'>{menus.name}</h2>
                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <p className='text-3xl font-bold'>{menus.data[0].total}</p>
                        <p className='text-sm'>Aktif</p>
                    </div>
                </div>
            </Link>

            <div className='border border-gray-400 rounded-lg p-4 flex justify-between items-center bg-white'>
                <h2 className='text-2xl font-bold'>{articles.name}</h2>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-3xl font-bold'>{articles.total}</p>
                    <p className='text-sm'>Artikel</p>
                </div>
            </div>

            <Link href={'/media'}>
                <div className='border border-gray-400 rounded-lg p-4 flex justify-between items-center bg-white'>
                    <h2 className='text-2xl font-bold'>{portofolio.name}</h2>
                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <p className='text-3xl font-bold'>{portofolio.total}</p>
                        <p className='text-sm'>Gambar</p>
                    </div>
                </div>
            </Link>

            <div className='border border-gray-400 rounded-lg p-4 flex justify-between items-center bg-white'>
                <h2 className='text-2xl font-bold'>{partner.name}</h2>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-3xl font-bold'>{partner.total}</p>
                    <p className='text-sm'>Partner</p>
                </div>
            </div>

        </div>
    )
}

export default Dashboard