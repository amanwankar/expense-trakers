import React from 'react'
export default function Static() {
   const stats = [
    {
      value: '4',
      label: 'Team Members'
    },
    {
      value: '1000+',
      label: 'Lines of Code'
    },
    {
      value: '3',
      label: 'Months of Development'
    },
    {
      value: '--',
      label: 'Test Users'
    }
  ];

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
    </div>
  )
}
