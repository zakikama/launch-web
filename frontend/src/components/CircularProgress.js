import React, { useEffect, useState } from "react";

const CircularProgress = ({ size, strokeWidth, percentage, color,fill}) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setProgress(percentage);
  }, [percentage]);

  const viewBox = `0 0 ${size} ${size}`;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * Math.PI * 2;
  const dash = (progress * circumference) / 100;

  return (
    <svg width={size} height={size} viewBox={viewBox}>
      <circle
        fill="none"
        stroke="#212121"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
      />
      <circle
        fill="none"
        stroke={color}
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        strokeDasharray={[dash, circumference - dash]}
        strokeLinecap="round"
        style={{ transition: "all 2.5s" }}
      />
      <text
        fill={"#FFFFFF"}
        fontSize="36px"
        fontFamily="Comfortaas"
        fontWeight={800}
        x="50%"
        y="50%"
        dy="20px"
        textAnchor="middle"
      >

        <tspan x="50%" dy="0" style={{ fontFamily: 'Comfortaa', color: "#FFFFFF" }} >{`${percentage} %`} </tspan>
        
        <tspan x="50%" dy="3em" style={{ fontSize: '13px', fontFamily: 'Comfortaa', fontWeight: 300, lineHeight: '18.10px', color: "#FFFFFF" }}>HR Target Zone</tspan>

      </text>
    </svg>
  );
};

export default CircularProgress;
