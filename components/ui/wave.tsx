import React from "react";

const Wave = () => {
  return (
    <svg
      width="100%"
      height="100%"
      id="svg"
      viewBox="0 0 1440 389"
      xmlns="http://www.w3.org/2000/svg"
      className="transition duration-300 ease-in-out delay-150"
    >
      <defs>
        <linearGradient id="gradient" x1="52%" y1="0%" x2="48%" y2="100%">
          <stop offset="5%" stopColor="#9747ff"></stop>
          <stop offset="95%" stopColor="#7320df"></stop>
        </linearGradient>
      </defs>
      <path
        d="M 0,400 C 0,400 0,200 0,200 C 122.92857142857142,229.85714285714286 245.85714285714283,259.7142857142857 351,251 C 456.14285714285717,242.28571428571428 543.5000000000001,195.00000000000003 665,167 C 786.4999999999999,138.99999999999997 942.1428571428571,130.28571428571428 1077,139 C 1211.857142857143,147.71428571428572 1325.9285714285716,173.85714285714286 1440,200 C 1440,200 1440,400 1440,400 Z"
        stroke="none"
        strokeWidth="0"
        fill="url(#gradient)"
        fillOpacity="1"
        className="transition-all duration-300 ease-in-out delay-150 path-0"
      ></path>
    </svg>
  );
};

export default Wave;
