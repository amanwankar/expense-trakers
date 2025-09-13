import React from 'react'
import {  HelpCircle,  ChevronDown, ChevronUp,Settings, PieChart, TrendingUp,  } from 'lucide-react';
import { useState } from 'react';
function FAQ() {
   const [activeCategory, setActiveCategory] = useState('getting-started');
    const [openItems, setOpenItems] = useState({});
    const [searchQuery, setSearchQuery] = useState('');
  
  const faqCategories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: <HelpCircle className="h-5 w-5" />,
      questions: [
        {
          id: 'gs-1',
          question: 'How do I create my first budget?',
          answer: 'To create your first budget, navigate to the Budgets page and click the "Create New Budget" button. Fill in the required details including budget name, amount, and category. You can also add an optional description for more context.'
        },
        {
          id: 'gs-2',
          question: 'How do I connect my bank account?',
          answer: 'Currently, BudgetPro supports manual entry of transactions. We\'re working on bank integration features that will be available in future updates. For now, you can manually add your income and expenses through the Transactions page.'
        },
        {
          id: 'gs-3',
          question: 'What is the difference between a budget and a category?',
          answer: 'A budget is an amount you plan to spend over a specific time period (like monthly groceries). A category is a grouping for similar expenses (like "Food" which could include groceries, dining out, etc.). You can have multiple budgets within a category.'
        }
      ]
    },
    {
      id: 'budgeting',
      title: 'Budgeting',
      icon: <PieChart className="h-5 w-5" />,
      questions: [
        {
          id: 'b-1',
          question: 'How do I edit or delete a budget?',
          answer: 'To edit a budget, go to the Budgets page, find the budget you want to modify, and click the edit icon (pencil). To delete a budget, click the delete icon (trash can) next to the budget. Note that deleted budgets cannot be recovered.'
        },
        {
          id: 'b-2',
          question: 'Can I set up recurring budgets?',
          answer: 'Yes, when creating or editing a budget, you can set it as recurring. You can choose the frequency (weekly, monthly, quarterly, or yearly) and BudgetPro will automatically create new instances of that budget at the specified interval.'
        },
        {
          id: 'b-3',
          question: 'How does rollover for unused budget amounts work?',
          answer: 'BudgetPro allows you to enable rollover for any budget. When enabled, any unused amount from the current period will be added to the next period\'s budget. You can toggle this option in the budget settings.'
        }
      ]
    },
    {
      id: 'reports',
      title: 'Reports & Analytics',
      icon: <TrendingUp className="h-5 w-5" />,
      questions: [
        {
          id: 'r-1',
          question: 'How do I export my financial data?',
          answer: 'You can export your data from the Reports page. Click the "Export" button and choose your preferred format (CSV, Excel, or PDF). The export will include all your financial data for the selected time period.'
        },
        {
          id: 'r-2',
          question: 'Can I customize the reports?',
          answer: 'Yes, on the Reports page you can customize the date range, categories included, and visualization type. Use the filters at the top of the page to tailor the reports to your specific needs.'
        },
        {
          id: 'r-3',
          question: 'How often is the report data updated?',
          answer: 'Report data updates in real-time. Any changes you make to your budgets or transactions will immediately reflect in all reports and visualizations.'
        }
      ]
    },
    {
      id: 'account',
      title: 'Account & Settings',
      icon: <Settings className="h-5 w-5" />,
      questions: [
        {
          id: 'a-1',
          question: 'How do I change my password?',
          answer: 'To change your password, go to Settings > Account Security. Enter your current password followed by your new password. Make sure your new password is strong and unique.'
        },
        {
          id: 'a-2',
          question: 'Can I export all my data from BudgetPro?',
          answer: 'Yes, you can export all your data by going to Settings > Data Management > Export Data. This will generate a comprehensive file containing all your budgets, transactions, and account information.'
        },
        {
          id: 'a-3',
          question: 'How do I delete my account?',
          answer: 'To delete your account, go to Settings > Account > Delete Account. Please note that this action is permanent and cannot be undone. All your data will be permanently erased.'
        }
      ]
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      icon: <Settings className="h-5 w-5" />,
      questions: [
        {
          id: 't-1',
          question: 'Why are my charts not displaying correctly?',
          answer: 'If charts aren\'t displaying correctly, try refreshing the page. If the issue persists, check your browser version and ensure JavaScript is enabled. BudgetPro works best with the latest versions of Chrome, Firefox, Safari, and Edge.'
        },
        {
          id: 't-2',
          question: 'I forgot my password. How can I reset it?',
          answer: 'On the login page, click "Forgot Password" and enter your email address. You\'ll receive instructions to reset your password. If you don\'t see the email, check your spam folder.'
        },
        {
          id: 't-3',
          question: 'Why is the app running slowly?',
          answer: 'Performance issues can sometimes occur with very large datasets. Try archiving old data or using more specific date filters. If the problem continues, contact our support team for assistance.'
        }
      ]
    }
  ];
  const toggleItem = (id) => {
     setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
    const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div>
       <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Frequently Asked Questions</h3>
              
              {/* Category Navigation */}
              <div className="flex overflow-x-auto pb-4 mb-6 scrollbar-hide">
                {faqCategories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg mr-3 whitespace-nowrap ${activeCategory === category.id ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
                  >
                    {category.icon}
                    <span>{category.title}</span>
                  </button>
                ))}
              </div>

              {/* FAQ Items */}
              <div className="space-y-4">
                {filteredCategories
                  .find(cat => cat.id === activeCategory)
                  ?.questions.map(item => (
                    <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleItem(item.id)}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-medium text-gray-900">{item.question}</span>
                        {openItems[item.id] ? (
                          <ChevronUp className="h-5 w-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-500" />
                        )}
                      </button>
                      {openItems[item.id] && (
                        <div className="p-4 bg-gray-50 border-t border-gray-200">
                          <p className="text-gray-700">{item.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
              </div>

              {filteredCategories.find(cat => cat.id === activeCategory)?.questions.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  <p>No questions found matching your search.</p>
                </div>
              )}
            </div>
    </div>
  )
}

export default FAQ
