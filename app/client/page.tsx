"use client";
import { useUser } from '@clerk/nextjs';
import React from 'react';

const Page = () => {

    const { isLoaded, isSignedIn, user } = useUser();

    if (!isLoaded || !isSignedIn) {
        return null;
    }

    return (
        <div className='flex flex-col justify-center items-center h-full'>
            <p className='text-4xl font-bold'>Hello, { user.username } Welcome to Clerk NextJS</p>
            <ul>
                <li>ClerkID: {user.id}</li>
                <li>Username: {user.username}</li>
                {/* <li>{user.imageUrl}</li> */}
                <li>First Name: {user.firstName}</li>
                <li>Last Name: {user.lastName}</li>
            </ul>
        </div>
    )
}

export default Page;