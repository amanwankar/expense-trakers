"use client";
import { useState } from 'react';
import DashboardContent from './DashboardContent';
import Sidebar from './SidebarDashboard';
import Header from './Header';
export default function DashboardPage() {
  


  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      
      <div className="flex-1 flex flex-col ">
       <Header />
       <div className='flex-1 flex flex-col overflow-y-auto'>
 <DashboardContent  />
       </div>
       
      </div>
    </div>
  );
}