"use client";
import { useState } from "react";
import "@fontsource/poppins"; // Import Poppins font
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from 'next/link';

import logo from '@/photos/logo.png';
import Image from 'next/image';
import logoName from '@/photos/Dashboard.png';
import evano from '@/photos/evano.png';

import dashboardIconImg from '@/photos/dashboardLogo.png';
import productIconImg from '@/photos/product.png';
import customersIconImg from '@/photos/customers.png';
import incomeIconImg from '@/photos/income.png';
import promoteIconImg from '@/photos/promote.png';
import helpIconImg from '@/photos/help.png';

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Dashboard");

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const menuItems = [
    { name: "Dashboard", icon: dashboardIconImg, href: "/dashboard" },
    { name: "Product", icon: productIconImg, href: "/product" },
    { name: "Customers", icon: customersIconImg, href: "/customers" },
    { name: "Income", icon: incomeIconImg, href: "/income" },
    { name: "Promote", icon: promoteIconImg, href: "/promote" },
    { name: "Help", icon: helpIconImg, href: "/help" },
  ];

  return (
    <div className={`flex flex-col bg-white space-y-3 shadow-lg transition-all duration-500 ${isCollapsed ? "w-16" : "w-64"} h-screen`} style={{ fontFamily: "Poppins" }}>
      <button
        onClick={handleToggle}
        className="p-2 hover:bg-gray-200 text-gray-700 flex justify-center pt-10 pb-9"
      >
        <Image src={logo} alt="Logo" width={40} height={40} />
        {!isCollapsed && (
          <Image
            src={logoName}
            alt="Dashboard"
            width={undefined}
            height={30}
            className={`mb-4 transition-opacity duration-300 mt-2 ${isCollapsed ? "opacity-0" : "opacity-100"}`}
          />
        )}
        {!isCollapsed && <span className="mt-3">v.01</span>}
      </button>
      
      <nav className="flex-grow flex flex-col justify-between">
        <ul className={`space-y-5 ${isCollapsed ? "pl-2 pr-2" : "pl-6 pr-6"}`}>
          {menuItems.map(item => (
            <li key={item.name}>
              <Link href={item.href}>
                <div
                  onClick={() => setSelectedItem(item.name)}
                  className={`flex items-center p-2 rounded-md text-[#9197B3] ${
                    selectedItem === item.name ? "bg-[#5932EA] text-white" : "hover:bg-gray-200"
                  }`}
                >
                  <Image src={item.icon} alt={item.name} width={24} height={24} />
                  <span className={`ml-3 ${isCollapsed ? "hidden" : "block"}`}>{item.name}</span>
                  {!isCollapsed && <span className="text-gray-400 text-sm ml-auto">
                    <ChevronRightIcon className="text-xl" />
                  </span>}
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-col space-y-4">
          {!isCollapsed && (
            <div className="mt-auto p-4">
              <div className="bg-gradient-to-r from-purple-400 to-blue-500 text-white p-4 rounded-lg text-center">
                <p>Upgrade to PRO to get access to all Features!</p>
                <button className="mt-2 bg-white text-primary py-2 px-4 rounded-lg text-black">Get Pro Now!</button>
              </div>
            </div>
          )}
          <div className="p-4 flex items-center">
            <Image src={evano} alt="evano" width={40} height={40} />
            {!isCollapsed && (
              <div className="ml-3">
                <p className="text-zinc-800">Evano</p>
                <p className="text-zinc-500 text-sm">Project Manager</p>
              </div>
            )}
            {!isCollapsed && <ExpandMoreIcon className="text-xl ml-auto" />}
            <div className="relative">
              <button
                className="bg-white text-[#9197B3] rounded-md p-2 hover:bg-gray-200"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {!isCollapsed && <ExpandMoreIcon className="text-xl" />}
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 bg-white rounded-md shadow-md p-2">
                  <ul>
                    <li>
                      <a href="#" className="block p-2 hover:bg-gray-200">Option 1</a>
                    </li>
                    {/* Add more options here if needed */}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
