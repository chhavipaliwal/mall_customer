import { Icon } from "@iconify/react/dist/iconify.js";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Shopping = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://dummyjson.com/products"); //for handling promise in api
      // console.log(res);
      setProducts(res.data.products);
    };
    fetchData();
  }, []);
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
      <div className="grid grid-cols-3 gap-4 p-10">
        <div className="font-museo col-span-2">
          <h1 className="text-8xl">Home</h1>
          <h1 className="text-8xl flex items-center">
            <hr className="border-black border-2 w-1/3 my-4" />
            Elegance
          </h1>
          <h1 className="text-8xl">Starts Here,</h1>
        </div>
        <div className="border rounded-2xl p-10 col-span-1 bg-[#D0FCE6]">
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
            We help architects sculpt sound out of space, with bespoke, acoustic
            solutions.
          </p>
          <button className=" flex border  border-black px-3 py-1 rounded-full  items-center gap-1 mt-4">
            Learn More <Icon icon="line-md:arrow-right" width="20" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 p-10">
        <div className="col-span-2">
          <img src="sofa.png" alt="" />
        </div>
        <div className="col-span-1">
          <img src="card.png" alt="" />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-10 pt-10 pl-20 pr-20">
        {products.map((product) => (
          <Link to={product.id} key={product.id} className="col-span-1">
            <img
              src={product.thumbnail}
              alt="food"
              className="rounded-2xl  object-cover mb-2"
            />
            <div>
              <h1 className="text-lg font-semibold">{product.title}</h1>
              <div className="">
                <p className="text-gray-500">{product.description}</p>
                <p className="bg-[#D0FCE6]rounded-full">{product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Shopping;
