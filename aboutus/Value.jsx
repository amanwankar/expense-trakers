import React from 'react'
import { Lightbulb,Users ,BookOpen ,Heart  } from 'lucide-react'
function Value() {
  const values = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Innovation',
      description: 'We embrace creative solutions and new approaches to personal finance management.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Collaboration',
      description: 'We believe the best products are built through teamwork and diverse perspectives.'
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'Learning',
      description: 'This project is an opportunity to grow our skills and apply classroom knowledge.'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Passion',
      description: 'We\'re genuinely excited about creating tools that help students manage finances.'
    }
  ]
  return (
    <div>
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-8 text-center">Our Approach</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <div key={index} className="text-center p-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      {value.icon}
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">{value.title}</h4>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
    </div>
  )
}

export default Value
