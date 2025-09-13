'use client'
import React, { useState } from 'react';
import {  BarChart3, TrendingUp,  } from 'lucide-react';

import { usePathname } from 'next/navigation';
import "./Report.css"
import ReportSidebar from './SidebarHelp';
import Header from './Header';
import Cards from './Cards';
function Reports() {
  // Sample data for reports
  const pathname = usePathname();

  const isActive = (path) => {
    return pathname === path;
  }
  const monthlySpendingData = [
    { month: 'Jan', income: 4500, expenses: 3200, savings: 1300 },
    { month: 'Feb', income: 4800, expenses: 3400, savings: 1400 },
    { month: 'Mar', income: 5200, expenses: 3800, savings: 1400 },
    { month: 'Apr', income: 4900, expenses: 3500, savings: 1400 },
    { month: 'May', income: 5300, expenses: 3900, savings: 1400 },
    { month: 'Jun', income: 5600, expenses: 4200, savings: 1400 },
  ];

  const categorySpendingData = [
    { name: 'Housing', value: 35, color: '#4F46E5' },
    { name: 'Food', value: 20, color: '#10B981' },
    { name: 'Transportation', value: 15, color: '#F59E0B' },
    { name: 'Entertainment', value: 12, color: '#EC4899' },
    { name: 'Utilities', value: 10, color: '#6366F1' },
    { name: 'Other', value: 8, color: '#8B5CF6' },
  ];

  const budgetVsActualData = [
    { category: 'Housing', budgeted: 1500, actual: 1450 },
    { category: 'Food', budgeted: 600, actual: 720 },
    { category: 'Transport', budgeted: 300, actual: 280 },
    { category: 'Entertainment', budgeted: 200, actual: 250 },
    { category: 'Utilities', budgeted: 350, actual: 340 },
  ];

  const [dateRange, setDateRange] = useState('last-6-months');
  const [activeChart, setActiveChart] = useState('bar');
  const [hoveredItem, setHoveredItem] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  // Custom chart rendering functions to avoid Recharts entirely
  const renderBarChart = () => {
    const maxValue = Math.max(...monthlySpendingData.map(d => Math.max(d.income, d.expenses)));
    const barWidth = 30;
    const chartHeight = 250;
    const chartWidth = 500;
    const padding = 50;

    return (
      <div className="relative" style={{ width: chartWidth + padding * 2, height: chartHeight + padding * 2 }}>
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500">
          {[0, maxValue / 2, maxValue].map((value, i) => (
            <div key={i} className="flex items-center">
              <span>${value.toLocaleString()}</span>
              <div className="w-4 h-px bg-gray-200 ml-2"></div>
            </div>
          ))}
        </div>

        {/* X-axis */}
        <div className="absolute bottom-0 left-10 right-0 h-px bg-gray-300"></div>

        {/* Bars */}
        <div className="absolute bottom-0 left-10 right-0 top-10 flex items-end justify-around">
          {monthlySpendingData.map((data, index) => (
            <div 
              key={index}
              className="flex flex-col items-center"
              onMouseEnter={(e) => {
                const rect = e.target.getBoundingClientRect();
                setHoveredItem({
                  type: 'bar',
                  data,
                  index
                });
                setTooltipPosition({
                  x: rect.left + rect.width / 2,
                  y: rect.top
                });
              }}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="flex items-end space-x-1">
                <div 
                  className="w-6 bg-blue-500 rounded-t"
                  style={{ height: `${(data.income / maxValue) * (chartHeight - 20)}px` }}
                ></div>
                <div 
                  className="w-6 bg-amber-500 rounded-t"
                  style={{ height: `${(data.expenses / maxValue) * (chartHeight - 20)}px` }}
                ></div>
              </div>
              <div className="text-xs mt-2 text-gray-600">{data.month}</div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="absolute top-0 right-0 flex space-x-4 text-xs">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-500 mr-1 rounded"></div>
            <span>Income</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-amber-500 mr-1 rounded"></div>
            <span>Expenses</span>
          </div>
        </div>
      </div>
    );
  };

  const renderPieChart = () => {
    const total = categorySpendingData.reduce((sum, item) => sum + item.value, 0);
    let cumulativePercent = 0;
    
    return (
      <div className="relative w-64 h-64 mx-auto">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {categorySpendingData.map((item, i) => {
            const percent = item.value / total;
            const startX = 50 + 40 * Math.cos(2 * Math.PI * cumulativePercent);
            const startY = 50 + 40 * Math.sin(2 * Math.PI * cumulativePercent);
            cumulativePercent += percent;
            const endX = 50 + 40 * Math.cos(2 * Math.PI * cumulativePercent);
            const endY = 50 + 40 * Math.sin(2 * Math.PI * cumulativePercent);
            const largeArcFlag = percent > 0.5 ? 1 : 0;
            
            const pathData = [
              `M ${50} ${50}`,
              `L ${startX} ${startY}`,
              `A 40 40 0 ${largeArcFlag} 1 ${endX} ${endY}`,
              'Z'
            ].join(' ');
            
            return (
              <path
                key={i}
                d={pathData}
                fill={item.color}
                onMouseEnter={(e) => {
                  const rect = e.target.getBoundingClientRect();
                  setHoveredItem({
                    type: 'pie',
                    data: item,
                    index: i
                  });
                  setTooltipPosition({
                    x: rect.left + rect.width / 2,
                    y: rect.top
                  });
                }}
                onMouseLeave={() => setHoveredItem(null)}
              />
            );
          })}
          <circle cx="50" cy="50" r="20" fill="white" />
        </svg>
        
        {/* Legend */}
        <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
          {categorySpendingData.map((item, i) => (
            <div key={i} className="flex items-center">
              <div 
                className="w-3 h-3 mr-1 rounded" 
                style={{ backgroundColor: item.color }}
              ></div>
              <span>{item.name} ({item.value}%)</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderBudgetVsActualChart = () => {
    const maxValue = Math.max(...budgetVsActualData.map(d => Math.max(d.budgeted, d.actual)));
    const barWidth = 20;
    const chartHeight = 250;
    const chartWidth = 500;
    const padding = 50;

    return (
      <div className="relative" style={{ width: chartWidth + padding * 2, height: chartHeight + padding * 2 }}>
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500">
          {[0, maxValue / 2, maxValue].map((value, i) => (
            <div key={i} className="flex items-center">
              <span>${value.toLocaleString()}</span>
              <div className="w-4 h-px bg-gray-200 ml-2"></div>
            </div>
          ))}
        </div>

        {/* X-axis */}
        <div className="absolute bottom-0 left-10 right-0 h-px bg-gray-300"></div>

        {/* Bars */}
        <div className="absolute bottom-0 left-10 right-0 top-10 flex items-end justify-around">
          {budgetVsActualData.map((data, index) => (
            <div 
              key={index}
              className="flex flex-col items-center"
              onMouseEnter={(e) => {
                const rect = e.target.getBoundingClientRect();
                setHoveredItem({
                  type: 'budget',
                  data,
                  index
                });
                setTooltipPosition({
                  x: rect.left + rect.width / 2,
                  y: rect.top
                });
              }}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="flex items-end space-x-1">
                <div 
                  className="w-6 bg-indigo-500 rounded-t"
                  style={{ height: `${(data.budgeted / maxValue) * (chartHeight - 20)}px` }}
                ></div>
                <div 
                  className="w-6 bg-amber-500 rounded-t"
                  style={{ height: `${(data.actual / maxValue) * (chartHeight - 20)}px` }}
                ></div>
              </div>
              <div className="text-xs mt-2 text-gray-600">{data.category}</div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="absolute top-0 right-0 flex space-x-4 text-xs">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-indigo-500 mr-1 rounded"></div>
            <span>Budgeted</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-amber-500 mr-1 rounded"></div>
            <span>Actual</span>
          </div>
        </div>
      </div>
    );
  };

  // Custom tooltip component
  const CustomTooltip = () => {
    if (!hoveredItem) return null;

    return (
      <div 
        className="fixed bg-white p-3 border border-gray-200 rounded-lg shadow-lg z-50 text-sm"
        style={{
          left: tooltipPosition.x,
          top: tooltipPosition.y - 100,
          transform: 'translateX(-50%)'
        }}
      >
        {hoveredItem.type === 'bar' && (
          <>
            <div className="font-medium">{hoveredItem.data.month}</div>
            <div className="text-blue-600">Income: ${hoveredItem.data.income}</div>
            <div className="text-amber-600">Expenses: ${hoveredItem.data.expenses}</div>
            <div className="text-green-600">Savings: ${hoveredItem.data.savings}</div>
          </>
        )}
        {hoveredItem.type === 'pie' && (
          <>
            <div className="font-medium">{hoveredItem.data.name}</div>
            <div>{hoveredItem.data.value}% of total spending</div>
          </>
        )}
        {hoveredItem.type === 'budget' && (
          <>
            <div className="font-medium">{hoveredItem.data.category}</div>
            <div className="text-indigo-600">Budgeted: ${hoveredItem.data.budgeted}</div>
            <div className="text-amber-600">Actual: ${hoveredItem.data.actual}</div>
            <div className={hoveredItem.data.actual > hoveredItem.data.budgeted ? 'text-red-600' : 'text-green-600'}>
              Difference: ${Math.abs(hoveredItem.data.actual - hoveredItem.data.budgeted)} 
              ({hoveredItem.data.actual > hoveredItem.data.budgeted ? 'Over' : 'Under'} budget)
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <ReportSidebar></ReportSidebar>
      {/* Sidebar - unchanged from original */}
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header></Header>
        {/* Header */}
       

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            {/* Stats Overview */}
            <Cards></Cards>



            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* Income vs Expenses Chart */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
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

              {/* Spending by Category */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Spending by Category</h3>
                
                <div className="h-60 flex items-center justify-center">
                  {renderPieChart()}
                </div>
              </div>
            </div>

            {/* Budget vs Actual */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Budget vs Actual Spending</h3>
              
              <div className="h-96 flex items-center justify-center">
                {renderBudgetVsActualChart()}
              </div>
            </div>

            {/* Custom Tooltip */}
            <CustomTooltip />

            {/* Insights Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Financial Insights</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-2">Positive Trends</h4>
                  <ul className="space-y-2">
                    <li className="text-sm text-blue-700">• Your savings rate increased by 4.2% compared to last period</li>
                    <li className="text-sm text-blue-700">• Income has grown steadily over the past 6 months</li>
                    <li className="text-sm text-blue-700">• Housing expenses are 3.3% under budget</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-orange-50 rounded-lg">
                  <h4 className="font-medium text-orange-800 mb-2">Areas to Watch</h4>
                  <ul className="space-y-2">
                    <li className="text-sm text-orange-700">• Food spending is 20% over budget</li>
                    <li className="text-sm text-orange-700">• Entertainment expenses increased by 15% from last month</li>
                    <li className="text-sm text-orange-700">• Transportation costs are trending upward</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-medium text-green-800 mb-2">Savings Opportunities</h4>
                  <ul className="space-y-2">
                    <li className="text-sm text-green-700">• You could save $120/month by reducing dining out</li>
                    <li className="text-sm text-green-700">• Subscription services: $85/month identified</li>
                    <li className="text-sm text-green-700">• Energy efficiency could reduce utilities by ~15%</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-medium text-purple-800 mb-2">Recommendations</h4>
                  <ul className="space-y-2">
                    <li className="text-sm text-purple-700">• Set up automatic transfers to savings account</li>
                    <li className="text-sm text-purple-700">• Review entertainment subscriptions</li>
                    <li className="text-sm text-purple-700">• Consider meal planning to reduce food costs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Reports;