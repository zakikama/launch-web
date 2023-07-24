import React, { useEffect, useState,Button } from 'react';
import CircularProgress from '../src/components/CircularProgress';
import '../styles/Techno1.css';

export default function Techno1() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const randomPercentage = Math.floor(Math.random() * (99 - 60 + 1) + 60);
    setPercentage(randomPercentage);
  }, []);

  return (
<div class="container">
    <div className="text_1"> 
    “Only the users, who knows, learns and visualizes their fitness 
    insights can grow and perform”
    </div>
    <div className="circle"><CircularProgress
          size={220}
          strokeWidth={10}
          percentage={percentage}
          color="#FF0000"/></div>
    <div className="text_2">This is your maximum-intensity zone used in last HIIT session. 
      Reminder: It's important to warm up properly and gradually increase your heart rate.</div>
      <div className='button'>
      <button className='start' type='submit'> START </button>

      </div>
  </div>
    
  );
}
