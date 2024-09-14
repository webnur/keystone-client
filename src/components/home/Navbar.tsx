import React from 'react'
import logo from "/public/images/logo/keystone-logo.png"
import Image from 'next/image'
import Button from '../common/Button'

const Navbar = () => {
  return (
    <div className='w-full md:w-[90%] mx-auto flex justify-between py-4'>
        <div>
           <Image className='w-full h-auto' src={logo} width={100} height={100} alt="logo" />
        </div>
        <div>
            <Button text="Sign in" />
            <Button text="Register" />
        </div>
    </div>
  )
}

export default Navbar