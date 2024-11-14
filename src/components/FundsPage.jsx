// components/FundsPage.js
import React from 'react';
import { AiOutlineInfoCircle, AiOutlinePlus } from 'react-icons/ai';

function FundsPage() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', color: '#333' }}>
      
      {/* Centered Funds Title */}
      <h3 style={{ color:'gray', fontSize: '20px', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>Funds</h3>
      
      {/* Tabs for Equity and Commodity without outline */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <button style={{ 
          flex: 1, padding: '10px', fontSize: '16px', fontWeight: 'bold', 
          backgroundColor: 'transparent',color: '#007bff', border: 'none', cursor: 'pointer' 
        }}>
          Equity
        </button>
        <button style={{ 
          flex: 1, padding: '10px', fontSize: '14px', fontWeight: 'bold', 
          backgroundColor: 'transparent', border: 'none',  cursor: 'pointer' 
        }}>
          Commodity
        </button>
      </div>

      {/* Available Margin Section */}
      <div style={{ 
        backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px', textAlign: 'center',
        marginBottom: '20px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
      }}>
        <h6 style={{ fontSize: '15px', color: 'gray', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          Available margin (Cash + Collateral)<AiOutlineInfoCircle style={{ marginLeft: '5px' }} />
        </h6>
        <h5 style={{color: '#007bff',fontWeight:'bolder'}}>₹57,83,213.00 </h5>
        <p style={{color: '#007bff',fontSize:'15px',marginTop:'14px',fontWeight:'lighter'}}>View Statement</p>
      </div>

      {/* Action Buttons for Adding and Withdrawing Funds */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <button style={{ 
          flex: 1, padding: '10px 20px', backgroundColor: '#4CAF50', color: '#fff', 
          border: 'none', borderRadius: '5px', fontSize: '14px', cursor: 'pointer', 
          display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '10px' 
        }}>
          <AiOutlinePlus style={{ marginRight: '5px' }} /> Add funds
        </button>
        <button style={{ 
          flex: 1, padding: '10px 20px', backgroundColor: '#2196F3', color: '#fff', 
          border: 'none', borderRadius: '5px', fontSize: '14px', cursor: 'pointer', 
          display: 'flex', alignItems: 'center', justifyContent: 'center' 
        }}>
          <i className="fa-solid fa-rotate-left" style={{ marginRight: '5px' }}></i> Withdraw
        </button>
      </div>

      {/* Available Cash and Used Margin Section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ color:'gray' }}>Available cash</p>
          <p style={{ fontSize: '15px' }}>57,83,213.00</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <p style={{color:'gray' }}>Used margin</p>
          <p style={{ fontSize: '15px' }}>0.00</p>
        </div>
      </div>
      <hr style={{ margin: '20px 0', border: '0.5px solid #ddd' }} />


      {/* Details Section */}
      <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}>
        <div style={{ fontSize: '14px' }}>
          <p>Opening balance: <span style={{ float: 'right' }}>57,83,213.00</span></p>
          <p>Payin: <span style={{ float: 'right' }}>0.00</span></p>
          <p>Payout: <span style={{ float: 'right' }}>0.00</span></p>
          <p>SPAN: <span style={{ float: 'right' }}>0.00</span></p>
          <p>Delivery margin: <span style={{ float: 'right' }}>0.00</span></p>
          <p>Exposure: <span style={{ float: 'right' }}>0.00</span></p>
          <p>Option premium: <span style={{ float: 'right' }}>0.00</span></p>
        </div>

        {/* Horizontal Line */}
        <hr style={{ margin: '20px 0', border: '0.5px solid #ddd' }} />

        {/* Additional Details */}
        <div style={{ fontSize: '14px' }}>
          
          <p>Collateral (Liquid funds): <span style={{ float: 'right' }}>0.00</span></p>
          <p>Collateral (Equity): <span style={{ float: 'right' }}>0.00</span></p>
          <p>Total Collateral : <span style={{ float: 'right' }}>0.00</span></p>
        </div>
      </div>
      
    </div>
  );
}

export default FundsPage;
