import React, { useState } from 'react'; 
import SCB from "../img/SBCpng2.png"
import { FaFacebookMessenger, FaTelegram } from 'react-icons/fa';

const Navigation = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1 py-5">
                {/* Logo Section */}
                <a href="/" className="flex items-center rtl:space-x-reverse">
                    <img 
                        src={SCB} 
                        className=" w-24 sm:w-40" 
                        alt="SCB Logo" 
                    />
                </a>

                {/* Buttons and Hamburger Menu Section (Order 2) */}
                <div className="flex items-center md:order-2 space-x-2 sm:space-x-3 rtl:space-x-reverse">
                    
                    {/* Button 1: Messenger */}
                    <a 
                        id="Formatfont" 
                        href="https://m.me/620926397781198" 
                        className="text-white flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition duration-150"
                        title=" Messenger"
                    >
                        <FaFacebookMessenger className="text-lg sm:text-xl mr-1" />
                        <span className="sm:inline">ចុះឈ្មោះ!</span> 
                    </a>

                    {/* Button 2: Telegram */}
                    <a 
                        id="Formatfont" 
                        href="https://t.me/sbc369service" 
                        className="text-white flex items-center bg-[#2AABEE] hover:bg-[#1a8fcb] focus:ring-4 focus:outline-none focus:ring-[#56c6ff] font-medium rounded-lg text-sm px-1 py-2.5 text-center transition duration-150"
                        title=" Telegram"
                    >
                        <FaTelegram className="text-lg sm:text-xl mr-1" />
                        <span className="sm:inline">Telegram</span>
                    </a>
                    
                    {/* Mobile Menu Toggle Button (Hamburger Icon) */}
                    <button 

                        onClick={toggleMenu} 
                        type="button" 
                        className="pl-[10px] items-center w-10 h-11 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
                        aria-controls="navbar-sticky" 
                        aria-expanded={isMenuOpen} 
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>

                {/* Main Navigation Links (Order 1) */}
                <div 

                    className={`items-center justify-between w-full md:flex md:w-auto md:order-1 duration-700 ${isMenuOpen ? 'block' : 'hidden'}`} 
                    id="navbar-sticky"
                >
                    <ul id="Formatfont" className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="https://m.me/681071755099465" className="block py-2 px-3 text-gray-900 rounded-sm hover:underline hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">បាល់ទាត់</a>
                        </li>
                        <li>
                            <a href="https://m.me/681071755099465" className="block py-2 px-3 text-gray-900 rounded-sm hover:underline hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">ប្រដាល់</a>
                        </li>
                        <li>
                            <a href="https://m.me/681071755099465" className="block py-2 px-3 text-gray-900 rounded-sm hover:underline hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">JOKER</a>
                        </li>
                        <li>
                            <a href="https://m.me/681071755099465" className="block py-2 px-3 text-gray-900 rounded-sm hover:underline hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">SLOT</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;