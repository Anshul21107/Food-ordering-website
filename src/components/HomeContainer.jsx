import React from 'react'
import Bikedelivery from "../Image/delivery.jpeg";
import Herobg from "../Image/heroBg.png";
import { containerData } from '../utils/data';

const HomeContainer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id='home'>
      <div className="py-2 flex-1 flex flex-col item-start md:item-center justify-center gap-6">
        <div className="flex item-center gap-2 justify-center bg-orange-100 px-2 py-1 rounded-full w-48">
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery
          </p>
          <div className="w-8 h-8 rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Bikedelivery}
              className="w-full h-full object-contain"
              alt="Bike Delivery"
            />
          </div>
        </div>
        <p className="text-[2.5rem] font-bold tracking-wide text-black lg:text-[4.5rem]">
          The fastest Delivery in{" "}
          <span className="text-orange-600 text-[3rem] lg:text-[5rem]">Your City</span>
        </p>

        <p className="text-base text-black text-center md:text-left md:w-[80%]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
          quas fuga praesentium deleniti voluptatem adipisci quod illo quaerat
          laudantium culpa.
        </p>
        <button
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-32
          px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >Order Now</button>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
       <img src={Herobg}
       className='ml-auto h-[400px] w-full lg:h-[650px] lg:w-auto'
        alt="orange-img"/>
        <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center py-4 flex-wrap gap-4 lg:px-32">
          {containerData && containerData.map(n =>(
            <div key ={n.id}className='lg:w-[190px] p-4 bg-orange-50 backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg'>
            <img src={n.imagesrc} className="w-20 lg:w-40 -mt-10 lg:-mt-20"alt="Burger"/>
            <p className='text-base lg:text-xl font-semibold mt-2 lg:mt-4'>
              {n.name}
            </p>
            <p className='text-[12px] lg:text-sm text-gray-500 font-semibold my-1 lg:my-3'>
              {n.desc}
            </p>
            <p className='text-sm font-semibold text-gray-800'>
            <span className='text-red-600'>&#8377;</span> {n.price}</p>
        </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeContainer