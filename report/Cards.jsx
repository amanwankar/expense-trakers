'use client'
import React from 'react'
import { ArrowUp, ArrowDown, BarChart3, TrendingUp, DollarSign,HandCoins  } from 'lucide-react';
import "./Report.css"
function Cards() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="Cards">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Income</p>
                    <p className="text-2xl font-bold text-gray-900">₹29,400</p>
                    <p className="text-xs text-green-600 flex items-center mt-1">
                      <ArrowUp className="h-3 w-3 mr-1" />
                      +12.5% from previous
                    </p>
                  </div>
                  <div className="Card-content">
                    <HandCoins className="h-6 w-6 text-green-600" />
                  </div>
                </div>
              </div>
              
              <div className="Cards">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Expenses</p>
                    <p className="text-2xl font-bold text-gray-900">₹21,200</p>
                    <p className="text-xs text-red-600 flex items-center mt-1">
                      <ArrowDown className="h-3 w-3 mr-1" />
                      -3.2% from previous
                    </p>
                  </div>
                  <div className="Card-content">
                    <TrendingUp className="h-6 w-6 text-indigo-800" />
                  </div>
                </div>
              </div>
              
              <div className="Cards">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Savings</p>
                    <p className="text-2xl font-bold text-gray-900">₹8,200</p>
                    <p className="text-xs text-green-600 flex items-center mt-1">
                      <ArrowUp className="h-3 w-3 mr-1" />
                      +18.7% from previous
                    </p>
                  </div>
                  <div className="Card-content">
                    <DollarSign className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
              </div>
              
              <div className="Cards">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Savings Rate</p>
                    <p className="text-2xl font-bold text-gray-900">27.9%</p>
                    <p className="text-xs text-green-600 flex items-center mt-1">
                      <ArrowUp className="h-3 w-3 mr-1" />
                      +4.2% from previous
                    </p>
                  </div>
                  <div className="Card-content">
                    <BarChart3 className="h-6 w-6 text-orange-600" />
                  </div>
                </div>
              </div>
            </div>
    </div>
  )
}

export default Cards
