import React from 'react'
import { ReactTyped } from "react-typed";
function Hero() {
  return (
    <div className="text-white">
      <div className="max-w-[800px] w-full h-screen mx-auto text-center flex flex-col items-center mt-[100px]">
        <p className="font-bold text-blue-600 text-4xl">Buy yourself a Ninja</p>
        <h1 className="font-semibold text-2xl">They are not Free Yet</h1>
        <p className="font-semibold text-3xl">Get yourself ONE</p>
        <ReactTyped className='text-2xl font-bold text-blue-600 '
          strings={[
            "Brown Ninja", "Light Skin Ninja", "Pitch Black Ninja",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />

      </div>
    </div>
  )
}

export default Hero