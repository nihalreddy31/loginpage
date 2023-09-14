import React from 'react';
import './App.css';
import profile from '../src/images/logobw.jpg'
import emaillogo from '../src/images/email.png'
import password from '../src/images/password image.png'
function App() {
  return (
    <div className="main">
    <div className="sub-main">
      <div>
        <div className="images">
          <div className="container-image">
            <img src={profile} alt="profile" className="profile"/>

          </div>

        </div>
           <div>
             <h1> LOGIN PAGE Demo</h1>
           <div>
            <img src={emaillogo} alt="email" className="email"/>
             <input type="text" placeholder="username" className="name"/>
          </div>
             <div className="second-input">
             <img src={password } alt="pass" className="pass"/>
             <input type="text" placeholder="password" className="password"/>
           </div>
            <div>
              <div className="login-button">
              <button className="button"> LOGIN </button>
              </div>
            </div>
            <div> 
              <p className="link"> 
                <a href="#"> forgot password ?</a> or <a href="#">sign up</a>
              </p>
            </div>
        </div>
       
      </div>

    </div>
    </div>
  );
}

export default App;
