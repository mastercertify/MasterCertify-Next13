"use client";
import React from 'react'
import { signOut, useSession } from 'next-auth/react'


const Dashboard = () => {

  const { data: session } = useSession();
  console.log("name",session);
  console.log("email",session?.user?.email);
  return (
<div className='grid place-items-center h-screen'>Dashboard
        <div className="shadow-lg p-8 bg-zinc-300/10 flex flex-col gap-2 my-6">
            <div>Name: <span className="font-bold">{session?.user?.name}</span></div>
            <div>Email: <span className="font-bold">{session?.user?.email}</span></div>
            <button onClick={() => signOut()} className="bg-red-500 text-white font-bold px-6 py-2 mt-3">
                Log out
            </button>
        </div>
    </div>
  )
}

export default Dashboard