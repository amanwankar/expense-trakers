import React from 'react'

function Transaction() {
  return (
    <div>
      <div className="transaction-container">
          <h3 className="transaction-title">Transaction History</h3>
          <table className="transaction-table">
            <thead>
              <tr>
                <th className="table-header">Name</th>
                <th className="table-header">Category</th>
                <th className="table-header">Date</th>
                <th className="table-header">Amount</th>
              </tr>
            </thead>
            <tbody className="table-body">
              <tr>
                <td>Starbucks Coffee</td>
                <td>Food</td>
                <td>15 Aug 2025</td>
                <td>₹ 375</td>
              </tr>
              <tr>
                <td>D-mart</td>
                <td>Graosary</td>
                <td>20 Aug 2025</td>
                <td>₹ 3,367</td>
              </tr>
              <tr>
                <td>Flipcart</td>
                <td>Online Shop</td>
                <td>28 Aug 2025</td>
                <td>₹ 485</td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default Transaction
