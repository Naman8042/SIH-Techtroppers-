import React from 'react'
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/facebook'
import 'react-social-icons/instagram'
import 'react-social-icons/twitter'
import 'react-social-icons/linkedin'
import 'react-social-icons/whatsapp'
import 'react-social-icons/email'
export default function Footer(){
    return (
       <div className='bg-green-600 '>
         <div className='flex justify-center gap-5 border-b-2'>
            <div className='px-20 py-5'>
                <h1 className='text-xl pb-2 text-white'>For Business</h1>
                <h2 className='text-lg text-white'>Employer</h2>
                <h2 className='text-lg text-white'>Company</h2>
            </div>
            <div  className='px-24 py-5'>
                <h1 className='text-xl pb-2 text-white'>Useful Links</h1>
                <h2 className='text-lg text-white'> Your Account</h2>
                <h2 className='text-lg text-white'>Become an Affiliates</h2>
                <h2 className='text-lg text-white'>Help</h2>
            </div>
            <div  className='px-20 py-5'>
                <h1 className='text-xl pb-2 text-white'>Sign up for new stories and personal offers</h1>
                <div className='flex py-2'>
                <input type='email' value="E-mail" className='h-12 w-80 p-2 '/>
                <br/>
                <button className='px-1 text-center  text-white'>
                <SocialIcon url="www.email.com" className='' />
                </button>
                </div>
            </div>
            <div  className='px-15 py-5 '>
                <h1 className='text-xl pb-2 text-white'>Follow Us</h1>
                <SocialIcon url="www.facebook.com" className='mx-1' />
                <SocialIcon url="www.instagram.com" className='mx-1' />
                <SocialIcon url="www.twitter.com" className='mx-1' />
                <SocialIcon url="www.linkedin.com" className='mx-1'/>
            </div>
            
        </div>
        <div className='flex'>
            <h1 className='w-1/2 p-2 text-white text-center text-xl'>@2023 E-Scout.All Right Reserved</h1>
            <h1 className='w-1/6 p-2 text-white text-center text-lg'>Terms And Condition</h1>
            <h1 className='w-1/6 p-2 text-white  text-center text-lg'>Disclaimer</h1>
            <h1 className='w-1/6 p-2 text-white text-center text-lg'>Contact Us</h1>
        </div>
       </div>
    )
}