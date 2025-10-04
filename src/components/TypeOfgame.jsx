import React from 'react';
// import Video from "./Video";

import Type1 from "../img/1.png";
import Type2 from "../img/2.png";
import Type3 from "../img/3.png";
import Type4 from "../img/4.png";
import Type5 from "../img/10.png";
import Type6 from "../img/6.png";
import Type7 from "../img/7.png";
import Type8 from "../img/8.png";

import video1 from "../img/02-10morion1.mp4";

const categories = [
  { name: 'SPORT', icon: Type1 },
  { name: 'BOXING', icon: Type3 },
  { name: 'COCKFIGHT', icon: Type8 },
  { name: 'SEXY CASINO', icon: Type2},
  { name: 'K99 CASINO', icon: Type4 },
  { name: 'KENO', icon: Type5},
  { name: 'JOKER', icon: Type6 },
  { name: 'DG CASINO', icon: Type7 },
  // Add more categories here
];

const TypeOfgame = () => {
  return (
    <main className="flex-1 p-4 -mt-10 overflow-y-auto">
      {/* Banner Carousel Section - Placeholder */}
      <h1 id='Header' 
      className='flex p-4 underline text-pink-900 font-semibold text-4xl justify-center'>កាប្រកួតថ្ងៃនេះ</h1>
      <div className="w-full h-[300px] mt-9 md:h-80  rounded-lg mb-6 flex items-center justify-center">
       {/* <img src="" alt="" />
       <img src="" alt="" /> */}
      <video width="300" height="300" 
          loop 
          autoPlay 
          muted 
          controls
           >
        <source src={video1} type="video/mp4"/>
      </video>
      </div>

      {/* Categories Section */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 id="Formatfont" className="text-4xl underline text-sky-950 font-semibold mb-4 text-center">
          ប្រភេទហ្គេមទាំងអស់
        </h3>
        <div className="flex overflow-x-auto gap-4 py-2 ">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex flex-col items-center text-center w-24"
            >
              <img
                src={category.icon}
                alt={category.name}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <span className="mt-2 text-sm font-medium">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default TypeOfgame;