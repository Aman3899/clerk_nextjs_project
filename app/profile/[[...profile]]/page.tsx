import { auth, currentUser } from '@clerk/nextjs/server';
import React from 'react';
import { redirect } from 'next/navigation';
import { UserProfile } from '@clerk/nextjs';


const page = async () => {

    let { userId } = auth();
    let isAuth = !!userId;
    let user = await currentUser();

    if ( !isAuth ) {
        redirect("/");
    }

    return (
        <div className='flex flex-col justify-end items-center'>
            <h1 className='text-2xl font-bold m-2'>{user?.username}</h1>
            <UserProfile/>
        </div>
    )
}

export default page
