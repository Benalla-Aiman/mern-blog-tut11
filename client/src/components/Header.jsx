import { Button, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';
import logo from '../assets/favicon-g.svg'


export default function Header() {
    const path = useLocation().pathname;
  return (
    <Navbar className='border-b-2'>
      <Link to="/" aria-hidden="true" className="flex items-center from-red-600 to-blue-800 bg-gradient-to-r bg-clip-text text-transparent text-2xl font-medium text-indigo-900 dark:text-white ">
  <img src={logo} alt="RentPortal" className=" w-10 h-10" />
  <span className='h-10 ' color='indigo-900' pill>RentPortal</span>
</Link>


      <form>
        <TextInput
          type='text'
          placeholder='Search...'
          rightIcon={AiOutlineSearch}
          className='hidden lg:inline'
        />
      </form>
      <Button className='w-12 h-10 lg:hidden ' color='gray' pill>
        <AiOutlineSearch />
      </Button>
      
      <div className='flex gap-2 md:order-2'>
        <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
          <FaMoon />
        </Button>
        <Link to='/sign-in'>
          <Button color='gray' className=' from-red-600 to-blue-800 bg-gradient-to-r bg-clip-text text-transparent'>Sign In</Button>
        </Link>
        <Navbar.Toggle  />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={'div'}>
          <Link to='/'>Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/Service"} as={'div'}>
          <Link to='/Service'>Service</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/About-Us"} as={'div'}>
          <Link to='/About-Us'>About Us</Link>
        </Navbar.Link>
         <Navbar.Link active={path === "/Map"} as={'div'}>
                  <Link to='/Map'>Map</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}