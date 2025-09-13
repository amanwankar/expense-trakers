import React from 'react'
import {  GraduationCap, } from 'lucide-react';
export default function Hero() {
  return (
    <div>
       <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white mb-8">
              <div className="flex items-start justify-between">
                <div className="max-w-2xl">
                  <h2 className="text-3xl font-bold mb-4">Student-Built Finance Solution</h2>
                  <p className="text-lg mb-6">
                    BudgetPro is a capstone project developed by computer science students to help 
                    fellow students manage their finances effectively during their college years.
                  </p>
                  <div className="flex space-x-4">
                    <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                      View Project Code
                    </button>
                    <button className="border border-white text-white px-6 py-2 rounded-lg font-medium hover:bg-white/10 transition-colors">
                      Try Demo
                    </button>
                  </div>
                </div>
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                  <GraduationCap className="h-12 w-12" />
                </div>
              </div>
            </div>
    </div>
  )
}
