import React from 'react'
import Mapphoto from './Mapphoto.jpg'
import Map from "./Map.jpg"
import Calculator from './Calculator.jpg'
import community from './community.jpg'
function Home(){
    return(
     <div  className='bg-black'>
        <div className='bg-emerald-300 text-center text-2xl text-white p-2  '>
        Welcome to the E-Waste Facility Locator
        </div>
        <div className='flex w-5/6'>
            <div>
                <h1 className='text-7xl my-5 mx-2 text-green-500 px-10'>Your One-Stop Solution for Responsible E-Waste Disposal</h1>
                <p className='text-3xl my-5 mx-2 text-white p-10'>Are you looking for a convenient way to dispose of your old electronic devices while making a positive impact on the environment? Look no further! The E-Waste Facility Locator is here to help.</p>
            </div>
            <div className=''>
                <img src={Mapphoto} alt="Map" className=''/>
            </div>
        </div>
        <div className='flex '>
        <div className=' px-5'>
                <img src={Map} alt="Map" className='h-fit w-128'/>
            </div>
            <div>
                <h1 className='text-7xl my-5 mx-2 text-green-500 b'>Earn Rewards for Responsible Disposal</h1>
                <p className='text-3xl my-5 mx-2 text-white'>
                At E-Waste Facility Locator, we appreciate your commitment to the environment. That's why we offer rewards for every responsible e-waste disposal. Here's how it works
                </p>
            </div>
            
        </div>
        <div className='flex '>
            <div>
                <h1 className='text-7xl my-5 mx-2 text-green-500 px-10'>E-Waste Calculator</h1>
                <p className='text-3xl my-5 mx-2 text-white p-10'>Wondering about the environmental impact of your old gadgets? Our E-Waste Calculator has the answers!</p>
            </div>
            <div className='1/2'>
                <img src={Calculator} alt="Map" className='h-fit w-128'/>
            </div>
        </div>
        <div>
            <h1 className='text-center text-2xl p-4 '>Why Choose Us </h1>
            <div className='grid grid-cols-3 gap-10 justify-center mx-48 '>
                <div className='  text-center bg-red-300  p-10  '>Convenience: Finding the nearest e-waste recycling facility has never been easier. With our user-friendly app, you can locate the closest recycling centers with just a few taps.</div>
                <div  className='text-center bg-red-300  p-10 '>Comprehensive Information: Get detailed information about each facility, including addresses, operating hours, accepted items, and user reviews. We ensure that you have all the information you need to make the right choice.</div>
                <div  className=' text-center bg-red-300  p-10 '>Sustainability: We're committed to promoting responsible e-waste disposal. By using our app, you're contributing to a greener and more sustainable future.</div>
            </div>
        </div>
        <div>
        <h1 className='text-center text-2xl p-4 '>Join Our Community </h1>
        <div className='flex px-10'>
        <div className=''>
                <img src={community} alt="Map" className=''/>
            </div>
            <div>
            <p className='text-3xl  text-white w-5/6 px-10 py-5'>
            Become part of a growing community of individuals, businesses, and organizations dedicated to reducing electronic waste. Share your experiences, leave reviews, and help others make informed decisions. Together, we can make a difference!
                </p>
            </div>
            </div>
        </div>
        </div>
     
    )
}
export default Home