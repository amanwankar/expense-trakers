"use client";
import React from 'react'

import {   ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import './DashboardContent.css';

function Piechart() {
  
  const activityData = [
    { name: "House", value: 32, color: "#4F46E5" },
    { name: "Food", value: 25, color: "#10B981" },
    { name: "Investing", value: 17, color: "#F59E0B" },
    { name: "Online Shop", value: 16, color: "#EC4899" },
    { name: "Beauty", value: 10, color: "#6366F1" },
  ];
  return (
    <div>
      <div className="chart-container">
          <h3 className="chart-title"> Your Activity</h3>
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={activityData}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {activityData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
    </div>
  )
}

export default Piechart
