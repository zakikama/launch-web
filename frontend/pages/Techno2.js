import React, { useState, useEffect } from "react";
import ProgressBar from "../components/ProgressBar";
import "./Techno2.css"; // Create a CSS file for styling (e.g., Fieldset.css)

export default function Techno2() {
 

  return (
    <div>
        <h1>Harnessing the Power of
          <br/>
          Data-Driven Fitness</h1>
          <fieldset className="fieldset-container">
        <div className="bpm">+180 Bpm</div>
        <div className="progress-bar-duration">
          <ProgressBar bgcolor={"#FF0000"} completed={40} durationClassName="duration" />
          <p className="duration">05:00</p>
        </div>
        <div className="label-percentage">
          <p className="label">
            Max HR <span className="percentage">100%</span>
          </p>
        </div>
        <hr className="separator" />


        <div className="bpm">158 - 169 Bpm</div>
        <div className="progress-bar-duration">
          <ProgressBar bgcolor={"#8000FF"} completed={90} durationClassName="duration" />
          <p className="duration">20:00</p>
        </div>
        <div className="label-percentage">
          <p className="label">
          Increase Performance <span className="percentage">80 - 90%</span>
          </p>
        </div>
        <hr className="separator" />
        
        <div className="bpm">145 - 157 Bpm</div>
        <div className="progress-bar-duration">
          <ProgressBar bgcolor={"#FF6B00"} completed={80} durationClassName="duration" />
          <p className="duration">15:00</p>
        </div>
        <div className="label-percentage">
          <p className="label">
          Improve Fitness<span className="percentage">70 - 80%</span>
          </p>
        </div>
        <hr className="separator" />
        
   
        <div className="bpm">133 - 144 Bpm</div>
        <div className="progress-bar-duration">
          <ProgressBar bgcolor={"#8FFF00"} completed={65} durationClassName="duration" />
          <p className="duration">15:00</p>
        </div>
        <div className="label-percentage">
          <p className="label">
          Fat Burn<span className="percentage">60 - 70%</span>
          </p>
        </div>
        <hr className="separator" />
        
           
        <div className="bpm">-130 Bpm</div>
        <div className="progress-bar-duration">
          <ProgressBar bgcolor={"#00FFFF"} completed={50} durationClassName="duration" />
          <p className="duration">15:00</p>
        </div>
        <div className="label-percentage">
          <p className="label">
          Warm Up<span className="percentage">50 - 60%</span>
          </p>
        </div>

        

      </fieldset>

<p>
It's generally recommended to exercise within a
 target heart rate zone,
  which is typically 50-90% of 
  your maximum heart rate.

</p>


<button class="btn">START</button>

    </div>

  );
}
