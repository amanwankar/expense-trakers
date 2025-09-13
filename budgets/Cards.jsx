import React from 'react'
import { Plus } from 'lucide-react'
import { useState } from 'react';
import "./Budgets.css"
function Cards() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
      const [budgetData, setBudgetData] = useState({
        name: '',
        amount: '',
        category: '',
        description: ''
























        
      })
      const handleInputChange = (e) => {
      const { name, value } = e.target;
      setBudgetData(prev => ({
        ...prev,
        [name]: value
      }));
    };
    
  return (
  
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
    </div>
  )
}

export default Cards
