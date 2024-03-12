import React from "react";
import logo from '../assets/logo-slogan.svg'
import { Link } from "react-router-dom";
import { Button, Label, TextInput } from 'flowbite-react';
export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-6">
        {/* left side */}
        <div className="flex-1">
          <Link
            to="/"
            className="font-bold dark:text-white text-4xl  text-indigo-950"
          >
            <img src={logo} alt="RentPortal" className="w-96 h-28" />
            {/*<span className="h-10 " color="indigo-900" pill>
              RentPortal
            </span>*/}
            <p className="text-sm mt-5 from-red-600 to-blue-800 bg-gradient-to-r bg-clip-text text-transparent">
              This is a demo of a RentPortal Porject. You can sign up with your email and password or with Google 
            </p>
          </Link>
        </div>



        {/* right side */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
            <Label className="text-indigo-900" value='Your username' />
            <TextInput type="text" placeholder="Username" id="username" />
            </div>
            <div>
            <Label className="text-indigo-900" value='Your email' />
            <TextInput type="text" placeholder="name@company.com" id="email" />
            </div>
            <div>
            <Label className="text-indigo-900" value='Your password' />
            <TextInput type="text" placeholder="Password" id="password" />
            </div>
            <Button color='gray' type="submit" className=' from-red-600 to-blue-800 bg-gradient-to-r  text-white'>Sign Up</Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span >
              Have an account?
            </span>
            <Link to='/sign-in' className="text-indigo-900 font-medium">
            Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
