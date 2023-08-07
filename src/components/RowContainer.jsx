import React, { useEffect, useRef } from "react";
import {MdShoppingBasket} from "react-icons/md";
// import Image from "../Image/f1.png";

const RowContainer = ({ flag ,data,scrollValue}) => {
  console.log(data);
  const rowContainer = useRef();
  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);
  return (
    <div
      ref={rowContainer}
      className={`w-full my-12 flex item-center gap-8 bg-orange-50 scroll-smooth ${flag ? 'overflow-x-scroll scrollbar-none' : 'overflow-x-hidden flex-wrap'}`}
    >
      {data && data.map(n=> (
        <div 
        key = {n.id}
        className=" w-[300px] min-w-[300px] md:min-w-[340px] md:w-[340px]h-auto my-12 bg-orange-100 rounded-lg hover:drop-shadow-md backdrop-blur-lg">
        <div className="w-full flex items-center justify-between">
            <img src={n.imageURL} alt="" className="w-40 -mt-8" />
            <div className="w-8 h-8 rounded-full bg-red-600 items-center justify-center flex cursor-pointer hover:shadow-md">
             <MdShoppingBasket className="text-white"/>
            </div>
        </div>
        <div className="w-full flex flex-col gap-1 items-center justify-center">
            <p className="text-base font-semibold">{n.title}</p>
            <p className="mt-1 text--sm text-gray-500">{n.calories} Calories</p>
            <div className="flex items-center gap-2"></div>
            <p className="text-lg font-semibold">
              <span className="text-sm text-red-500">&#8377;</span>{n.price}
            </p>
        </div>
      </div>
      ))}
    </div>
  );
};

export default RowContainer;
