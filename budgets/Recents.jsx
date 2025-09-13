
import React, { useState } from 'react';
import { Plus, X, DollarSign, Tag, FileText,   } from 'lucide-react';
// import "./Budgets.css"
function Recents() {
    const [budgets, setBudgets] = useState([
      { id: 1, name: 'Monthly Expenses', amount: 1500, category: 'Housing', description: 'Rent and utilities', progress: 75 },
  
      { id: 2, name: 'Entertainment', amount: 300, category: 'Fun', description: 'Movies and dining out', progress: 45 },
  
      { id: 3, name: 'Savings', amount: 500, category: 'Financial', description: 'Emergency fund', progress: 90 },
  
      { id: 4, name: 'Groceries', amount: 400, category: 'Food', description: 'Weekly groceries', progress: 60 },
  
      {id:5, name:'other activity' , amount:900,category:'instrument',description:'collage project', progress: 70}
  
    ])
  
  return (
    
      
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-xl border border-gray-200 p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Budgets</h3>
                    {budgets.length === 0 ? (
                      <div className="text-center py-8">
                        <p className="text-gray-500">No budgets created yet. Click "Create New Budget" to get started.</p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {budgets.map((budget) => (
                          <div key={budget.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <h4 className="font-medium text-gray-900">{budget.name}</h4>
                                <button 
                                  onClick={() => deleteBudget(budget.id)}
                                  className="text-gray-400 hover:text-red-500 transition-colors"
                                >
                                  <X className="h-4 w-4" />
                                </button>
                              </div>
                              <p className="text-sm text-gray-500">{budget.category}</p>
                              {budget.description && (
                                <p className="text-sm text-gray-600 mt-1">{budget.description}</p>
                              )}
                            </div>
                            <div className="text-right ml-4">
                              <p className="font-semibold text-gray-900">{budget.amount.toFixed(2)}</p>
                              <div className="w-20 h-2 bg-gray-200 rounded-full mt-1">
                                <div 
                                  className="h-full bg-blue-600 rounded-full"
                                  style={{ width: `${budget.progress}%` }}
                                />
                              </div>
                              <p className="text-xs text-gray-500 mt-1">{budget.progress}% used</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  </div>
 
  )
}

export default Recents
