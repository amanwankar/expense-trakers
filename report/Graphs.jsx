'use client'
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';

function Graphs() {
  const [dateRange, setDateRange] = useState('last-6-months');
    const [activeChart, setActiveChart] = useState('bar');
    const [hoveredItem, setHoveredItem] = useState(null);
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
    
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-semibold text-gray-900">Income vs Expenses</h3>
                        <div className="flex items-center space-x-2">
                          <button 
                            onClick={() => setActiveChart('bar')}
                            className={`p-2 rounded-lg ${activeChart === 'bar' ? 'bg-blue-100 text-blue-600' : 'text-gray-500 hover:bg-gray-100'}`}
                          >
                            <BarChart3 className="h-4 w-4" />
                          </button>
                          <button 
                            onClick={() => setActiveChart('line')}
                            className={`p-2 rounded-lg ${activeChart === 'line' ? 'bg-blue-100 text-blue-600' : 'text-gray-500 hover:bg-gray-100'}`}
                          >
                            <TrendingUp className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      
                      <div className="h-80 flex items-center justify-center">
                        {renderBarChart()}
                      </div>
                    </div>
    
  )
}

export default Graphs
