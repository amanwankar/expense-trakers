import React from 'react'

function Goles() {
  return (
    <div>
       <div className="goals-container">
          <h3 className="goals-title">My Goals</h3>
          <div className="goal-item">
            <p className="goal-name">Travel</p>
            <div className="progress-bar">
              <div className="progress-fill-blue" style={{ width: "50%" }}></div>
            </div>
            <p className="goal-amount">₹1,000 / ₹2,000</p>
          </div>
          <div className="goal-item">
            <p className="goal-name">Car</p>
            <div className="progress-bar">
              <div className="progress-fill-green" style={{ width: "20%" }}></div>
            </div>
            <p className="goal-amount">₹8,500 / ₹45,000</p>
          </div>
        </div>
    </div>
  )
}

export default Goles
