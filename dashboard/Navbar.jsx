import React from 'react'
import { Search } from 'lucide-react'
function Navbar() {
  return (
    <div>
      <header className="dashboard-header">
        <div className="search-container">
          <div className="search-wrapper">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="Search budgets..."
              className="search-input"
            />
          </div>
        </div>

                                {/* calender icon */}

        <div className="date-container">
          <input
            type="date"
            className="date-input"
            defaultValue="2022-07-19"
          />
        </div>
      </header>
    </div>
  )
}

export default Navbar
