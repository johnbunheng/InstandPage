import React from 'react';
import Type1 from "../img/1.PNG";
import Type2 from "../img/2.PNG";
import Type3 from "../img/3.PNG";
import Type4 from "../img/4.PNG";
import Type5 from "../img/10.PNG";
import Type6 from "../img/6.PNG";
import Type7 from "../img/7.PNG";
import Type8 from "../img/8.PNG";

import TypeMatch from "../img/30-25.jpg"
import video1 from "../img/02-10morion1.mp4";

const categories = [
  { name: 'SPORT', icon: Type1 ,link:"https://t.me/sbc369service"},
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
    <main className="flex-1 p-4 -mt-12 ">
      {/* Banner Carousel Section - Placeholder */}
      <h1 id='Header' 
      className='flex p-4 underline text-white font-semibold text-4xl justify-center'>កាប្រកួតថ្ងៃនេះ</h1>
      <div className="w-80 h-[352px] mt-5 md:h-80 rounded-lg mb-6 flex items-center m-auto">
       <img src={TypeMatch} alt="" />
      {/* <video width="300" height="300" 
          loop 
          autoPlay 
          muted 
           >
        <source src={video1} type="video/mp4"/>
      </video> */}
      </div>

      {/* Categories Section */}
      <div className="bg-gray-700 p-4 mt-10 rounded-lg shadow-md">
        <h3 id="Header" className="text-4xl text-white font-semibold mb-4 text-center">
          ប្រភេទហ្គេមទាំងអស់
        </h3>
        <div className="flex sm:justify-center overflow-x-auto gap-4 py-2 ">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex flex-col items-center text-center w-24"
            >
             <a href={category.link}>
               <img
                src={category.icon}
                alt={category.name}
                className="w-16 h-16 rounded-lg object-cover"
              />
             </a>
              <span className="mt-2  text-white text-sm font-medium">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default TypeOfgame;