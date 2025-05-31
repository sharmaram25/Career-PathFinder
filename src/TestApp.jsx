import React from 'react';

function TestApp() {
  return (
    <div style={{ 
      color: 'white', 
      background: 'blue', 
      padding: '20px', 
      fontSize: '24px',
      position: 'fixed',
      top: '0',
      left: '0',
      zIndex: '9999'
    }}>
      React is working! This is a test component.
    </div>
  );
}

export default TestApp;
