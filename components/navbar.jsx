import Link from 'next/link';
import React, {useState, useEffect} from 'react';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('white')
    const [boxShadow, setBoxShadow] = useState('white')

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect (()=> {
        const  changeColor = () => {
            if(window.scrollY >= 90){
                setColor('#ffffff')
                setTextColor('#000000')
                setBoxShadow('0 1px 3px rgba(0,0,0,0.3)')
            } else {
                setColor('transparent')
                setTextColor('#ffffff')
                setBoxShadow('none')
                
            }
        }
        window.addEventListener('scroll', changeColor);

    }, []);



  return (
    <div style={{backgroundColor: `${color}`, boxShadow: `${boxShadow}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
        <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
            <link href='/'></link>
            <h1 style={{color: `${textColor}`}} className='font-bold text-4xl'>
                <Link href='/'>Parfitt Gallery</Link>
                </h1>
            <ul style={{color: `${textColor}`}} className='hidden sm:flex'>
                <li className='p-4'>
                    <Link href='/#about'>About</Link>
                </li>
                <li className='p-4'>
                    <Link href='/exhibition'>Exhibition</Link>
                </li>
                <li className='p-4'>
                    <Link href='/'>Artists</Link>
                </li>
                <li className='p-4'>
                    <Link href='/'>Shop</Link>
                </li>
                <li className='p-4'>
                    <Link href='/'>Contact</Link>
                </li>
            </ul>
          {/* Mobile Button */}

          <div onClick={handleNav} className='block sm:hidden z-10'>
            {nav ? <AiOutlineClose size={20} style={{color: `${textColor}`}} /> : <AiOutlineMenu size={20} style={{color: `${textColor}`}} />}
          </div>
          
          {/* Mobile Menu */}
          <div className= {nav ? 'absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
          : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300' }>
          <ul>
                <li className='p-4 text-4xl hover:text-gray-500'>
                    <Link href='/'>Home</Link>
                </li>
                <li className='p-4 text-4xl hover:text-gray-500'>
                    <Link href='/#about'>About</Link>
                </li>    
              <li className='p-4  text-4xl hover:text-gray-500'>
                    <Link href='/'>Exhibition</Link>
                </li>
                <li className='p-4 text-4xl hover:text-gray-500'>
                    <Link href='/'>Artists</Link>
                </li>
                <li className='p-4 text-4xl hover:text-gray-500'>
                    <Link href='/'>Shop</Link>
                </li>
                <li className='p-4 text-4xl hover:text-gray-500'>
                    <Link href='/'>Contact</Link>
                </li>
            </ul>
          </div>

        </div>
    </div>
  )
}

export default Navbar