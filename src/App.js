
import './App.css';

import React, {useState} from 'react';





function App() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const sendConnectionRequest = (index) => {
    // Simulate the connection request sending
    console.log(`Sending connection request #${index + 1}`);
    // Here you would add the logic to send the actual request to LinkedIn
  };

  const handleConnectAll = () => {
    if (isProcessing) return; // Prevent multiple clicks while processing
    setIsProcessing(true);
    setStatusMessage('Processing requests...');

    let requestCount = 0;
    const totalRequests = 100;

    const sendRequestsWithDelay = () => {
      if (requestCount < totalRequests) {
        sendConnectionRequest(requestCount);
        requestCount++;

        // Set a random delay between 1 to 3 seconds
        const delay = Math.floor( Math.random() *  2000) + 1000;

        setTimeout(sendRequestsWithDelay, delay);
      } else {
        setIsProcessing(false);
        setStatusMessage('All requests have been sent!');
      }
    };

    // Start sending requests
    sendRequestsWithDelay();
  };
  return (
    <div className="App">

     <button className="connect-with-all" onClick={handleConnectAll} disabled={isProcessing} >
     {isProcessing ? 'Sending Requests...' : 'Connect with All'}
      </button>
      <p>{statusMessage}</p>
    </div>
  );
}

export default App;
