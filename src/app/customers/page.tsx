// components/Dashboard.tsx
"use client";
import React from 'react';
import Image, { StaticImageData } from 'next/image'; // Import StaticImageData
import image1 from '@/photos/Group 10.png';
import image2 from '@/photos/Group 101.png';
import image3 from '@/photos/Group 1011.png';
import image4 from '@/photos/Group 301.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'; // Import faSearch icon



import photo1 from '@/photos/photo1.png';
import photo2 from '@/photos/photo2.png';
import photo4 from '@/photos/photo4.png';
import photo3 from '@/photos/photo3.png';
import photo5 from '@/photos/photo5.png';



import Pagination from '@/components/pagination';





const Dashboard = () => {
  return (
    <div className="font-poppins">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Hello Evano👋,</h1>
        <div className="relative w-1/5">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 rounded-full pl-10"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute inset-y-0 left-3 text-gray-400 pt-3"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-0 mb-6">
        <div className="p-4 bg-white font-poppins flex items-center justify-center rounded-l-3xl">
          <Image
            src={image1}
            alt="Total Customers"
            width={50}
            height={50}
            className="w-16 h-16"
          />
          <div className="ml-4">
            <h3 className="text-1xl text-[#ACACAC]">Total Customers</h3>
            <p className="text-2xl font-extrabold">5,423</p>
            <div className="flex items-center">
              <p className="text-sm text-green-500">+16% <span className="text-black">this month</span></p>
            </div>
          </div>
        </div>

        <div className="border-l-2 border-r-2 p-4 bg-white font-poppins flex items-center justify-center ">
          <Image
            src={image2}
            alt="Members"
            width={50}
            height={50}
            className="w-16 h-16"
          />
          <div className="ml-4">
            <h3 className="text-1xl text-[#ACACAC]">Members</h3>
            <p className="text-2xl font-extrabold">1,893</p>
            <div className="flex items-center">
              <p className="text-sm text-red-500">
                -1% <span className="text-black">this month</span>
              </p>
            </div>
          </div>
        </div>
        

        <div className="p-4 bg-white  font-poppins flex items-center justify-center rounded-r-3xl">
          <Image
            src={image3}
            alt="Active Now"
            width={50}
            height={50}
            className="w-16 h-16"
          />
          <div className="ml-4">
            <h3 className="text-1xl text-[#ACACAC]">Active Now</h3>
            <p className="text-2xl font-extrabold">189</p>
            <div className="flex justify-center items-center">
              <div className="w-10 h-10 rounded-full mr-[-15px] relative border-4 border-white overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2">
                <Image src={photo1} alt="Image 1" layout="fill" objectFit="cover" />
              </div>
              <div className="w-10 h-10 rounded-full mr-[-15px] relative border-4 border-white overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2">
                <Image src={photo2} alt="Image 2" layout="fill" objectFit="cover" />
              </div>
              <div className="w-10 h-10 rounded-full mr-[-15px] relative border-4 border-white overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2">
                <Image src={photo3} alt="Image 3" layout="fill" objectFit="cover" />
              </div>
              <div className="w-10 h-10 rounded-full mr-[-15px] relative border-4 border-white overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2">
                <Image src={photo4} alt="Image 4" layout="fill" objectFit="cover" />
              </div>
              <div className="w-10 h-10 rounded-full relative border-4 border-white overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2">
                <Image src={photo5} alt="Image 5" layout="fill" objectFit="cover" />
              </div>
            </div>
          </div>



        </div>
      </div>

      <CustomerTable />


    </div>
  );
};

// CustomerTable and TableRow components remain unchanged as per previous implementation

export default Dashboard;


// Define CardProps with image property
type CardProps = {
  title: string;
  value: string;
  growth?: string;
  image: StaticImageData;
};

// Use the image property in the Card component
const Card = ({ title, value, growth, image }: CardProps) => {
  // Split growth string into percentage and description
  const growthParts = growth?.split(' ');
  const percentage = growthParts?.[0]; // Percentage part
  const description = growthParts?.slice(1).join(' '); // Rest of the description

  // Determine the color classpercentage, "descriptione, "descriptione, "descriptione, "description the percentage
  let percentageClass = "text-green-500"; // Default color is green
  if (percentage && parseFloat(percentage) < 0) {
    percentageClass = "text-red-500"; // Change to red if percentage is less than 0
  }

  return (
    <div className="p-4 bg-white  rounded-3xl font-poppins">
      <div className="flex items-center">
        <Image src={image} alt={title} width={50} height={50} className="w-16 h-16" />
        <div className="ml-4">
          <h3 className="text-1xl text-[#ACACAC]">{title}</h3>
          <p className="text-2xl font-extrabold">{value}</p>
          {growth && (
            <div className="flex items-center">
              <p className={`text-sm ${percentageClass}`}>{percentage}</p>
              <p className="text-sm ml-1">{description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};




// CustomerTable remains unchanged
const CustomerTable = () => (
  <div className="bg-white  rounded-lg p-4 font-poppins">
    <div className='flex justify-between'>
      <div>
        <h2 className="text-2xl font-bold">All Customers</h2>
        <p className='text-sm text-green-500'>Active Members</p>
      </div>
      <div className='flex space-x-4'>
        <div className="relative" style={{ width: '50%' }}> {/* Adjusted width to 90% */}
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 rounded-full pl-10"
            style={{ backgroundColor: '#F9FBFF' }}
          />
          <FontAwesomeIcon icon={faSearch} className="absolute inset-y-0 left-3 text-gray-400 pt-3" />
        </div>
        <div className='text-sm'>
          <select className="pl-4 pr-8 py-2 rounded-full bg-[#F9FBFF] text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
            <option selected>Sort by: Newest</option>
            <option>Oldest</option>
            <option>Alphabetical</option>
          </select>
        </div>
      </div>

    </div>
    <table className="w-full text-left">
      <thead>
        <tr >
          <th className="py-2 text-[#ACACAC] ">Customer Name</th>
          <th className="py-2 text-[#ACACAC] ">Company</th>
          <th className="py-2 text-[#ACACAC] ">Phone Number</th>
          <th className="py-2 text-[#ACACAC] ">Email</th>
          <th className="py-2 text-[#ACACAC] ">Country</th>
          <th className="py-2 text-[#ACACAC] ">Status</th>
        </tr>
      </thead>
      <tbody>
        <TableRow name="Jane Cooper" company="Microsoft" phone="(225) 555-0118" email="jane@microsoft.com" country="United States" status="Active" />
        <TableRow name="Floyd Miles" company="Yahoo" phone="(205) 555-0100" email="floyd@yahoo.com" country="Kiribati" status="Inactive" />
        <TableRow name="Ronald Richards" company="Adobe" phone="(302) 555-0107" email="ronald@adobe.com" country="Israel" status="Inactive" />
        <TableRow name="Marvin McKinney" company="Tesla" phone="(252) 555-0126" email="marvin@tesla.com" country="Iran" status="Active" />
        <TableRow name="Jerome Bell" company="Google" phone="(629) 555-0129" email="jerome@google.com" country="Réunion" status="Active" />
        <TableRow name="Kathryn Murphy" company="Microsoft" phone="(406) 555-0120" email="kathryn@microsoft.com" country="Curaçao" status="Active" />
        <TableRow name="Jacob Jones" company="Yahoo" phone="(208) 555-0112" email="jacob@yahoo.com" country="Brazil" status="Active" />
        <TableRow name="Kristin Watson" company="Facebook" phone="(704) 555-0127" email="kristin@facebook.com" country="Åland Islands" status="Inactive" />
        
       
      </tbody>



    </table>
  
    <div>
                <Pagination/>
        </div>
  </div>
);


// Define TableRowProps and use them in TableRow
type TableRowProps = {
  name: string;
  company: string;
  phone: string;
  email: string;
  country: string;
  status: string;
};

const TableRow = ({ name, company, phone, email, country, status }: TableRowProps) => (
  <tr className="border-t">
    <td className="py-2 ">{name}</td>
    <td className="py-2">{company}</td>
    <td className="py-2">{phone}</td>
    <td className="py-2">{email}</td>
    <td className="py-2">{country}</td>
    <td className="py-2">
      <span className={`px-2 py-1 rounded text-sm ${status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-200 text-red-800'}`}>
        {status}
      </span>
    </td>
  </tr>
);
