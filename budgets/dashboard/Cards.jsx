import React from 'react'
import './DashboardContent.css';
function Cards() {
  return (
    <div>
      <section className="cards-grid">
        {[
          { title: "Total Balance", value: "2,324.44", change: "+2.2%", color: "cyan" },
          { title: "Total Income", value: "4,778.52", change: "+3.6%", color: "blue" },
          { title: "Total Expenses", value: "2,103.77", change: "-1.3%", color: "pink" },
          { title: "Total Savings", value: "9,500.25", change: "+1.9%", color: "purple" },
          
        ].map((card, idx) => (
          <div key={idx} className="card">
            <h2 className="card-title">{card.title}</h2>
           <p className="card-value">{card.value}</p>
            <span className={`card-change ${card.color}`}>
              {card.change}
            </span>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Cards
