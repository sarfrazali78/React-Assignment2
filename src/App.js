import React, { useRef } from 'react';
import './App.css';
import axios from 'axios';

export default function App() {
  const apiUrl = 'https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP';

  const inputRef = useRef(null);

  function mobileOtp() {
    axios.post(apiUrl, {
      mobile: parseInt(inputRef.current.value),
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div>
      <input type="number" ref={inputRef} placeholder='number' />
      <button onClick={mobileOtp}>OTP</button>
    </div>
  );
}


























// import logo from './logo.svg';
// import './App.css';
// import OtpGenerate from './component/Otp';
// import Dog from './component/Axios';
// import { Axios } from 'axios';
// function App() {
 
// }
//   return (
//     <div className="App">
//      {/* <OtpGenerate/> */}
//      <Dog/>
//     </div>
//   );


// export default App;
