 import React from 'react'
import Link from 'next/link'; // Import Link

 function Hero() {
   return (
     <div>
      <section className="bg-white lg:grid lg:h-screen lg:place-content-center dark:bg-gray-900">
   <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
     <div className="mx-auto max-w-prose text-center">
       <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
       Manage your Expense and
       
         <strong className="text-indigo-600"> save 
         more money         </strong>
       </h1>

       <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200">
      
       We're here to help you manage your expenses, save money, and make the most of your money.
      </p>

       <div className="mt-4 flex justify-center gap-4 sm:mt-6">
         <a
           className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
           href="/dashboard"
         >
           Get Started 🚀
         </a>

        
      </div>
     </div>
   </div>
 </section>
     </div>
   )
 }

 export default Hero;
