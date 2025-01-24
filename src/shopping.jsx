// import React from "react";
import { Icon } from "@iconify/react";

const Shopping = () => {
  return (
    <div>
      {/* //navbar */}
      <div className="flex justify-between items-center p-4 mt-2 ">
        <div className="flex items-center gap-2">
          <Icon icon="ph:patreon-logo-bold" width="36" height="36" />
          <h1 className="text-3xl font-museo">Dune</h1>
        </div>
        <div className="flex gap-6">
          <ul className="flex gap-8 font-medium text-lg text-gray-600">
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
            <li>Collection</li>
          </ul>
        </div>
        <div className="flex gap-4 items-center">
          <button className="border px-3 py-1 rounded-full bg-black text-white">
            Search
          </button>
          <button className=" flex border px-3 py-1 rounded-full bg-black text-white items-center gap-1">
            Shop now <Icon icon="line-md:arrow-right" width="20" />
          </button>
          <Icon icon="gg:profile" width="32" height="32" />
        </div>
      </div>
      {/* //hero */}
      <div>
        <div className="grid grid-cols-3 gap-4 p-10">
          <div className="font-museo col-span-2">
            <h1 className="text-8xl">Home</h1>
            <h1 className="text-8xl flex items-center">
              <hr className="border-black border-2 w-1/3 my-4" />
              Elegance
            </h1>
            <h1 className="text-8xl">Starts Here,</h1>
          </div>
          <div className="border rounded-2xl p-10 col-span-1">
            <div className="flex items-center space-x-[-10px] mb-16">
              <img
                src="bottle.avif"
                alt="Person 1"
                className="w-16 h-16 rounded-full border-2 border-white shadow"
              />
              <img
                src="bottle.jpeg"
                alt="Person 2"
                className="w-16 h-16 rounded-full border-2 border-white shadow"
              />
            </div>

            <p>
              We help architects sculpt sound out of space, with bespoke,
              acoustic solutions.
            </p>
            <button className=" flex border  border-black px-3 py-1 rounded-full  items-center gap-1 mt-4">
              Learn More <Icon icon="line-md:arrow-right" width="20" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shopping;
