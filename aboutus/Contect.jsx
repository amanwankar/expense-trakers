import React from 'react'
import {  Mail, MapPin, Linkedin, Twitter, Facebook, Instagram, BookOpen,  } from 'lucide-react';
function Contect() {
  return (
    <div>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 mb-8">
                    <div className="text-center max-w-2xl mx-auto">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">Get In Touch</h3>
                      <p className="text-gray-700 mb-6">
                        Have questions about our project or want to collaborate? We'd love to hear from you.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex flex-col items-center">
                          <Mail className="h-6 w-6 text-blue-600 mb-2" />
                          <span className="font-medium text-gray-900">Email</span>
                          <span className="text-sm text-gray-600">team@budgetpro.edu</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <MapPin className="h-6 w-6 text-blue-600 mb-2" />
                          <span className="font-medium text-gray-900">Campus</span>
                          <span className="text-sm text-gray-600">Computer Science Dept</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <BookOpen className="h-6 w-6 text-blue-600 mb-2" />
                          <span className="font-medium text-gray-900">Project</span>
                          <span className="text-sm text-gray-600">Capstone 2024</span>
                        </div>
                      </div>
                      <div className="mt-8 flex justify-center space-x-4">
                        <a href="#" className="text-gray-400 hover:text-blue-600">
                          <Facebook className="h-6 w-6" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-blue-400">
                          <Twitter className="h-6 w-6" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-blue-700">
                          <Linkedin className="h-6 w-6" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-pink-500">
                          <Instagram className="h-6 w-6" />
                        </a>
                      </div>
                    </div>
                  </div>
    </div>
  )
}

export default Contect
