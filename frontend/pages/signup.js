import React from 'react';
import "../styles/signup.css";
import '../styles/fonts.css';
import RegistrationForm from "../src/components/signup_form.js"

function SignUp() {
  return (
    <div>
      <div className="container hidden md:block md:w-1/2">
        <div className="containerchild" >
          <div className="gauche">
            <div className="bg">
              <img className="tel" src="assets/bg.png" alt="img" />
            </div>
          </div>
          <div className="droite md:w-1/2 bg-dark p-8 rounded-md shadow-md">
            <div className="logo">
              <img src="assets/Logo.svg" alt="img" />
            </div>
            <div className="test">
              <div className="icones">
                {/* Vos liens d'inscription avec des icônes ici */}
              </div>
            </div>
            <div className="X">
              <p>CREATE AN ACCOUNT</p>
            </div>
            <div className='formulairecontainer'>
              <RegistrationForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
