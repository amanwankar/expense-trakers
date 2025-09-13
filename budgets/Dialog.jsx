import React from 'react'
import { Plus, X, DollarSign, Tag, FileText,   } from 'lucide-react';
import { useState } from 'react';
function Dialog() {
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
    }
  return (
    <div>
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
  )
}

export default Dialog
