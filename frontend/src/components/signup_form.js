import React from 'react';
import "../../src/app/globals.css";

function RegistrationForm() {
  return (
    <div>
      <form className="w-full max-w-sm mx-auto bg-dark p-8 rounded-md shadow-md">
        <div className="mb-4">
          <label className="block text-[#67e8f9] text-sm font-bold mb-2" htmlFor="name">Name</label>
          <input
            className="w-full bg-[#494949] text-white px-3 py-2 border rounded-md focus:outline-none focus:[#494949]"
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#67e8f9] text-sm font-bold mb-2" htmlFor="email">Email</label>
          <input
            className="w-full bg-[#494949] text-white px-3 py-2 border rounded-md focus:outline-none focus:[#494949]"
            type="email"
            id="email"
            name="email"
            placeholder="Yourname@example.com"
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#67e8f9] text-sm font-bold mb-2" htmlFor="password">Password</label>
          <input
            className="w-full bg-[#494949] text-white px-3 py-2 border rounded-md focus:outline-none focus:[#494949]"
            type="password"
            id="password"
            name="password"
            placeholder="********"
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#67e8f9] text-sm font-bold mb-2" htmlFor="confirm-password">Confirm Password</label>
          <input
            className="w-full text-white bg-[#494949] px-3 py-2 border rounded-md focus:outline-none focus:[#494949]"
            type="password"
            id="confirm-password"
            name="confirm-password"
            placeholder="********"
          />
        </div>
        <button
          className="w-full bg-[#67e8f9] text-black text-sm font-bold py-2 px-4 rounded-md hover:[#494949] transition duration-300"
          type="submit"
        >
          Register
        </button>
      </form>
      <div className="flex justify-center mt-4 space-x-4 mt-4">
        <a href='https://accounts.google.com/InteractiveLogin/signinchooser?continue=https%3A%2F%2Faccounts.google.com%2F&followup=https%3A%2F%2Faccounts.google.com%2F&passive=1209600&ifkv=AeDOFXhed9Fi2XrbLp_BMmW34fL4MltkVUQ56Tqnt_sLsBldsCMnzVnjmvEs_ZaNZSvf8SOijj1jwg&flowName=GlifWebSignIn&flowEntry=ServiceLogin'target='_blank'>
        <img className="w-12 h-16 mx-2 mt-2" src="assets\ggle-removebg-preview.png" alt="Image 1" ></img>
        </a>
        <a href='https://m.facebook.com/login/?locale=fr_FR' target='_blank'>
        <img className="w-20 h-15 mx-2" src="assets\fb-removebg-preview.png" alt="Image 2" />
        </a>
        <a href='https://accounts.spotify.com/en/login' target='_blank'>
        <img className="w-20 h-20 mx-2" src="assets\spotify-removebg-preview.png" alt="Image 3" />
        </a>
      </div>
    </div>
  );
}

export default RegistrationForm;
