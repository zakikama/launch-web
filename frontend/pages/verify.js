import React from 'react';
import "../styles/verify.css";
import Lottie from "lottie-react";
import ConfirmedAnimation from "../public/assets/animations/Confirmed.json";

function Verify() {
    return (
        <div className='tout'>
            <img className= "logo" src="assets\Logo.svg"alt='img'></img>
            <div className="outer">
                <div className="inner">
                    <div className='enveloppe'>
                        <Lottie animationData={ConfirmedAnimation} loop={true} height={40}
                                width={40}
                        />
                    </div>
                    <p className='mail'>
                        THANK YOU
                    </p>
                    <p className='mail_2'>
                        You have verified your email
                    </p>
                    <a className="continue-button" href="/" >CONTINUE</a>
                </div>
            </div>
            <p className="text-center text-white font-medium text-xs">&copy; 2023 LUXONIK. All rights reservered.</p>
        </div>
    )
}
export default Verify