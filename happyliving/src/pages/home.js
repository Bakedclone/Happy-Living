import React from 'react'
import Navbar from '../Components/navbar'
import Body from '../section/home/body'
import Paynow from '../Components/Payment/paynow'
function Home() {
  return (
    <div>
        Home Page
        <Navbar />
        <Body />
        <Paynow />
    </div>
  )
}

export default Home