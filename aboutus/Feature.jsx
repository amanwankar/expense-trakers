import React from 'react'
import { Star } from 'lucide-react';
function Feature() {
  const features = [
    {
      title: 'Expense Tracking',
      description: 'Easily track your daily expenses with intuitive categorization.'
    },
    {
      title: 'Budget Planning',
      description: 'Set monthly budgets and get alerts when you approach your limits.'
    },
    {
      title: 'Visual Reports',
      description: 'Understand your spending patterns with interactive charts and graphs.'
    },
    {
      title: 'Student Discounts',
      description: 'Discover exclusive student discounts and savings opportunities.'
    }
  ];
  return (
    <div>
       <div className="bg-white rounded-xl border border-gray-200 p-6 mb-12">
                    <h3 className="text-xl font-semibold text-gray-900 mb-8 text-center">Key Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {features.map((feature, index) => (
                        <div key={index} className="flex items-start p-4 bg-blue-50 rounded-lg">
                          <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                            <Star className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                            <p className="text-gray-600 text-sm">{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
      
    </div>
  )
}

export default Feature
