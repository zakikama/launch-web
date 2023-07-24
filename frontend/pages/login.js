import React from 'react';
import "../styles/login.css";
import '../styles/fonts.css';


function login() {
  return (
    <div>
      <div className="container">
        <div className="containerchild" >
          <div className="gauche">
            <div className="bg">
              <img className="tel" src="assets/bg.png" alt="img" />
            </div>
          </div>
          <div className="droite">
            <div className="logo">
              <img src="assets/Logo.svg" alt="img" />
            </div>
            <div className="test">
              <div className="icones">
              <a
                href="https://accounts.google.com/InteractiveLogin/signinchooser?elo=1&ifkv=AeDOFXgBkQH3-7VjCM-4EfD_dDbzM89lc2STJe6fd2pAPAtWq2n9UsHv-W4bYvM3U7_s1idVDQU-&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="assets/ggle-removebg-preview.png"
                  className="google"
                  alt="Gmail"
                />
              </a>
              <a
                href="https://m.facebook.com/login/?locale=fr_FR"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="assets/fb-removebg-preview.png"
                  className="fb"
                  alt="fb"
                />
              </a>
             
                <img
                  src="assets/spotify-removebg-preview.png"
                  className="spotify"
                  alt="spotify"
                />
              </a>
              </div>
            </div>
            <div className="X">
              <p> USE YOUR EMAIL ACCOUNT</p>
            </div>
            <div className='formulairecontainer'>
            <div className="formulaire">
            <form>
              <div className="email" >
                <label className="center-placeholder" for="email"> </label>
                <input
                  type="email"
                  class="large-input"
                  id="mdp"
                  name="mdp"
                  placeholder='Entrez votre email'
                />
              </div>
              <div className="password">
                <label className="center-placeholder"for="password"> </label>
                <input
                  type="password"
                  class="large-input"
                  id="password"
                  name="password"
                  placeholder='Entrez votre mot de passe'
                />
                 <button type="submit" className="submit">
                  LOGIN
                </button>
              </div>
              </form>
              </div>
            </div>
            <div className="re">
              <p> Forgot your password?</p>
            </div>
            <div className='ligneor'>
            <div className="ligne1">
              <img src="assets\Line 1.svg" alt="img" />
            </div>
            <div className="or">
             <p>or</p>
            </div>
            <div className="ligne2">
              <img src="assets\Line 1.svg" alt="img" />
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default login;
