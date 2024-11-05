"use client";
import { useState } from 'react';
import Image from 'next/image';

const WishForm = ({ name, setName }) => {
  const [wishSent, setWishSent] = useState(false); 

  const sendWish = () => {
    const message = `सूर्य की आराधना का पर्व है छठ, आस्था का संगम है छठ, मनोवांछित फल की प्राप्ति का पर्व है छठ। ${name || 'Jyotish Kumar'} की तरफ से छठ पूजा की हार्दिक शुभकामनाएं! \n send your wishes: https://chhat-puja-project.vercel.app/?user=${encodeURIComponent(name)}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank'); 
    setWishSent(true); 
  };

  return (
    <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg mb-4 backdrop-blur-md">
      <h2 className="text-xl mb-4 text-center font-semibold text-white">Send Your Wishes</h2>
      
      <input
        type="text"
        placeholder="Enter Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)} 
        className="border bg-yellow-400 placeholder:text-white text-white bg-opacity-25 border-yellow-500 p-2 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />
      <button
        onClick={sendWish}
        className="bg-blue-950 text-white py-2 px-4 rounded hover:bg-yellow-400 transition duration-200"
      >
        Send your Wishes
      </button>

      {wishSent && (
        <div className="mt-6 p-4 bg-white bg-opacity-20 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-center mb-2">Your Wish Sent!</h3>
          <div className="flex items-center mb-2">
            <Image
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.news18.com%2Fibnlive%2Fuploads%2F2021%2F11%2Fhappy-chhath-puja-2021-wishes-images-7-1.jpg%3Fimpolicy%3Dwebsite%26width%3D0%26height%3D0&f=1&nofb=1&ipt=f630aad81e60fdfa85b2c22882b1be6fe495083d28842a666be1b6ed1fb9ecf2&ipo=images" 
              alt="Chhath Puja Celebration"
              width={64}
              height={64}
              className="w-16 h-16 object-cover rounded-full mr-4"
            />
            <p className="text-center text-lg">{`Happy Chhath Puja ${name || 'Jyotish Kumar'}!`}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WishForm;
