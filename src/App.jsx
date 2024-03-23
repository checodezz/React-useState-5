import { useState } from "react";
import "./App.css";

const ValidateNumber = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const clickHandler = () => {
    phoneNumber.length > 0 && phoneNumber.length === 10
      ? alert("Valid Phone Number.")
      : alert("Invalid Phone Number. Please enter 10 digits.");
  };
  return (
    <div>
      <label htmlFor="phnumber">Enter your phone number: </label>
      <input
        type="number"
        id="phnumber"
        onChange={(event) => setPhoneNumber(event.target.value)}
      />
      <button onClick={clickHandler}>Validate Phone Number</button>
    </div>
  );
};

const ValidatePassword = () => {
  const [password, setPassword] = useState("");
  const clickHandler = () => {
    if (password.length >= 8) {
      alert("Password Strength : Strong");
    } else {
      alert("Password Strength : Weak");
    }
  };
  return (
    <div>
      <label htmlFor="passwordInput">Enter Your Password: </label>
      <input
        id="passwordInput"
        type="password"
        onChange={(event) => setPassword(event.target.value)}
      />
      <button onClick={clickHandler}>Check Password Strength</button>
    </div>
  );
};
//skipped will do later
// const AgeCalculator = () => {

//   return(
//     <div>
//     <label htmlFor="birthDate">Enter Your Birth Date: </label>
//       <input type="date" id="birthDate" onChange={(event) => console.log(typeof(event.target.value))}/>
//       <button>Calculate Age</button>
//     </div>
//   )
  
// }


export default function App() {
  return (
    <main>
      <ValidateNumber />
      <br />
      <br />
      <ValidatePassword />
      <br/>
      <br/>
      
    </main>
  );
}
