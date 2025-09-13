'use client'
import React, { useState } from 'react';
import {  HelpCircle, Mail, MessageSquare, Phone, FileText, Video, DollarSign, } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import "./Help.css"
import HelpSidebar from './Sidebarhelp';
import Header from './Header';
import Welcome from './Welcome';
import FAQ from './FAQ';
import Contect from './Contect';
import Tips from './Tips';
function Help() {
  const pathname = usePathname();
    const isActive = (path) => {
      return pathname === path;
    }
  
  

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar - unchanged from original */}
          <HelpSidebar></HelpSidebar>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
           <Header></Header>
        
         {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-6xl mx-auto">
           <Welcome></Welcome>
           <FAQ></FAQ>
            
            {/* Contact Section */}
              <Contect></Contect>

            {/* Quick Tips Section */}
               <Tips></Tips>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Help;