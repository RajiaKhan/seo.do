import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
function NavLink({ to, children }) {
  return (
    <a href={to} className={`mx-4`}>
      {children}
    </a>
  );
}
function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`absolute top-0 left-0 h-screen   w-screen bg-pink-200  z-30 transform ${
        open ? "-translate-x-0" : "-translate-x-full "
      } transition-transform duration-300 ease-in-out  `}
    >
      <div className="flex items-center justify-center z-30  bg-blue-800 h-20 block ">
        {" "}
        {/*logo container*/}
        <Link href="/">
          <div className="flex gap-5">
            <div className="">
              <Image className=" " src="/logo.svg" width={40} height={47.17} />
            </div>
            <div className="">
              <h1 className="text-3xl text-white font-semibold px-5 ">
                seo.do
              </h1>
            </div>
          </div>
        </Link>
      </div>
      <div className="flex flex-col ml-4 ">
        <a
          className="text-xl font-medium my-4"
          href="/about"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          <button className="text-xl text-blue-900 hover:text-blue-800 font-bold">
            Login
          </button>
        </a>
        <a
          className="text-xl font-normal my-4"
          href="/contact"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          {" "}
          <button className=" py-3 text-white text-center font-semibold  text-xl bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-full px-4 ">
            Get Started
          </button>
        </a>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex block lg:hidden xl:hidden 2xl:hidden md:hidden">
      <div className="bg-blue-700 w-11/12">
        <MobileNav open={open} setOpen={setOpen} />
        <div className=" flex items-center">
          <div
            className="text-2xl font-semibold hidden lg:block xl:block 2xl:block md:block"
            href="/"
          >
            <Image className=" " src="/logo.svg" width={40} height={47.17} />
          </div>
          <div
            className="text-2xl font-semibold hidden lg:block xl:block 2xl:block md:block"
            href="/"
          >
            <h1 className="text-3xl text-white font-semibold px-5 ">seo.do</h1>
          </div>
        </div>
      </div>
      <div className="w-11/12 bg-pink-200 flex justify-end items-center  p-5">
        <div
          className="z-50 cursor-pointer flex relative w-8 h-8 flex-col justify-between items-center md:hidden "
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={` cursor-pointer h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out   ${
              open ? "rotate-45 translate-y-3.5" : ""
            }`}
          />
          <span
            className={` cursor-pointer h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out  ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={` cursor-pointer h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out  ${
              open ? "-rotate-45 -translate-y-3.5" : ""
            }`}
          />
        </div>

        <div className="hidden md:flex">
          <NavLink to="/">
            <button className="text-xl text-blue-900 hover:text-blue-800 font-bold mt-3">
              Login
            </button>
          </NavLink>
          <NavLink to="/">
            <button className=" py-3 text-white text-center font-semibold  text-xl bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-full px-4 ">
              Get Started
            </button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
