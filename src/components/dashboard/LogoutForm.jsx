"use server"
import { auth } from '@/auth'
import React from 'react'

const LogoutForm = async () => {
    const session = await auth()
    const Logout = async () => {
        await signOut({ redirectTo: "/login" })
    }
    return (
        <>
            {
                session && (
                    <form action={Logout}>
                        <li>
                            <button type="submit" className='text-zinc-500 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-white rounded-md'>Sign Out</button>
                        </li>
                    </form>
                )
            }
        </>
    )
}

export default LogoutForm