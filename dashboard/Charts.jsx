import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,  } from "recharts";
export default function IncomeGraph(){
   const incomeData = [
    { month: "Jan", amount: 3000 },
    { month: "Feb", amount: 3500 },
    { month: "Mar", amount: 4000 },
    { month: "Apr", amount: 4200 },
    { month: "May", amount: 4653 },
    { month: "Jun", amount: 4400 },
  ];

  
  return (
    <div>
    <div className="bg-white p-6 rounded-xl shadow ">
          <h3 className="text-lg font-semibold mb-6">  Income Graph </h3>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={incomeData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="amount" stroke="#4F46E5" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        </div>
  )
}
