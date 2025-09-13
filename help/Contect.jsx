import React from 'react'
import {  HelpCircle, Mail, MessageSquare, Phone, FileText, Video, DollarSign, } from 'lucide-react';
function Contect() {
  const resources = [
      {
        title: 'User Guide',
        description: 'Complete guide to using all BudgetPro features',
        icon: <FileText className="h-5 w-5" />,
        link: '#'
      },
      {
        title: 'Video Tutorials',
        description: 'Step-by-step video guides for common tasks',
        icon: <Video className="h-5 w-5" />,
        link: '#'
      },
      {
        title: 'Budgeting Tips',
        description: 'Expert advice for effective budget management',
        icon: <DollarSign className="h-5 w-5" />,
        link: '#'
      },
      {
        title: 'Community Forum',
        description: 'Connect with other BudgetPro users',
        icon: <MessageSquare className="h-5 w-5" />,
        link: '#'
      }
    ]

  return (
    <div>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Support</h3>
                <p className="text-gray-600 mb-6">Our team is here to help you with any questions or issues.</p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Email Us</h4>
                      <p className="text-sm text-gray-600">support@budgetpro.com</p>
                      <p className="text-xs text-gray-500 mt-1">Typically responds within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Call Us</h4>
                      <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
                      <p className="text-xs text-gray-500 mt-1">Mon-Fri, 9AM-5PM EST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Live Chat</h4>
                      <p className="text-sm text-gray-600">Available 24/7</p>
                      <p className="text-xs text-gray-500 mt-1">Click to start a conversation</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Help Resources</h3>
                <p className="text-gray-600 mb-6">Explore our guides and tutorials to get the most out of BudgetPro.</p>
                
                <div className="space-y-4">
                  {resources.map((resource, index) => (
                    <a
                      key={index}
                      href={resource.link}
                      className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all"
                    >
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        {resource.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{resource.title}</h4>
                        <p className="text-sm text-gray-600">{resource.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
    </div>
  )
}

export default Contect
