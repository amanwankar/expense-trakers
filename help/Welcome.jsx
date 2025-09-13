import React from 'react'
import {  HelpCircle, Mail,MessageSquare,BookOpen } from 'lucide-react';
function Welcome() {
    const contactOptions = [
    {
      id: 'email',
      title: 'Email Support',
      description: 'Send us an email and we\'ll respond within 24 hours',
      icon: <Mail className="h-6 w-6" />,
      action: 'mailto:support@budgetpro.com'
    },
    {
      id: 'chat',
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      icon: <MessageSquare className="h-6 w-6" />,
      action: '#chat'
    },
    {
      id: 'resources',
      title: 'Help Resources',
      description: 'Browse our knowledge base and tutorials',
      icon: <BookOpen className="h-6 w-6" />,
      action: '#resources'
    }
  ];
  return (
    <div>
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white mb-8">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2">How can we help you?</h2>
                  <p className="mb-4">Find answers to common questions or contact our support team</p>
                  <div className="flex space-x-4">
                    {contactOptions.map(option => (
                      <a
                        key={option.id}
                        href={option.action}
                        className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-lg transition-colors"
                      >
                        {option.icon}
                        <span>{option.title}</span>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <HelpCircle className="h-8 w-8" />
                </div>
              </div>
            </div>
    </div>
  )
}

export default Welcome
