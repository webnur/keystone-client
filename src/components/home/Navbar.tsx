import React from 'react'
import logo from "/public/images/logo/keystone-logo.png"
import Image from 'next/image'
import Button from '../common/Button'
import { CiHeart } from "react-icons/ci";
import { IoSearchSharp } from "react-icons/io5";
import SavedProgramsIcon from '../icons/SavedProgramsIcon';

const Navbar = () => {
  return (
    <div className='w-full md:w-[90%] mx-auto flex justify-between py-4'>
        <div>
           <Image className='w-full h-auto' src={logo} width={100} height={100} alt="logo" />
        </div>
        <div className='flex justify-center items-center gap-2'>
          <SavedProgramsIcon height={24} width={24} />
          <div className='flex justify-center items-center gap-2'>
          <CiHeart className='text-2xl text-foreground' />
          <IoSearchSharp className='text-2xl text-foreground font-sm' />
          </div>
            <Button text="Sign in" />
            <Button text="Register" />
        </div>
    </div>
  )
}

export default Navbar