    'use client'
    import React from 'react'
    import { useState } from 'react';
    import {  DollarSign,  TrendingUp, BarChart3,ArrowLeftRight  } from 'lucide-react';

    import "./Budgets.css"
    function Containers() {
        const [budgets, setBudgets] = useState([
          { id: 1, name: 'Monthly Expenses', amount: 1500, category: 'Housing', description: 'Rent and utilities', progress: 75 },
      
          { id: 2, name: 'Entertainment', amount: 300, category: 'Fun', description: 'Movies and dining out', progress: 45 },
      
          { id: 3, name: 'Savings', amount: 500, category: 'Financial', description: 'Emergency fund', progress: 90 },
      
          { id: 4, name: 'Groceries', amount: 400, category: 'Food', description: 'Weekly groceries', progress: 60 },
      
          {id:5, name:'other activity' , amount:900,category:'instrument',description:'collage project', progress: 70},
      
        ]);

      const totalBudgets = budgets.length;
      const totalAllocated = budgets.reduce((sum, budget) => sum + budget.amount, 0);
      const activeBudgets = budgets.filter(budget => budget.progress < 100).length;
    const remainingAmount = budgets.reduce((sum, budget) => sum - budget.amount, 0);

      return (

        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 cursor-pointer">
            
                    <div className=" cards">
                      <div className=" cards-container">
                        <div>
                          <p className="card-text">Total Budgets</p>
                          <p className="text-2xl font-bold text-gray-900">{totalBudgets}</p>
                        </div>
                        <div className="card-icon">
                          <ArrowLeftRight className="h-6 w-6 text-blue-600" />
                        </div>
                      </div>
                    </div>
                  
                    <div className="cards">
                      <div className=" cards-container">
                        <div>
                          <p className="card-text">Total Allocated</p>
                          <p className="text-2xl font-bold text-green-600">{totalAllocated.toFixed(2)}</p>
                        </div>
                        <div className="card-icon">
                          <DollarSign className="h-6 w-6 text-green-600" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="cards">
                      <div className="cards-container">
                        <div>
                          <p className="card-text">Active Budgets</p>
                          <p className="text-2xl font-bold text-purple-600">{activeBudgets}</p>
                        </div>
                        <div className="card-icon">
                          <TrendingUp className="h-6 w-6 text-purple-600" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="cards">
                      <div className=" cards-container">
                        <div>
                          <p className="card-text">Remaining</p>
                          <p className="text-2xl font-bold text-orange-600">{remainingAmount.toFixed(2)}</p>
                        </div>
                        <div className="card-icon">
                          <BarChart3 className="h-6 w-6 text-orange-600" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
      )
    }

    export default Containers
