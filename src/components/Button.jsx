"use client"
import { useFormStatus } from "react-dom";

export const RegisterButton = () => {
    const { pending } = useFormStatus();
    return (
        <button type='submit' className='w-full text-white bg-blue-700 font-medium rounded-lg px-5 py-2.5 text-center uppercase hover:bg-blue-800 cursor-pointer'>{
            pending ? "Registering..." : "Register"
        }</button>

    )
}

export const SignInButton = () => {
    const { pending } = useFormStatus();
    return (
        <button type='submit' className='w-full text-white bg-blue-700 font-medium rounded-lg px-5 py-2.5 text-center uppercase hover:bg-blue-800 cursor-pointer'>{
            pending ? "Authenticating..." : "Sign In"
        }</button>

    )
}