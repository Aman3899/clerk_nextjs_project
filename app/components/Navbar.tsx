import React from 'react';
import Link from 'next/link';
import { auth } from '@clerk/nextjs/server';
import { UserButton } from '@clerk/nextjs';

const Navbar = () => {

    let { userId } = auth();

    return (
        <div className='bg-white text-black rounded-lg'>
            <ul className='flex justify-between'>
                <div>
                    <li className='p-5'>
                        <Link href="/" className='p-5 hover:bg-black hover:text-white rounded-lg'>Home</Link>
                    </li>
                </div>

                <div>
                    <li className='p-5'>
                        <Link href="/client" className='p-5 hover:bg-black hover:text-white rounded-lg'>Client Page</Link>
                    </li>
                </div>

                <div className='flex'>
                    { userId?(
                        <>
                            <Link href="/profile" className='m-1 p-4'>Porfile</Link>
                            <li className='m-1 p-3'><UserButton/></li>
                        </> 
                        ) : (

                        <>  
                            <Link href="/sign-in" className='m-1 p-4 hover:bg-black hover:text-white rounded-lg'>Login</Link>
                            <Link href="/sign-up" className='m-1 p-4 hover:bg-black hover:text-white rounded-lg'>Sign Up</Link>
                        </>
                        )
                    }
                </div>
            </ul>
        </div>
    )
}

export default Navbar
