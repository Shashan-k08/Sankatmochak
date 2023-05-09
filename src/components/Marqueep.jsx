import React from 'react'
import Marquee from "react-fast-marquee";
const Marqueep = () => {
  return (
    <div className='marq fl-c'>
      <h3>Recent updates</h3>
      <div className="marq-box glow">
        <ul>
          <Marquee ><li>1. Sudan Crisis: 31 Tribals From Karnataka Stranded, Embassy Asks Citizens Not To Venture Out</li></Marquee>
          <Marquee ><li>2 .Avalanche Warning Issued For 12 Districts Of J&K For Next 2 Days, Locals Advised To Take P</li></Marquee>
          <Marquee ><li>3 .Joshimath Divided Into 3 Zones, Town's Most-damaged Buildings to be Completely Demolished</li></Marquee>
          <Marquee ><li>4  .Himachal Pradesh: These 4 Places In Kangra To Get Early Landslide Detection And Warning </li></Marquee>
          <Marquee> <li>5 .International Flights: UAE Withdraws Covid Curbs For International Air Passengers. What it </li></Marquee>
          <br />  </ul>

      </div>
    </div>
  )
}

export default Marqueep