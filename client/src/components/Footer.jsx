import React from 'react'
import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from 'flowbite-react';
import { BsFacebook, BsGithub, BsLinkedin} from 'react-icons/bs';
import logo from "../assets/logo-slogan.svg";
import { Link} from "react-router-dom";
export default function FooterCom() {
  return (
    <Footer container>
      <div className="w-full">
      <div className="flex p-3  mx-auto flex-col md:flex-row md:items-center gap-6 ">
        <div className='flex-1'>
        <div>
        <Link
            to="/"
            className="font-bold dark:text-white text-4xl  text-indigo-950"
          >
            <img src={logo} alt="RentPortal" className="w-72 h-28" />
            {/*<span className="h-10 " color="indigo-900" pill>
              RentPortal
            </span>*/}
            <p className="text-xs max-w-md from-red-600 to-blue-800 bg-gradient-to-r bg-clip-text text-transparent">
              Find your perfect rental effortlessly.Browse, communicate, and book with ease through our user-friendly app. Say goodbye to the hassle end hello to your ideal 
            </p>
          </Link>
        <div className="mt-10 flex space-x-6 sm:mt-10 sm:justify-start">
            <FooterIcon href="#" icon={BsFacebook} />
            <FooterIcon href="#" icon={BsLinkedin} />
            <FooterIcon href="#" icon={BsGithub} />
        </div>
        </div>
        </div>
        <div className='flex-1'>
        <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="Useful Links" className=' text-indigo-950' />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Home</Footer.Link>
                <Footer.Link href="#">Services</Footer.Link>
                <Footer.Link href="#">Contact</Footer.Link>
                <Footer.Link href="#">Our Services</Footer.Link>
                <Footer.Link href="#">Contact Us</Footer.Link>
              </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="ss"  className='text-transparent'/>
              <Footer.LinkGroup col>
                <Footer.Link href="#">About</Footer.Link>
                <Footer.Link href="#">Portfolio</Footer.Link>
                <Footer.Link href="#">About Us</Footer.Link>
                <Footer.Link href="#">Expert Team</Footer.Link>
                <Footer.Link href="#">Latest News</Footer.Link>
              </Footer.LinkGroup>
              </div>
              <div><Footer.Title title="Contact US" className=' text-indigo-950' />
              <Footer.LinkGroup col>
                <Footer.Link href="#">benallaaiman@gmail.com</Footer.Link>
                <Footer.Link href="#">0659541347</Footer.Link>
                <Footer.Link href="#">Rabat</Footer.Link>
              </Footer.LinkGroup>
              </div>
            </div>
          
        </div>
        </div>

        <FooterDivider />
        
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright href="#" by="RentPortal" year={2024} />
        </div>
      </div>
    </Footer>
  )
}
