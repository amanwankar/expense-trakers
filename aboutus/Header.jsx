import React from 'react'

function Header() {
  return (
    <div>
      <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex-1 max-w-md">
              <h1 className="text-2xl font-bold text-gray-900">About BudgetPro</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">JD</span>
              </div>
            </div>
          </div>
        </header>
    </div>
  )
}

export default Header
