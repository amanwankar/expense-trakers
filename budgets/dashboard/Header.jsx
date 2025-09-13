"use client";
import { Bell, Search } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 w-full">
      <div className="flex items-center justify-between">
        
        <header className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-gray-500">Welcome back, User!</p>
        </div>
        </header>
        <div className="flex items-center space-x-4 gap-7">
          <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <Bell className="h-5 w-5 text-gray-600" />
          </button>
          <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center ">
            <span className="text-white text-sm font-medium">A</span>
          </div>
        </div>
      </div>
    </header>
  );
}