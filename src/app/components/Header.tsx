"use client"

import React, { useState } from 'react';

function Header() {

    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

    return (
        <header className='bg-[#1F2030]  w-[80%] ml-auto'>
            <nav className='h-[4rem] flex items-center justify-between mx-auto w-[95%]'>
                <div>
                    <ul className='flex gap-5'>
                        <ul>ทีม</ul>
                    </ul>
                </div>
                <div>
                    LOGO
                </div>
                <div>
                    <ul className='flex gap-5'>
                    <li><button
                            onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                            className="flex items-center text-white hover:text-gray-300 focus:outline-none"
                        >
                            Narin Dapradit
                        </button>
                        {isProfileDropdownOpen && (
                <div className="absolute left-0 top-16 w-48 bg-white shadow-lg rounded-b-md">
                  <ul className="py-1">
                    <li>
                      <a
                        href="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        โปรไฟล์
                      </a>
                    </li>
                    <li>
                      <a
                        href="/settings"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        ตั้งค่า
                      </a>
                    </li>
                    <li>
                      <a
                        href="/preferences"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        การตั้งค่าส่วนตัว
                      </a>
                    </li>
                  </ul>
                </div>
              )}
                        </li>
                    </ul>
                </div>

            </nav>
        </header>
    )
}

export default Header
