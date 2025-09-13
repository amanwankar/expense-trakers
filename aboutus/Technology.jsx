import React from 'react'
import {Code } from 'lucide-react';
function Technology() {
  const technologies = [
    { name: 'Next.js', category: 'Frontend' },
    { name: 'React', category: 'Frontend' },
    { name: 'Tailwind CSS', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'Superbase', category: 'Authentication' },
    { name: 'Chart.js', category: 'Data Visualization' },
  ];
  return (
    <div>
       <div className="bg-white rounded-xl border border-gray-200 p-6 mb-12">
                    <h3 className="text-xl font-semibold text-gray-900 mb-8 text-center">Technology Stack</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {technologies.map((tech, index) => (
                        <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                          <Code className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                          <h4 className="font-medium text-gray-900">{tech.name}</h4>
                          <p className="text-xs text-gray-500">{tech.category}</p>
                        </div>
                      ))}
                    </div>
                  </div>
    </div>
  )
}

export default Technology
