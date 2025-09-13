"use client";
import Link from 'next/link';
import { BarChart3, TrendingUp, HandHelping, Settings, User, Wallet, PieChart } from 'lucide-react';
import { usePathname } from 'next/navigation';
import "./aboutus.css"
export default function AboutusSidebar() {
  const pathname = usePathname();

  const isActive = (path) => {
    return pathname === path;
  };

  return (
    <>
    <div className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="logo">
            <Wallet className="h-5 w-5 text-white" />
          </div>
          <h1 className="text-xl font-bold text-gray-900">BudgetPro</h1>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        <Link href="/dashboard">
          <button className={`Navigation ${
            isActive('/dashboard') 
              ? 'bg-blue-50 text-blue-600 font-medium' 
              : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
          }`}>
            <PieChart className="h-5 w-5" />
            <span>Dashboard</span>
          </button>
        </Link>

        <Link href="/budgets">
          <button className={`Navigation `}>
            <BarChart3 className="h-5 w-5" />
            <span>Budgets</span>
          </button>
        </Link>
        
        <Link href="/report">
          <button className={`Navigation `}>
            <TrendingUp className="h-5 w-5" />
            <span>Reports</span>
          </button>
        </Link>

        <Link href="/help">
          <button className={`Navigation `}>
            <HandHelping className="h-5 w-5" />
            <span>Help</span>
          </button>
        </Link>
      
        <Link href="/aboutus">
          <button className={`Navigation `}>
            <Settings className="h-5 w-5" />
            <span>About us</span>
          </button>
        </Link>
      </nav>

      {/* User Section */}
     <div className="p-4 border-t border-gray-200">
               <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50">
                 <div className="user">
                   <User className="h-5 w-5 text-white" />
                 </div>
                 <div className="flex-1 min-w-0">
                   <p className="text-sm font-medium text-gray-900 truncate">John Doe</p>
                   <p className="text-xs text-gray-500">john@example.com</p>
                 </div>
               </div>
             </div>
           </div>
           </>
  );
}