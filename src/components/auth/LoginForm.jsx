"use client"
import Link from 'next/link'
import { useActionState } from 'react'
import { signInCredentials } from '@/lib/action'
import { SignInButton } from '../Button'

const LoginForm = () => {
    const [state, formAction] = useActionState(signInCredentials, null)
    return (
        <form action={formAction} className='space-y-6'>
            {state?.message ? (<div className='p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-100' role='alert'>
                <span className='font-medium'>{state?.message}</span>
            </div>) : null}

            <div className="">
                <label htmlFor="email" className='block mb-2 text-sm font-medium text-gray-900'>Email</label>
                <input type="email" name='email' className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5' placeholder='john.doe@example.com' />
                <div aria-live='polite' aria-atomic="true">
                    <span className='text-sm text-red-500 mt-2'>{state?.error?.email}</span>
                </div>
            </div>
            <div className="">
                <label htmlFor="password" className='block mb-2 text-sm font-medium text-gray-900'>Password</label>
                <input type="password" name='password' className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5' placeholder='******' />
                <div aria-live='polite' aria-atomic="true">
                    <span className='text-sm text-red-500 mt-2'>{state?.error?.password}</span>
                </div>
            </div>

            <SignInButton />
            <p className="text-sm font-light text-gray-500">Don&apos;t have an account?
                <Link href={`/register`}>
                    <span className="font-medium pl-1 text-blue-600 hover:text-blue-700">Sign Up here</span>
                </Link>
            </p>
        </form>
    )
}

export default LoginForm