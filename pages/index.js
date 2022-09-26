import React, { useState } from "react";
import Image from "next/image";
const Index = () => {
  const [isList4, setIsList4] = useState(false);

  return (
    <>
      <div className="hidden lg:block xl:block 2xl:block ">
        <div className="w-full ">
          <div className="flex relative">
            <div className="bg-blue-700 pb-20 lg:pb-2 xl:pb-0 2xl:pb-16 w-11/12 ">
              <div className="pt-5 px-16 pb-96 mb-96 lg:mb-20 xl:mb-64 2xl:mb-96 flex">
                <div className="">
                  <Image
                    className=" "
                    src="/logo.svg"
                    width={40}
                    height={47.17}
                  />
                </div>
                <div className="">
                  <h1 className="text-3xl text-white font-semibold px-5 ">
                    seo.do
                  </h1>
                </div>
              </div>
            </div>

            <div className="bg-pink-200  w-11/12 ml-auto">
              <div className="right-0 absolute flex gap-16 px-12 lg:px-4 xl:px-12 2xl:px-12 py-4">
                <button className="text-xl text-blue-900 hover:text-blue-800 font-bold">
                  Login
                </button>
                <button className=" py-3 text-white text-center font-semibold  text-xl bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-full px-4 ">
                  Get Started
                </button>
              </div>
            </div>

            <div className="mx-auto absolute  left-1/2 transform -translate-x-1/2  ">
              <div className="relative">
                <Image
                  className=" "
                  src="/blue-bg.svg"
                  width={898.04}
                  height={683.2}
                />
                <h1 className="absolute text-white top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center  text-5xl lg:text-4xl xl:text-5xl 2xl:text-7xl font-bold font-white">
                  Data Science Meets SEO
                </h1>
                <h1 className="absolute text-white w-full  mt-0 lg:mt-5 xl:mt-5 2xl:mt-0 top-72 lg:top-44 xl:top-64 2xl:top-72 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-xl lg:text-sm xl:text-md 2xl:text-xl font-medium font-white">
                  Find all the SEO secrets of your competitors and track them
                </h1>
                <h1 className="absolute text-white w-full  top-80 lg:top-56 xl:top-60 2xl:top-80  left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center  text-xl lg:text-sm xl:text-lg 2xl:text-xl font-medium  font-medium font-white">
                  daily without hours of boring keyword research & grouping
                </h1>
                <form className="absolute w-6/12 lg:w-8/12 xl:w-6/12 2xl:w-6/12 pt-0 lg:pt-16 xl:pt-16 2xl:pt-0 top-96 lg:top-56 xl:top-72 2xl:top-96  mt-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <label
                    for="search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
                  >
                    Enter your domain
                  </label>
                  <div className="relative">
                    <input
                      type="search"
                      id="search"
                      className="block px-4 py-6  lg:py-4 xl:py-6 2xl:py-6 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-full outline-none "
                      placeholder="Enter your domain"
                      required
                    />
                    <button
                      type="submit"
                      className=" text-white absolute right-2.5 bottom-3 lg:bottom-1 xl:bottom-2 2xl:bottom-2 bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-4  2xl:py-4 xl:py-4 lg:py-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Start instant demo
                    </button>
                  </div>
                </form>
                <div className=" flex justify-center items-center gap-12 absolute w-11/12  top-2/3  mt-5 lg:mt-8  xl:mt-16 2xl:mt-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="flex gap-3">
                    <div className="text-3xl text-white mt-0  xl:mt-0 2xl:mt-0 lg:mt-8">
                      .
                    </div>
                    <div className="text-xl  xl:text-xl 2xl:text-xl  lg:text-sm text-white mt-3 lg:mt-12 xl:mt-3 2xl:mt-3">
                      No credit cards
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="text-3xl text-white  mt-0  xl:mt-0 2xl:mt-0 lg:mt-8">
                      .
                    </div>
                    <div className="text-xl  xl:text-xl 2xl:text-xl  lg:text-sm text-white  mt-3 lg:mt-12 xl:mt-3 2xl:mt-3">
                      Ready to use in five minutes
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mx-auto container -mt-56 lg:-mt-32 xl:-mt-44 2xl:-mt-56">
            <div className="justify-center items-center mx-auto flex ml-12">
              <Image
                className=""
                src="/Vector 4 (1).svg"
                width={1439.5}
                height={246}
              />
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Image
                  className=""
                  src="/circle.svg"
                  width={108}
                  height={103}
                />
              </div>
              <h1 className="absolute  text-center  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-blue-900 text-6xl lg:text-5xl xl:text-5xl 2xl:text-6xl">
                Features
              </h1>
              <h1 className="text-center text-2xl lg:text-lg xl:text-2xl 2xl:2xl text-gray-800 absolute top-3/4 mt-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-12">
                You found us! Why spend your valuable hours to understand yet
                another rank tracker?
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="block lg:hidden xl:hidden 2xl:hidden ">
        <div className="w-full ">
          <div className="flex  -z-30">
            <div className="w-11/12 bg-blue-700 pt-96 pb-0 sm:pb-72 md:pb-96"></div>
            <div className="w-11/12 bg-pink-200 "></div>
          </div>
          <div className="absolute  top-0">
            <div className="relative flex justify-center items-center">
              <Image
                className=" "
                src="/Vector 1 (2).svg"
                width={2598.04}
                height={2283.2}
              />
              <div className=" hidden md:block ">
                <div className="absolute flex top-4 left-4 ">
                  <div className="">
                    <Image
                      className=" "
                      src="/logo.svg"
                      width={40}
                      height={47.17}
                    />
                  </div>
                  <div className="">
                    <h1 className="text-xl text-white font-semibold px-5  mt-2">
                      seo.do
                    </h1>
                  </div>
                </div>
              </div>
              <div className="flex absolute right-4 top-4 gap-5 hidden md:block">
                <button className="text-sm text-pink-200 hover:text-blue-800 font-bold mr-5">
                  Login
                </button>
                <button className=" py-3 text-white text-center font-semibold  text-sm bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-full px-4 ">
                  Get Started
                </button>
              </div>
              <h1 className="absolute text-white top-1/4 sm:top-16 md:top-28 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center  text-2xl sm:text-5xl md:text-6xl font-bold">
                Data Science Meets SEO
              </h1>
              <h1 className="absolute mt-5  text-white w-9/12 md:w-10/12   lg:mt-5 top-32 md:top-64 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-xs md:text-2xl font-white">
                Find all the SEO secrets of your competitors and track them
                daily without hours of boring keyword research & grouping
              </h1>
              <form className="absolute  top-48 md:top-96 mt-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <label
                  for="search"
                  className="mb-2 text-xs  py-0 md:py-4 text-center text-gray-900 sr-only dark:text-gray-300"
                >
                  Enter your domain
                </label>
                <div className="relative ">
                  <input
                    type="search"
                    id="search"
                    className="block px-2 py-1 md:py-4 w-full text-sm text-gray-900 bg-gray-50 rounded-full outline-none "
                    placeholder="Enter your domain"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="py-1  md:py-4  text-white absolute  w-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-6 md:mt-12 bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-xs"
                >
                  Start instant demo
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="container mx-auto ">
          <div className="">
            <div className="drop-shadow-xl flex justify-center items-center mt-12">
              <Image className="" src="/circle.svg" width={108} height={103} />
            </div>
            <h1 className=" text-4xl md:text-5xl mt-6 text-center font-bold text-blue-900 ">
              Features
            </h1>
            <h1 className="text-center mt-4 text-sm md:text-2xl text-gray-800 ">
              You found us! Why spend your valuable hours to understand yet
              another rank tracker?
            </h1>
          </div>
        </div>
      </div>
      <div className="container mx-auto ">
        <div className="bg-gray-100 w-12/12  md:w-6/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12  rounded-full justify-center items-center flex mx-auto mt-6  md:mt-16 lg:mt-16 xl:mt-16 2xl:mt-16">
          <div className=" justify-center items-center flex  py-2 px-2 md:py-4 lg:py-4  xl:py-4  2xl:py-4 ">
            <div className="flex gap-3 ">
              <button className="ease-in-out transition duration-500 cursor-pointer hover:text-blue-800 text-md font-bold text-gray-700 px-2 lg:px-5 xl:px-5 2xl:px-5 md:px-5 sm:px-5 py-4 rounded-full  hover:bg-white focus:bg-white focus:text-blue-800">
                Industry Features
              </button>
              <button className="ease-in-out transition duration-500 cursor-pointer hover:text-blue-800 text-md font-bold text-gray-700 px-2 lg:px-5 xl:px-5 2xl:px-5 md:px-5 sm:px-5 py-4 rounded-full hover:bg-white focus:bg-white focus:text-blue-800">
                Our Differences
              </button>
            </div>
          </div>
        </div>
        <div className="flex-col  lg:flex-row xl:flex-row 2xl:flex-row flex gap-16 mt-36  justify-center items-center">
          <div className="w-11/12">
            <div className="flex  justify-center items-center lg:justify-start  lg:items-start xl:justify-start xl:items-start 2xl:justify-start 2xl:items-start">
              <Image className=" " src="/Group 5.svg" width={40} height={40} />
            </div>
            <h1 className="text-3xl lg:text-xl xl:text-3xl 2xl:text-3xl text-blue-800 font-bold mt-8 text-center lg:text-left xl:text-left 2xl:text-left ">
              AI-Based Keyword Grouping
            </h1>
            <h1 className="text-xl lg:text-sm xl:text-xl 2xl:text-xl text-gray-700 mt-8 text-center lg:text-left xl:text-left 2xl:text-left">
              We have trained our models by using the power of deep learning to
              find the most relevant keywords.
            </h1>
          </div>
          <div className="w-11/12">
            <div className="flex justify-center items-center lg:justify-start  lg:items-start xl:justify-start xl:items-start 2xl:justify-start 2xl:items-start">
              <Image
                className=""
                src="/Group 5 (1).svg"
                width={45}
                height={40}
              />
            </div>
            <h1 className="text-3xl lg:text-xl xl:text-3xl 2xl:text-3xl text-blue-800 font-bold mt-8 text-center lg:text-left xl:text-left 2xl:text-left">
              Fully Automated Keyword
            </h1>
            <h1 className="text-xl lg:text-sm xl:text-xl 2xl:text-xl text-gray-700 mt-8 text-center lg:text-left xl:text-left 2xl:text-left">
              You don’t need to group keywords. Our smart algorithms classify
              keywords.
            </h1>
          </div>
          <div className="w-11/12">
            {" "}
            <div className="flex justify-center items-center lg:justify-start  lg:items-start xl:justify-start xl:items-start 2xl:justify-start 2xl:items-start">
              <Image
                className=""
                src="/Group 5 (2).svg"
                width={49}
                height={40}
              />
            </div>
            <h1 className="text-3xl lg:text-xl xl:text-3xl 2xl:text-3xl  text-blue-800 font-bold mt-8 text-center lg:text-left xl:text-left 2xl:text-left">
              Faster than Fastest Competitor
            </h1>
            <h1 className="text-xl lg:text-sm xl:text-xl 2xl:text-xl text-gray-700 mt-8 text-center lg:text-left xl:text-left 2xl:text-left">
              Performance is our core value. We have tired of years of
              experience on slow rank track.
            </h1>
          </div>
          <div className="w-11/12">
            {" "}
            <div className="flex justify-center items-center lg:justify-start  lg:items-start xl:justify-start xl:items-start 2xl:justify-start 2xl:items-start">
              <Image
                className=""
                src="/Group 5 (3).svg"
                width={42}
                height={39}
              />
            </div>
            <h1 className="text-3xl lg:text-xl xl:text-3xl 2xl:text-3xl w-full lg:w-10/12  xl:w-10/12  2xl:w-10/12  text-blue-800 font-bold mt-8 text-center lg:text-left xl:text-left 2xl:text-left">
              Free migration from 40+ tools.
            </h1>
            <h1 className="text-xl lg:text-sm xl:text-xl 2xl:text-xl text-gray-700 mt-8 text-center lg:text-left xl:text-left 2xl:text-left">
              Losing data is not acceptable. Eventhough It has API access or
              not, we will migrate your data.
            </h1>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-12 lg:mt-64 p-3">
        <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row  gap-12 ">
          <div className=" text-center  md:text-left lg:text-left xl:text-left 2xl:text-left w-11/12  text-3xl md:text-6xl lg:text-4xl xl:text-5xl 2xl:text-6xl mt-3 text-blue-900 font-bold">
            Trusted by the World’s Best Companies{" "}
          </div>
          <div className="w-11/12 ">
            <div className="flex flex-col lg:flex-row md:flex-row xl:flex-row 2xl:flex-row   md:gap-28   lg:gap-28   xl:gap-28   2xl:gap-28 ">
              <div className="mt-3 pr-6 md:pr-0 lg:pr-0 xl:pr-0 2xl:pr-0 flex justify-center items-center lg:justify-start  lg:items-start xl:justify-start xl:items-start 2xl:justify-start 2xl:items-start">
                <Image
                  className=""
                  src="/PepsiCo svg.svg"
                  width={150}
                  height={34}
                />
              </div>
              <div className="mt-10 md:mt-6 lg:mt-6 xl:mt-6 2xl:mt-6 flex justify-center items-center lg:justify-start  lg:items-start xl:justify-start xl:items-start 2xl:justify-start 2xl:items-start">
                <Image
                  className=""
                  src="/GrandVision.svg"
                  width={187}
                  height={24}
                />
              </div>
              <div className="mt-10 md:mt-4 lg:mt-4 xl:mt-4 2xl:mt-4 pl-16 md:pl-0  lg:pl-0 xl:pl-0 2xl:pl-0 flex justify-center items-center lg:justify-start  lg:items-start xl:justify-start xl:items-start 2xl:justify-start 2xl:items-start">
                <Image
                  className=""
                  src="/Red Bull svg.svg"
                  width={156}
                  height={34}
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row md:flex-row xl:flex-row 2xl:flex-row  md:mt-12 md:gap-28 lg:mt-12 lg:gap-28  xl:mt-12 xl:gap-28  2xl:mt-12 2xl:gap-28">
              <div className="mt-10 lg:mt-0 md:mt-0 xl:mt-0 2xl:mt-0 flex justify-center items-center lg:justify-start  lg:items-start xl:justify-start xl:items-start 2xl:justify-start 2xl:items-start ">
                <Image
                  className=""
                  src="/YVESROCHER.svg"
                  width={187}
                  height={24}
                />
              </div>
              <div className="mt-10 lg:mt-0 md:mt-0 xl:mt-0 2xl:mt-0 flex justify-center items-center lg:justify-start  lg:items-start xl:justify-start xl:items-start 2xl:justify-start 2xl:items-start">
                <Image
                  className=""
                  src="/Beko svg.svg"
                  width={60}
                  height={34}
                />
              </div>
              <div className="mt-10 lg:mt-0 md:mt-0 xl:mt-0 2xl:mt-0 ml-0 md:ml-12 lg:ml-12 xl:ml-12 2xl:ml-12 flex justify-center items-center lg:justify-start  lg:items-start xl:justify-start xl:items-start 2xl:justify-start 2xl:items-start">
                <Image className="" src="/WEBER.svg" width={187} height={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-32 mb-32 hidden md:block lg:block 2xl:block xl:block">
        <div className="">
          <div className="relative flex justify-center items-center ">
            <Image
              className=""
              src="/section-4.png"
              width={1700}
              height={750}
            />
            <div className="w-full text-center  absolute text-sm md:text-md lg:text-4xl xl:text-5xl 2xl:text-6xl  text-white font-bold top-6 md:mt-12  lg:top-10 xl:top-16 2xl:top-28 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              Bigger data = Better Trained Models
            </div>
            <div className="  absolute text-sm 2xl:text-xl xl:text-xl lg:text-md text-white text-center top-32 lg:top-40 xl:top-56 2xl:top-72 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
              <h1 className="">
                {" "}
                We have great competitors that can provide you with data. Our
                main focus is not only providing data but also insights
                extracted from them. To create better machine learning models,
                we’re collecting more data.
              </h1>
            </div>
          </div>
        </div>
        <div className="container mx-auto flex flex-col lg:flex-row xl:flex-row 2xl:flex-row justify-center items-center gap-16  -mt-16 md:-mt-32 lg:-mt-64 xl:-mt-64 2xl:-mt-80 ">
          <div className=" w-2/3  lg:w-1/3  xl:w-1/3  2xl:w-1/3  bg-white drop-shadow-md p-3 ">
            <h1 className="text-center mt-12 font-bold  text-gray-800 text-xl">
              Keywords
            </h1>
            <div className="flex items-center justify-center mt-4">
              <h1 className="text-5xl lg:text-3xl xl:text:5xl 2xl:text-5xl  font-bold text-blue-900">
                2.
              </h1>
              <h1 className="text-4xl lg:text-2xl xl:text:4xl 2xl:text-4xl font-bold text-blue-900">
                282.150.458
              </h1>
            </div>
            <div className=" flex flex-row justify-center items-center lg:flex-col xl:flex-row 2xl:flex-row mt-12 mb-12 lg:mb-2 xl:mb-12 2xl:mb-12 lg:gap-2 xl:gap-12  2xl:gap-12 gap-12">
              <div className="">
                <div className="flex ">
                  <div className=" ">
                    <Image
                      className=""
                      src="/globe.svg"
                      width={42}
                      height={40}
                    />
                  </div>
                  <div className="w-11/12">
                    <h1 className="text-xl text-center text-blue-900 mt-1 font-semibold ">
                      87 Countries
                    </h1>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flex">
                  <div className="">
                    <Image
                      className=""
                      src="/language.svg"
                      width={42}
                      height={40}
                    />
                  </div>
                  <div className="w-11/12">
                    <h1 className="text-xl text-blue-900 mt-1 font-semibold">
                      38 Languages
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white  w-2/3  lg:w-1/3  xl:w-1/3  2xl:w-1/3 drop-shadow-md">
            <h1 className="text-center mt-12 font-bold text-xl text-gray-800 p-3">
              Search Volume
            </h1>
            <div className="flex items-center justify-center mt-4">
              <h1 className="text-5xl lg:text-3xl xl:text:5xl 2xl:text-5xl font-bold text-blue-900">
                2.
              </h1>
              <h1 className="text-4xl lg:text-2xl xl:text:4xl 2xl:text-4xl  font-bold text-blue-900">
                116,1 Billion
              </h1>
            </div>
            <div className="flex flex-row justify-center items-center lg:flex-col xl:flex-row 2xl:flex-row mt-12 mb-12 lg:mb-2 xl:mb-12 2xl:mb-12 lg:gap-2 xl:gap-12  2xl:gap-12 gap-12">
              <div className="">
                <div className="flex  ">
                  <div className="">
                    <Image className="" src="/k.svg" width={42} height={40} />
                  </div>
                  <div className="flex gap-1">
                    <h1 className="text-xl text-blue-900 mt-1 font-semibold">
                      4+
                    </h1>
                    <h1 className="text-xl text-blue-900 mt-1 font-semibold">
                      Billion
                    </h1>
                    <h1 className="text-xl text-blue-900 mt-1 font-semibold">
                      Keywords
                    </h1>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flex gap-4">
                  <div className="">
                    <Image
                      className=""
                      src="/language (1).svg"
                      width={42}
                      height={40}
                    />
                  </div>
                  <div className="w-11/12">
                    <h1 className=" text-xl text-blue-900 mt-1 font-semibold">
                      34TB Data
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-32 mb-32 block md:hidden  lg:hidden xl:hidden 2xl:hidden  ">
        <div className="">
          <div className="relative ">
            <Image
              className=""
              src="/section-4 (2).png"
              width={9278}
              height={8901}
            />
            <div className="text-center absolute w-full px-2 text-sm md:text-md lg:text-4xl 2xl:text-4xl 2xl:text-4xl  text-white font-bold top-12 md:mt-12  lg:top-32 xl:top-32 2xl:top-32 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              Bigger data = Better Trained Models
            </div>
            <div className="absolute  w-full  px-4 text-xs 2xl:text-md xl:text-md lg:text-md text-white text-center top-28 lg:top-56 xl:top-56 2xl:top-56 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              We have great competitors that can provide you with data. Our main
              focus is not only providing data but also insights extracted from
              them. To create better machine learning models, we’re collecting
              more data.
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row justify-center items-center gap-16  -mt-40 md:-mt-32 lg:-mt-64 xl:-mt-64 2xl:-mt-80 ">
          <div className=" w-10/12 md:w-1/3  lg:w-1/3  xl:w-1/3  2xl:w-1/3  bg-white drop-shadow-md p-3">
            <h1 className="text-center mt-12 font-bold  text-gray-800 text-xl">
              Keywords
            </h1>
            <div className="flex  items-center justify-center mt-4">
              <h1 className="text-2xl lg:text-5xl  md:text-5xl xl:text-5xl 2xl:text-5xl font-bold text-blue-900">
                2.
              </h1>
              <h1 className="text-xl lg:text-4xl  md:text-4xl xl:text-4xl 2xl:text-4xl font-bold text-blue-900">
                282.150.458
              </h1>
            </div>
            <div className="flex mt-3  flex-col items-center justify-center gap-3 md:gap-16 lg:gap-16 xl:gap-16 2xl:gap-16 lg:mt-12 lg:mb-12 md:mt-12 md:mb-12 xl:mt-12 xl:mb-12 2xl:mt-12 2xl:mb-12">
              <div className="">
                <div className="flex gap-2">
                  <div className="">
                    <Image
                      className=""
                      src="/globe.svg"
                      width={42}
                      height={40}
                    />
                  </div>

                  <div className="">
                    <h1 className="text-sm lg:text-xl  md:text-xl xl:text-xl 2xl:text-xl text-blue-900 mt-3 font-semibold ">
                      87 Countries
                    </h1>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flex gap-2">
                  <div className="w-11/12">
                    <Image
                      className=""
                      src="/language.svg"
                      width={42}
                      height={40}
                    />
                  </div>
                  <div className="flex">
                    <h1 className="text-sm lg:text-xl mt-3 md:text-xl xl:text-xl 2xl:text-xl  text-blue-900 mt-3 font-semibold">
                      38
                    </h1>
                    <h1 className="text-sm lg:text-xl pl-2 md:text-xl xl:text-xl 2xl:text-xl  text-blue-900 mt-3 font-semibold">
                      Languages
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white   w-10/12 md:w-1/3  lg:w-1/3  xl:w-1/3  2xl:w-1/3  drop-shadow-md">
            <h1 className="text-center mt-12 font-bold  text-gray-800 text-xl  p-3">
              Search Volume
            </h1>
            <div className="flex items-center justify-center mt-4">
              <h1 className="text-2xl lg:text-5xl  md:text-5xl xl:text-5xl 2xl:text-5xl font-bold text-blue-900">
                2.
              </h1>
              <h1 className="text-xl lg:text-4xl  md:text-4xl xl:text-4xl 2xl:text-4xl font-bold text-blue-900">
                116,1 Billion
              </h1>
            </div>
            <div className="mt-3  flex-col items-center justify-center gap-3 md:gap-16 lg:gap-16 xl:gap-16 2xl:gap-16 lg:mt-12 lg:mb-12 md:mt-12 md:mb-12 xl:mt-12 xl:mb-12 2xl:mt-12 2xl:mb-12">
              <div className="">
                <div className="flex justify-center items-center  ">
                  <div className="">
                    <Image className="" src="/k.svg" width={42} height={40} />
                  </div>
                  <div className="flex gap-1">
                    <h1 className="text-sm lg:text-xl mt-3 md:text-xl xl:text-xl 2xl:text-xl  text-blue-900 mt-3 font-semibold">
                      4+
                    </h1>
                    <h1 className="text-sm lg:text-xl mt-3 md:text-xl xl:text-xl 2xl:text-xl  text-blue-900 mt-3 font-semibold">
                      Billion
                    </h1>
                    <h1 className="text-sm lg:text-xl mt-3 md:text-xl xl:text-xl 2xl:text-xl  text-blue-900 mt-3 font-semibold">
                      Keywords
                    </h1>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flex justify-center items-center gap-4">
                  <div className="">
                    <Image
                      className=""
                      src="/language (1).svg"
                      width={42}
                      height={40}
                    />
                  </div>
                  <div className="">
                    <h1 className="text-sm lg:text-xl mt-3 md:text-xl xl:text-xl 2xl:text-xl  text-blue-900 mt-3 font-semibold">
                      34TB Data
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 lg:mt-32 md:mt-32 xl:mt-32 2xl:mt-32 ">
        <h1
          className="text-center text-2xl  md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-6xl font-bold font-bold"
          style={{ color: "#222194" }}
        >
          New Metrics:
        </h1>

        <h1
          className="mt-0 md:mt-8  lg:mt-8  xl:mt-8  2xl:mt-8 text-center  text-2xl  md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-6xl font-bold"
          style={{ color: "#222194" }}
        >
          Time To Change Paradigms
        </h1>
        <div className="hidden md:block lg:block xl:block 2xl:block ">
          <h1 className="text-center text-gray-700 text-xl mt-6">
            The industry is backed by hard-coded metrics, not estimations.
          </h1>
          <h1 className="text-center text-xl text-gray-700">
            We believe data science to fix this.
          </h1>
        </div>
        <h1 className="text-center block md:hidden lg:hidden xl:hidden 2xl:hidden text-gray-700 text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl mt-6">
          The industry is backed by hard-coded metrics, not estimations.We
          believe data science to fix this.
        </h1>
      </div>
      <h1 className="text-center text-blue-900 text-3xl  md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl mt-20 md:mt-48 lg:mt-48 xl:mt-48 2xl:mt-48  font-bold">
        Our Revolutionary Approach
      </h1>
      <div className="container mx-auto  hidden lg:block xl:block 2xl:block">
        <div className="justify-center items-center flex mt-16 relative">
          <Image className="" src="/Vector 41.svg" width={1018} height={961} />
          <div className="absolute top-16 left-0 flex gap-9">
            <div className=" bg-white px-12 py-8 w-6/12 border">
              <Image className="" src="/Group 9.svg" width={53} height={40} />
              <h1 className=" mt-7 text-4xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-blue-900 font-bold w-6/12">
                Keyword Specific CTR Calculations
              </h1>
              <h1 className="text-2xl  lg:text-xl xl:text-xl 2xl:text-2xl text-gray-800 font-semibold mt-12 w-11/12">
                Most of the rank trackers use fixed CTRs for traffic &
                visibility. It could be misleading in 2021 but in 2022 it is the
                trend!
              </h1>
            </div>
            <div className="bg-white px-12 py-8 w-6/12 border ">
              <div className=" ">
                <Image
                  className=""
                  src="/Group 9 (1).svg"
                  width={53}
                  height={40}
                />
              </div>
              <h1 className="mt-7 text-4xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-blue-900 font-bold w-11/12">
                Pixel Rank: Industry’s Response to Feature-Rich SERPS
              </h1>
              <h1 className=" lg:text-xl xl:text-xl 2xl:text-2xl text-gray-800 font-semibold mt-12 w-11/12">
                Ranks belong to old school SEOs. To cope with 2021’s SERP
                landscape we need to measure pixels instead of ranks.
              </h1>
            </div>
          </div>
          <div className="absolute bottom-32 left-0 flex gap-9">
            <div className=" bg-white px-12 py-8 border w-6/12">
              <Image
                className=""
                src="/Group 9 (2).svg"
                width={53}
                height={40}
              />
              <h1 className="mt-7 text-4xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-blue-900 font-bold w-11/12">
                Weighted Metrics: Get Rid of Simple Average Operations
              </h1>
              <h1 className=" lg:text-xl xl:text-xl 2xl:text-2xl text-gray-800 font-semibold mt-12 w-11/12">
                We calculate every single metric by weighing search volume. From
                rank to pixel rank, visibility, traffic and ad value.
              </h1>
            </div>
            <div className="bg-white px-12 py-8 border w-6/12">
              <Image
                className=""
                src="/Group 9 (3).svg"
                width={53}
                height={40}
              />
              <h1 className="mt-7 text-4xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-blue-900 font-bold w-11/12">
                Calculate Keyword / Group Based SERP Changes
              </h1>
              <h1 className=" lg:text-xl xl:text-xl 2xl:text-2xl text-gray-800 font-semibold mt-12 w-11/12">
                Find the keywords impacted by Google’s SERP changes most and
                analyze the impact of those changes.
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-5 block lg:hidden xl:hidden 2xl:hidden">
        <div className="bg-white  border p-4 mt-8">
          <Image className="" src="/Group 9.svg" width={53} height={40} />
          <h1 className="mt-7 text-lg lg:text-3xl xl:text-3xl 2xl:text-4xl text-blue-900 font-bold w-full">
            Keyword Specific CTR Calculations
          </h1>
          <h1 className="text-sm lg:text-xl xl:text-xl 2xl:text-2xl text-gray-800 font-semibold mt-6 w-full">
            Most of the rank trackers use fixed CTRs for traffic & visibility.
            It could be misleading in 2021 but in 2022 it is the trend!
          </h1>
        </div>
        <div className="">
          <div className="bg-white  border p-4 mt-8">
            <Image className="" src="/Group 9 (1).svg" width={53} height={40} />
            <h1 className="mt-7 text-lg lg:text-3xl xl:text-3xl 2xl:text-4xl text-blue-900 font-bold w-full">
              Pixel Rank: Industry’s Response to Feature-Rich SERPS
            </h1>
            <h1 className="text-sm lg:text-xl xl:text-xl 2xl:text-2xl text-gray-800 font-semibold mt-6 w-full">
              Ranks belong to old school SEOs. To cope with 2021’s SERP
              landscape we need to measure pixels instead of ranks.
            </h1>
          </div>
        </div>
        <div className="">
          <div className="bg-white  border p-4 mt-8">
            <Image className="" src="/Group 9 (2).svg" width={53} height={40} />
            <h1 className="mt-7 text-lg lg:text-3xl xl:text-3xl 2xl:text-4xl text-blue-900 font-bold w-full">
              Weighted Metrics: Get Rid of Simple Average Operations
            </h1>
            <h1 className="text-sm lg:text-xl xl:text-xl 2xl:text-2xl text-gray-800 font-semibold mt-6 w-full">
              We calculate every single metric by weighing search volume. From
              rank to pixel rank, visibility, traffic and ad value.
            </h1>
          </div>
        </div>
        <div className="">
          <div className="bg-white  border p-4 mt-8">
            <Image className="" src="/Group 9 (3).svg" width={53} height={40} />
            <h1 className="mt-7 text-lg lg:text-3xl xl:text-3xl 2xl:text-4xl text-blue-900 font-bold w-full">
              Calculate Keyword / Group Based SERP Changes
            </h1>
            <h1 className="text-sm lg:text-xl xl:text-xl 2xl:text-2xl text-gray-800 font-semibold mt-6 w-full">
              Find the keywords impacted by Google’s SERP changes most and
              analyze the impact of those changes.
            </h1>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-32 hidden md:block lg:block xl:block 2xl:block">
        <div className="relative  justify-center items-center flex">
          <Image className="" src="/section-6.png" width={1581} height={596} />
          <h1 className="absolute text-2xl lg:text-3xl  xl:text-5xl  2xl:text-6xl  top-16 lg:top-16 xl:top-16 2xl:top-16  md:top-6 font-bold text-white w-6/12 text-center">
            Get Your Custom Analysis in 60 Seconds For Free
          </h1>
          <h1 className="absolute text-white w-6/12 text-2xl lg:text-md xl:text-2xl 2xl:text-2xl md:text-sm text-center">
            Don’t spend hours to find eligible keywords to track. Don’t waste
            yourself in Excel to group those keywords. AI is ready to help you.
          </h1>
          <form className="absolute w-4/12 lg:w-4/12 xl:w-4/12 2xl:w-4/12  md:w-6/12 top-96 lg:top-64 xl:top-80 2xl:top-96 md:top-48 mt-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <label
              for="search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
            >
              Enter your domain
            </label>
            <div className="relative">
              <input
                type="search"
                id="search"
                className="block px-4 py-6 lg:py-6  2xl:py-6  xl:py-6  md:py-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-full outline-none "
                placeholder="Enter your domain"
                required
              />
              <button
                type="submit"
                className=" text-white absolute right-2.5 bottom-3 lg:bottom-2 xl:bottom-2 2xl:bottom-2 bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-4  2xl:py-4 xl:py-4 lg:py-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Start instant demo
              </button>
            </div>
          </form>
          <div className="absolute  top-3/4 md:top-96  lg:top-2/3 xl:top-1/12 2xl:top-3/4 mt-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  flex justify-center items-center gap-12 w-11/12 pt-12 lg:mt-16  xl:mt-16 2xl:mt-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex gap-3">
              <div className="text-3xl text-white">.</div>
              <div className="text-xl lg:text-sm xl:text-xl 2xl:text-xl  lg:text-xl text-white mt-3 lg:mt-4 xl:mt-3 2xl:mt-3">
                No credit cards
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-3xl text-white">.</div>
              <div className="text-xl lg:text-sm xl:text-xl 2xl:text-xl  lg:text-xl text-white  mt-3 lg:mt-4 xl:mt-3 2xl:mt-3">
                Ready to use in five minutes
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto block md:hidden lg:hidden xl:hidden 2xl:hidden mt-8">
        <div className="relative  justify-center items-center flex">
          <Image
            className=""
            src="/section-6 (1).png"
            width={91278}
            height={63901}
          />
          <h1 className="absolute text-md    top-7 font-bold text-white w-8/12 text-center">
            Get Your Custom Analysis in 60 Seconds For Free
          </h1>
          <h1 className="absolute top-20 mt-4 text-white w-11/12 text-xs text-center">
            Don’t spend hours to find eligible keywords to track. Don’t waste
            yourself in Excel to group those keywords. AI is ready to help you.
          </h1>
          <form className="absolute  top-40 md:top-96  lg:top-32 xl:top-32 2xl:top-32 mt-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <label
              for="search"
              className="mb-2 text-xs  py-0 md:py-4 text-center text-gray-900 sr-only dark:text-gray-300"
            >
              Enter your domain
            </label>
            <div className="relative ">
              <input
                type="search"
                id="search"
                className="block px-2 py-1 md:py-4 w-full text-sm text-gray-900 bg-gray-50 rounded-full outline-none "
                placeholder="Enter your domain"
                required
              />
            </div>
            <button
              type="submit"
              className="py-1  md:py-4  text-white absolute  w-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-6 md:mt-12 bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-xs"
            >
              Start instant demo
            </button>
          </form>
        </div>
      </div>
      <footer className="mt-32 mb-32 container mx-auto hidden lg:block xl:block 2xl:block">
        <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row gap-32">
          <div className=" w-11/12">
            <div className="relative">
              <Image
                className=""
                src="/shapes.png"
                width={751.21}
                height={975}
              />
              <h1 className="absolute cursor-pointer top-1/3 mt-16 left-64 lg:left-32 xl:left-64 2xl:left-64 text-white font-semibold text-xl">
                Company
              </h1>
              <h1 className="absolute  top-1/4 mt-48 left-64 lg:left-32 xl:left-64 2xl:left-64 text-white cursor-pointer  text-xl">
                About
              </h1>
              <h1 className="absolute  top-1/4 mt-60 left-64 lg:left-32 xl:left-64 2xl:left-64 text-white cursor-pointer  text-xl ">
                Blog
              </h1>
              <h1 className="absolute  top-1/4 mt-72 left-64 lg:left-32 xl:left-64 2xl:left-64 text-white  cursor-pointer text-xl ">
                Carrer
              </h1>
              <h1 className="absolute  top-1/4 mt-80 pt-3 left-64 lg:left-32 xl:left-64 2xl:left-64 cursor-pointer text-white   text-xl">
                Contact
              </h1>
              <h1 className="absolute  top-1/3 mt-80 pt-3 left-64 lg:left-32 xl:left-64 2xl:left-64 text-white cursor-pointer  text-xl ">
                Help
              </h1>
              <h1 className="absolute  top-1/3 mt-80 pt-12 left-64 lg:left-32 xl:left-64 2xl:left-64 text-white cursor-pointer  text-xl ">
                Knowledge Base
              </h1>
              <h1 className="absolute  top-1/3 mt-16 left-96 lg:left-64 xl:left-96 2xl:left-96  ml-16 text-white font-semibold cursor-pointer text-xl">
                Product
              </h1>
              <h1 className="absolute  top-1/4 mt-48 left-96 lg:left-64 xl:left-96 2xl:left-96  ml-16 text-white cursor-pointer  text-xl">
                Features
              </h1>
              <h1 className="absolute  top-1/4 mt-60 left-96 lg:left-64 xl:left-96 2xl:left-96  ml-16 text-white cursor-pointer  text-xl ">
                CLI
              </h1>
              <h1 className="absolute top-1/4 mt-72 left-96 lg:left-64 xl:left-96 2xl:left-96  ml-16 text-white cursor-pointer  text-xl ">
                Pricing
              </h1>
            </div>
          </div>
          <div className=" w-8/12">
            <div className="mt-40">
              <Image className="" src="/logo (1).svg" width={70} height={80} />
            </div>
            <div className="w-28 mt-20">
              <h1 className="cursor-pointer text-2xl text-blue-300 border-b-2 border-blue-300 font-semibold">
                hi@seo.do
              </h1>
            </div>
            <div className="w-48 mt-9">
              <h1 className="cursor-pointer text-2xl text-blue-300 border-b-2 border-blue-300 font-semibold">
                0 (021) 463-7333
              </h1>
            </div>
            <h1 className="text-gray-700 cursor-pointer text-2xl mt-12">
              SEO DO OU
            </h1>
            <h1 className="text-gray-700 cursor-pointer text-2xl mt-5">
              Sepapaja tn 6
            </h1>
            <h1 className="text-gray-700 cursor-pointer text-2xl mt-5">
              1551, Tallinn Estonia
            </h1>
            <div className="flex gap-12 mt-12">
              <div className="">
                <Image
                  className="cursor-pointer"
                  src="/Linkedin.svg"
                  width={77}
                  height={77}
                />
              </div>
              <div className="">
                <Image
                  className="cursor-pointer"
                  src="/Twitter.svg"
                  width={77}
                  height={77}
                />
              </div>
              <div className="">
                <Image
                  className="cursor-pointer"
                  src="/Facebook.svg"
                  width={77}
                  height={77}
                />
              </div>
            </div>
            <h1 className="mt-8">Copyright (c) 2021 Seo.do </h1>
            <div className="relative pl-2 sm:w-5/12 w-full lg:mx-0 mx-auto lg:pb-0 pb-4 mt-5">
              <select
                type="text"
                name="language"
                required
                id="language"
                className="bg-white cursor-pointer  appearance-none pl-8 py-3 w-full lg:text-lg md:text-sm text-xs border border-transparent focus:outline-none text-blue-900  rounded"
              >
                <option value="Switzerland">English</option>
                <option value="America">Arabic</option>
                <option value="Australia">Spanish</option>
                <option value="Australia">French</option>
                <option value="Australia">Russian</option>
              </select>
              <div className="z-30 cursor-pointer absolute left-0 lg:top-3 top-2 pointer-events-none ">
                <Image src="/Group 10.svg" width={30} height={30} />
              </div>
              <div className="z-30 cursor-pointer  absolute lg:top-4 top-2.5 right-5 pointer-events-none">
                <Image src="/down.png" width={20} height={20} className="" />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="mt-12 mb-12 container mx-auto block lg:hidden xl:hidden 2xl:hidden ">
        <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row gap-32">
          <div className=" w-11/12">
            <div className="relative">
              <Image
                className=""
                src="/shapes.png"
                width={751.21}
                height={975}
              />
              <h1 className="absolute top-1/3 mb-3 pb-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer text-white font-semibold text-sm">
                Company
              </h1>
              <h1 className="absolute top-1/3 mt-3 pb-4  left-1/2 transform -translate-x-1/2 -translate-y-1/2   cursor-pointer text-white font-semibold text-sm">
                About
              </h1>
              <h1 className="absolute top-1/3 mt-6   left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer text-white font-semibold text-sm">
                Blog
              </h1>
              <h1 className="absolute top-1/3  mt-11   left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer text-white font-semibold text-sm">
                Carrer
              </h1>
              <h1 className="absolute top-1/3  mt-16   left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer text-white font-semibold text-sm">
                Contact
              </h1>
              <h1 className="absolute top-1/3 mt-24   pb-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer text-white font-semibold text-sm ">
                Help
              </h1>
              <h1 className="absolute top-1/3 mt-28 pb-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer text-white font-semibold text-sm">
                Knowledge Base
              </h1>
              <h1 className="absolute  top-1/3 mt-36   pb-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2   cursor-pointer text-white font-semibold text-sm">
                Product
              </h1>
              <h1 className="absolute  top-1/3 mt-40    pb-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer text-white font-semibold text-sm">
                Features
              </h1>
              <h1 className="absolute top-1/3 mt-44   pb-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer text-white font-semibold text-sm">
                CLI
              </h1>
              <h1 className="absolute  top-1/3 mt-48  pb-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2   cursor-pointer text-white font-semibold text-sm">
                Pricing
              </h1>
            </div>
          </div>
        </div>
        <div className="">
          <div className="mt-2 flex justify-center items-center">
            <Image className="" src="/logo (1).svg" width={70} height={80} />
          </div>
          <div className=" mt-6   ">
            <h1 className="text-center underline  cursor-pointer text-2xl text-blue-300 border-blue-300 font-semibold">
              hi@seo.do
            </h1>
          </div>
          <div className=" mt-9 flex justify-center items-center">
            <h1 className="cursor-pointer text-2xl text-blue-300 underline border-blue-300 font-semibold">
              0 (021) 463-7333
            </h1>
          </div>
          <h1 className="text-gray-700 cursor-pointer text-2xl mt-12 text-center">
            SEO DO OU
          </h1>
          <h1 className="text-gray-700 cursor-pointer text-2xl mt-5 text-center">
            Sepapaja tn 6
          </h1>
          <h1 className="text-gray-700 cursor-pointer text-2xl mt-5 text-center">
            1551, Tallinn Estonia
          </h1>
          <div className="flex gap-12 mt-12 justify-center items-center">
            <div className="">
              <Image
                className="cursor-pointer"
                src="/Linkedin.svg"
                width={40}
                height={40}
              />
            </div>
            <div className="">
              <Image
                className="cursor-pointer"
                src="/Twitter.svg"
                width={40}
                height={40}
              />
            </div>
            <div className="">
              <Image
                className="cursor-pointer"
                src="/Facebook.svg"
                width={40}
                height={40}
              />
            </div>
          </div>
          <h1 className="mt-8 text-center">Copyright (c) 2021 Seo.do </h1>
          <div className="relative pl-2 sm:w-5/12 w-5/12 lg:mx-0 mx-auto lg:pb-0 pb-4 mt-5 ">
            <select
              type="text"
              name="language"
              required
              id="language"
              className="bg-white cursor-pointer  appearance-none pl-8 py-3 w-full lg:text-lg md:text-sm text-xs border border-transparent focus:outline-none text-blue-900  rounded"
            >
              <option value="Switzerland">English</option>
              <option value="America">Arabic</option>
              <option value="Australia">Spanish</option>
              <option value="Australia">French</option>
              <option value="Australia">Russian</option>
            </select>
            <div className="z-30 cursor-pointer absolute left-0 lg:top-3 top-2 pointer-events-none ">
              <Image src="/Group 10.svg" width={30} height={30} />
            </div>
            <div className="z-30 cursor-pointer  absolute lg:top-4 top-2.5 right-5 pointer-events-none">
              <Image src="/down.png" width={20} height={20} className="" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Index;
