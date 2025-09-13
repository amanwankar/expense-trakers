'use client'
import React, { useState } from 'react';
import { Plus, X, DollarSign, Tag, FileText,   } from 'lucide-react';

import { usePathname } from 'next/navigation';
import "./Budgets.css"
import BudgetsSidebar from './Sidebarbudgets';
import Header from './Header';
import Containers from './Containers';
function Dashboard() {
  const pathname = usePathname();
  const isActive = (path) => pathname === path;

  // State for budgets (not todos)
  const [budgets, setBudgets] = useState([
    { id: 1, name: 'Monthly Expenses', amount: 1500, category: 'Housing', description: 'Rent and utilities', progress: 75 },

    { id: 2, name: 'Entertainment', amount: 300, category: 'Fun', description: 'Movies and dining out', progress: 45 },

    { id: 3, name: 'Savings', amount: 500, category: 'Financial', description: 'Emergency fund', progress: 90 },

    { id: 4, name: 'Groceries', amount: 400, category: 'Food', description: 'Weekly groceries', progress: 60 },

    {id:5, name:'other activity' , amount:900,category:'instrument',description:'collage project', progress: 70}

  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [budgetData, setBudgetData] = useState({
    name: '',
    amount: '',
    category: '',
    description: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBudgetData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!budgetData.name.trim() || !budgetData.amount) return;
    
    const newBudget = {
      id: Date.now(),
      name: budgetData.name,
      amount: parseFloat(budgetData.amount),
      category: budgetData.category,
      description: budgetData.description,
      progress: Math.floor(Math.random() * 50) + 30 // Random progress between 30-80%
    };
    
    setBudgets([newBudget, ...budgets]);
    setIsDialogOpen(false);
    setBudgetData({ name: '', amount: '', category: '', description: '' });
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setBudgetData({ name: '', amount: '', category: '', description: '' });
  };

  const deleteBudget = (id) => {
    setBudgets(budgets.filter(budget => budget.id !== id));
  };

  // Calculate stats
  
  return (
    <>
    
       <div className="flex h-screen bg-gray-50">
        <BudgetsSidebar></BudgetsSidebar>
    
        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
         <Header></Header>
         
          {/* Page Content */}
          <main className="flex-1 overflow-y-auto p-6">
            <div className="max-w-6xl mx-auto">
              {/* Stats Overview */}
             <Containers></Containers>



              {/* Create Budget Card and Recent Budgets */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div 
                  className='creat-card'
                  onClick={() => setIsDialogOpen(true)}
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                    <Plus className='text-3xl text-blue-600' />
                  </div>
                  <h2 className='text-xl font-semibold text-gray-800 mb-2'>
                    Create New Budget
                  </h2>
                  <p className="text-gray-500 text-sm">
                    Set up a new budget category
                  </p>
                </div>

                {/* Recent Budgets */}


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
              </div>
            </div>
          </main>
        </div>


        {/* Dialog Component */}
        {isDialogOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div 
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              onClick={handleCloseDialog}
            />
            
            <div className="relative z-50 w-full max-w-md bg-white rounded-xl shadow-2xl">
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900">Create New Budget</h2>
                <button
                  onClick={handleCloseDialog}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <X className="h-5 w-5 text-gray-500" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Budget Name *</label>
                  <div className="relative">
                    <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={budgetData.name}
                      onChange={handleInputChange}
                      placeholder="Budget name"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Amount *</label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="number"
                      name="amount"
                      value={budgetData.amount}
                      onChange={handleInputChange}
                      placeholder="0.00"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Category *</label>
                  <select
                    name="category"
                    value={budgetData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select category</option>
                    <option value="Housing">Housing</option>
                    <option value="Food">Food</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Utilities">Utilities</option>
                    <option value="Financial">Financial</option>
                    <option value="Fun">Fun</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Description</label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <textarea
                      name="description"
                      value={budgetData.description}
                      onChange={handleInputChange}
                      placeholder="Description"
                      rows={3}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    />
                  </div>
                </div>

                <div className="flex justify-end space-x-4 pt-4">
                  <button
                    type="button"
                    onClick={handleCloseDialog}
                    className="px-6 py-3 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                  >
                    Create Budget
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
       </div> 
    </>
  );
}

export default Dashboard;