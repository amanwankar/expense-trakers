import React from 'react'

function Tips() {
  return (
    <div>
        <div className="bg-blue-50 rounded-xl border border-blue-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Tips</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">Set Realistic Budgets</h4>
                  <p className="text-sm text-gray-600">Start with historical spending data to create achievable budgets.</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">Review Regularly</h4>
                  <p className="text-sm text-gray-600">Check your budgets weekly to stay on track and make adjustments.</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">Use Categories</h4>
                  <p className="text-sm text-gray-600">Organize your expenses into categories for better insights.</p>
                </div>
              </div>
            </div>
    </div>
  )
}

export default Tips
