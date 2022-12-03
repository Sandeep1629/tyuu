import React from 'react'
import firebase from './firebase'
import Card from '@mui/material/Card';
import './Farm1.css'
import "./otp.css"
import jkl from './assets/otpp.png'
import { Typography } from '@mui/material';
class otp extends React.Component {
  handleChange = (e) =>{
    const {name, value } = e.target
    this.setState({
        [name]: value
      })
  }
  configureCaptcha = () =>{
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        this.onSignInSubmit();
        console.log("Recaptca varified")
      },
      defaultCountry: "IN"
    });
  }
  onSignInSubmit = (e) => {
    e.preventDefault()
    this.configureCaptcha()
    const phoneNumber = "+91" + this.state.mobile
    console.log(phoneNumber)
    const appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          console.log("OTP has been sent")
          alert("otp has sent your mobile number please check my dear customer")
          // ...
        }).catch((error) => {
          // Error; SMS not sent
          // ...
          console.log("SMS not sent")
        });
  }
  onSubmitOTP = (e) =>{
    e.preventDefault()
    const code = this.state.otp
    console.log(code)
    window.confirmationResult.confirm(code).then((result) => {
      // User signed in successfully.
      const user = result.user;
      console.log(JSON.stringify(user))
      alert("User is verified")
      window.location.replace("http://localhost:3000/home")
      // ...
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
    });
    
  }
  render() {
    return (
      <center>
            <div className="homeee45"> 
        <div className="homee__lefte45"> 
      <div class="form-boxx">
        
          <Card class="sandy"sx={{maxWidth:575}}>
          
            <Typography class="tyu">Login With Mobile</Typography>
      
        <br></br>
        <form onSubmit={this.onSignInSubmit}>
          <div id="sign-in-button"></div>
          <input type="number" name="mobile" placeholder="Mobile number" required onChange={this.handleChange}/>
          <br></br>
         
          <input type ="submit"  value="submit"/><br/>
        </form>
     
       
        <form onSubmit={this.onSubmitOTP}>
          <input type="number" name="otp" placeholder="OTP Number" required onChange={this.handleChange}/>
          <br></br>
          
          <input type ="submit"  value="submit"/><br/>
        </form>
     
        </Card> 
      </div>
      </div> 
      <div className="homee__righte45"> 
        <div className="homee__imagee45"> 
          <img src={jkl} alt="Banking" /> 
        </div> 
     
      </div> 
 
      </div>
   
      </center>
    )
  }
}
export default otp