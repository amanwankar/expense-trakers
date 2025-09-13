  import React from 'react'
  import Image from 'next/image';
import { Wallet } from 'lucide-react';
  import {  SignInButton} from '@clerk/nextjs'
  // import { useUser } from '@/lib/auth';
  function Headers() {

    return (
      <>
      <div className='p-5 flex justify-between items-center border shadow-amber-800 '>
        <div className="p-6 border-b border-gray-200 ">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Wallet className="h-5 w-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-gray-900">BudgetPro</h1>
          </div>
        </div>

        
  <SignInButton type="button" className='btn bg-indigo-500 border-indigo-500 ' >
    </SignInButton>
      </div>
      </>
    )
  }
  export default Headers;
