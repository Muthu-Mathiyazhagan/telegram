import React,{useRef} from "react";
// import axios from "axios";
import "./App.css";


function App() {
  let iptPhone = useRef();
let iptOtp = useRef();

  // const phone = () => {
  //   const phone = iptPhone.current.value;
  //   return axios.get("http://localhost:3010/first/"+ phone)
  //         .then((response) => console.log(response));}

 async function phone() {
    const phone = iptPhone.current.value;

    const url = "http://localhost:3010/first/" + phone;
    const response = await fetch(url);
    console.log(response);
  }

// const otp = () => {
//   const otp = iptOtp.current.value;
//   return axios.get("http://localhost:3010/second/"+ otp)
//         .then((response) => console.log(response.data));}

  async function otp() {
    const otp = iptOtp.current.value;

    const url = "http://localhost:3010/second/" + otp;
    const response = await fetch(url);
    console.log(response);
  }

 
  
  return (
    <div className="App">
      <header className="App-header">
        <div className="form">
          <h1>Telegram</h1>

          <label>
            Phone Number:
            <input name="phoneNumber" ref={iptPhone} type="phoneNumber" />
            <button onClick={phone} id="phone" className="button-btn">
              Send OTP
            </button>
          </label>

          <label>
            OTP:
            <input name="otp" ref={iptOtp} type="otp" />
          </label>

          <button onClick={otp} id="otp">Submit</button>
        </div>
      </header>
    </div>
  );
}

export default App;
