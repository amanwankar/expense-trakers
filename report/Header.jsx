'use client'
import React from 'react';
import { useState } from 'react';
import { Download, Filter, Calendar, ArrowUp, ArrowDown, PieChart, BarChart3, TrendingUp, DollarSign,Settings,User ,Wallet,HandHelping  } from 'lucide-react';



function Header() {
   const [dateRange, setDateRange] = useState('last-6-months');
  return (
    <div>
        <header className="bg-white border-b border-gray-200 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1 max-w-md">
                    <h1 className="text-2xl font-bold text-gray-900">Financial Reports</h1>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-3 py-2">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <select 
                        value={dateRange}
                        onChange={(e) => setDateRange(e.target.value)}
                        className="bg-transparent outline-none text-sm"
                      >
                        <option value="last-month">Last Month</option>
                        <option value="last-3-months">Last 3 Months</option>
                        <option value="last-6-months">Last 6 Months</option>
                        <option value="this-year">This Year</option>
                        <option value="last-year">Last Year</option>
                      </select>
                    </div>
                    
                    <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      <Download className="h-4 w-4" />
                      <span>Export</span>
                    </button>
                  </div>
                </div>
              </header>
    </div>
  )
}

export default Header
