import React from 'react'
function Misson() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Mission</h3>
                <p className="text-gray-700 mb-4">
                  To create an intuitive budgeting application specifically designed for students 
                  who are managing limited resources while pursuing their education.
                </p>
                <p className="text-gray-700">
                  We aim to simplify financial tracking and help students develop good money 
                  management habits that will serve them beyond their college years.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Learning Goals</h3>
                <p className="text-gray-700 mb-4">
                  This project serves as our capstone experience, allowing us to apply theoretical 
                  knowledge from our computer science courses to a real-world application.
                </p>
                <p className="text-gray-700">
                  Through BudgetPro, we're gaining practical experience in full-stack development, 
                  project management, and user-centered design.
                </p>
              </div>
            </div>
    </div>
  )
}

export default Misson
