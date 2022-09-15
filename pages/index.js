import React, { useState } from "react";
import Image from "next/image";
const Index = () => {
  const [isList4, setIsList4] = useState(false);

  return (
    <>
      <div className="w-full ">
        <div className="flex relative">
          <div className="bg-blue-700 pb-20 lg:pb-2 xl:pb-2 2xl:pb-20 w-11/12 ">
            <div className="px-4 pb-96 mb-96 lg:mb-56 xl:mb-64 2xl:mb-96 flex">
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
            <div className="right-0 absolute flex gap-16 px-12 py-4">
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
              <h1 className="absolute text-white top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center  text-5xl lg:text-5xl xl:text-5xl 2xl:text-7xl font-bold font-white">
                Data Science Meets SEO
              </h1>
              <h1 className="absolute text-white w-full  mt-0 lg:mt-5 xl:mt-5 2xl:mt-0 top-72 lg:top-64 xl:top-64 2xl:top-72 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-xl lg:text-md xl:text-md 2xl:text-xl font-medium font-white">
                Find all the SEO secrets of your competitors and track them
              </h1>
              <h1 className="absolute text-white w-full  top-80 lg:top-60 xl:top-60 2xl:top-80  left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center  text-xl lg:text-md xl:text-md 2xl:text-xl font-medium  font-medium font-white">
                daily without hours of boring keyword research & grouping
              </h1>
              <form className="absolute w-6/12 pt-0 lg:pt-16 xl:pt-16 2xl:pt-0 top-96 lg:top-72 xl:top-72 2xl:top-96  mt-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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
                    className="block px-4 py-6 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-full outline-none "
                    placeholder="Enter your domain"
                    required
                  />
                  <button
                    type="submit"
                    className="py-3 text-white absolute right-2.5 bottom-3 bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Start instant demo
                  </button>
                </div>
              </form>
              <div className=" flex justify-center items-center gap-12 absolute w-11/12  top-2/3  mt-5 lg:mt-20  xl:mt-16 2xl:mt-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="text-lg text-white ">. No credit cards</div>
                <div className="text-lg text-white ">
                  . Ready to use in five minutes
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mx-auto container -mt-56 lg:-mt-44 xl:-mt-44 2xl:-mt-56">
          <div className="justify-center items-center mx-auto flex ml-12">
            <Image
              className=""
              src="/Vector 4 (1).svg"
              width={1439.5}
              height={246}
            />
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Image className="" src="/circle.svg" width={108} height={103} />
            </div>
            <h1 className="absolute  text-center  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-blue-900 text-6xl lg:text-5xl xl:text-5xl 2xl:text-6xl">
              Features
            </h1>
            <h1 className="text-center text-2xl text-gray-800 absolute top-3/4 mt-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              You found us! Why spend your valuable hours to understand yet
              another rank tracker?
            </h1>
          </div>
        </div>
      </div>
      <div className="container mx-auto ">
        <div className="bg-gray-100 w-3/12 lg:w-4/12 xl:w-4/12 2xl:w-3/12  rounded-full justify-center items-center flex mx-auto mt-16">
          <div className="  w-80 justify-center items-center flex py-4">
            <div className="switch-button ">
              <input className="switch-button-checkbox" type="checkbox"></input>
              <label className="switch-button-label" for="">
                <span className="switch-button-label-span ">
                  Industry Features
                </span>
              </label>
            </div>
          </div>
        </div>
        <div className="flex gap-16 mt-36">
          <div className="w-11/12">
            <Image className="" src="/Group 5.svg" width={40} height={40} />
            <h1 className="text-3xl text-blue-800 font-bold mt-8">
              AI-Based Keyword Grouping
            </h1>
            <h1 className="text-xl text-gray-700 mt-8">
              We have trained our models by using the power of deep learning to
              find the most relevant keywords.
            </h1>
          </div>
          <div className="w-11/12">
            <Image className="" src="/Group 5 (1).svg" width={45} height={40} />
            <h1 className="text-3xl text-blue-800 font-bold mt-8">
              Fully Automated Keyword
            </h1>
            <h1 className="text-xl text-gray-700 mt-8">
              You don’t need to group keywords. Our smart algorithms classify
              keywords.
            </h1>
          </div>
          <div className="w-11/12">
            {" "}
            <Image className="" src="/Group 5 (2).svg" width={49} height={40} />
            <h1 className="text-3xl  text-blue-800 font-bold mt-8">
              Faster than Fastest Competitor
            </h1>
            <h1 className="text-xl text-gray-700 mt-8">
              Performance is our core value. We have tired of years of
              experience on slow rank track.
            </h1>
          </div>
          <div className="w-11/12">
            {" "}
            <Image className="" src="/Group 5 (3).svg" width={42} height={39} />
            <h1 className="text-3xl w-10/12 text-blue-800 font-bold mt-8">
              Free migration from 40+ tools.
            </h1>
            <h1 className="text-xl text-gray-700 mt-8">
              Losing data is not acceptable. Eventhough It has API access or
              not, we will migrate your data.
            </h1>
          </div>
        </div>
        <div className="container mx-auto mt-64 ">
          <div className="flex gap-12 ">
            <div className="w-11/12  text-6xl lg:text-5xl xl:text-5xl 2xl:text-6xl mt-3 text-blue-900 font-bold">
              Trusted by the World’s Best Companies{" "}
            </div>
            <div className="w-11/12 ">
              <div className="flex gap-28">
                <div className="mt-3">
                  <Image
                    className=""
                    src="/PepsiCo svg.svg"
                    width={150}
                    height={34}
                  />
                </div>
                <div className="mt-6">
                  <Image
                    className=""
                    src="/GrandVision.svg"
                    width={187}
                    height={24}
                  />
                </div>
                <div className="mt-4">
                  <Image
                    className=""
                    src="/Red Bull svg.svg"
                    width={156}
                    height={34}
                  />
                </div>
              </div>
              <div className="flex mt-12 gap-28">
                <div className="">
                  <Image
                    className=""
                    src="/YVESROCHER.svg"
                    width={187}
                    height={24}
                  />
                </div>
                <div className="">
                  <Image
                    className=""
                    src="/Beko svg.svg"
                    width={60}
                    height={34}
                  />
                </div>
                <div className="ml-12">
                  <Image
                    className=""
                    src="/WEBER.svg"
                    width={187}
                    height={24}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-32 mb-32  ">
          <div className="">
            <div className="relative ">
              <Image
                className=""
                src="/section-4.png"
                width={1750}
                height={750}
              />
              <div className="absolute text-4xl text-white font-bold top-32 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                Bigger data = Better Trained Models
              </div>
              <div className="absolute text-md text-white text-center top-56 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                We have great competitors that can provide you with data. Our
                main focus is not only providing data but also insights
                extracted from them. To create better machine learning models,
                we’re collecting more data.
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-16 -mt-80 lg:-mt-64 xl:-mt-64 2xl:-mt-80 ">
            <div className="w-1/3  bg-white drop-shadow-2xl p-3">
              <h1 className="text-center mt-12 font-bold  text-gray-800 text-xl">
                Keywords
              </h1>
              <div className="flex items-center justify-center mt-4">
                <h1 className="text-5xl font-bold text-blue-900">2.</h1>
                <h1 className="text-4xl font-bold text-blue-900">
                  282.150.458
                </h1>
              </div>
              <div className="flex items-center justify-center gap-16 mt-12 mb-12">
                <div className="">
                  <div className="flex ">
                    <div className="">
                      <Image
                        className=""
                        src="/globe.svg"
                        width={42}
                        height={40}
                      />
                    </div>
                    <div className="w-11/12">
                      <h1 className="text-xl text-blue-900 mt-1 font-semibold ">
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
            <div className="bg-white w-1/3 drop-shadow-2xl">
              <h1 className="text-center mt-12 font-bold text-xl text-gray-800 p-3">
                Search Volume
              </h1>
              <div className="flex items-center justify-center mt-4">
                <h1 className="text-5xl font-bold text-blue-900">2.</h1>
                <h1 className="text-4xl font-bold text-blue-900">
                  116,1 Billion
                </h1>
              </div>
              <div className="flex items-center justify-center gap-16 mt-12 mb-12">
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
        <div className="container mx-auto mt-32">
          <h1
            className="text-center text-6xl font-bold"
            style={{ color: "#222194" }}
          >
            New Metrics:
          </h1>
          <h1
            className=" mt-8 text-center  text-6xl font-bold"
            style={{ color: "#222194" }}
          >
            Time To Change Paradigms
          </h1>
          <h1 className="text-center text-gray-700 text-xl mt-6">
            The industry is backed by hard-coded metrics, not estimations.
          </h1>
          <h1 className="text-center text-xl text-gray-700">
            We believe data science to fix this.
          </h1>
          <h1 className="text-center text-blue-900 text-5xl mt-48 font-bold">
            Our Revolutionary Approach
          </h1>
          <div className="justify-center items-center flex mt-16 relative">
            <Image
              className=""
              src="/Vector 41.svg"
              width={1018}
              height={961}
            />
            <div className="absolute top-16 left-0 flex gap-9">
              <div className=" bg-white px-12 py-8 w-6/12 border">
                <Image className="" src="/Group 9.svg" width={53} height={40} />
                <h1 className=" mt-7 text-4xl lg:text-3xl xl:text-3xl 2xl:text-4xl text-blue-900 font-bold w-6/12">
                  Keyword Specific CTR Calculations
                </h1>
                <h1 className="text-2xl  lg:text-xl xl:text-xl 2xl:text-2xl text-gray-800 font-semibold mt-12 w-11/12">
                  Most of the rank trackers use fixed CTRs for traffic &
                  visibility. It could be misleading in 2021 but in 2022 it is
                  the trend!
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
                <h1 className="mt-7 text-4xl lg:text-3xl xl:text-3xl 2xl:text-4xl text-blue-900 font-bold w-11/12">
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
                <h1 className="mt-7 text-4xl lg:text-3xl xl:text-3xl 2xl:text-4xl text-blue-900 font-bold w-11/12">
                  Weighted Metrics: Get Rid of Simple Average Operations
                </h1>
                <h1 className=" lg:text-xl xl:text-xl 2xl:text-2xl text-gray-800 font-semibold mt-12 w-11/12">
                  We calculate every single metric by weighing search volume.
                  From rank to pixel rank, visibility, traffic and ad value.
                </h1>
              </div>
              <div className="bg-white px-12 py-8 border w-6/12">
                <Image
                  className=""
                  src="/Group 9 (3).svg"
                  width={53}
                  height={40}
                />
                <h1 className="mt-7 text-4xl lg:text-3xl xl:text-3xl 2xl:text-4xl text-blue-900 font-bold w-11/12">
                  Calculate Keyword / Group Based SERP Changes
                </h1>
                <h1 className=" lg:text-xl xl:text-xl 2xl:text-2xl text-gray-800 font-semibold mt-12 w-11/12">
                  We calculate every single metric by weighing search volume.
                  From rank to pixel rank, visibility, traffic and ad value.
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-32">
          <div className="relative  justify-center items-center flex">
            <Image
              className=""
              src="/section-6.png"
              width={1581}
              height={596}
            />
            <h1 className="absolute text-6xl lg:text-4xl  xl:text-5xl  2xl:text-6xl  top-16 font-bold text-white w-6/12 text-center">
              Get Your Custom Analysis in 60 Seconds For Free
            </h1>
            <h1 className="absolute text-white w-6/12 text-2xl text-center">
              Don’t spend hours to find eligible keywords to track. Don’t waste
              yourself in Excel to group those keywords. AI is ready to help
              you.
            </h1>
            <form className="absolute w-4/12  top-96 mt-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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
                  className="block px-4 py-6 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-full outline-none "
                  placeholder="Enter your domain"
                  required
                />
                <button
                  type="submit"
                  className="py-3 text-white absolute right-2.5 bottom-3 bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Start instant demo
                </button>
              </div>
            </form>
          </div>
        </div>
        <footer className="mt-32 mb-32">
          <div className="flex gap-32">
            <div className=" w-11/12">
              <div className="relative">
                <Image
                  className=""
                  src="/shapes.png"
                  width={751.21}
                  height={975}
                />
                <h1 className="absolute cursor-pointer top-1/3 mt-16 left-64 text-white font-semibold text-xl">
                  Company
                </h1>
                <h1 className="absolute  top-1/4 mt-48 left-64 text-white cursor-pointer  text-xl">
                  About
                </h1>
                <h1 className="absolute  top-1/4 mt-60 left-64 text-white cursor-pointer  text-xl ">
                  Blog
                </h1>
                <h1 className="absolute  top-1/4 mt-72 left-64 text-white  cursor-pointer text-xl ">
                  Carrer
                </h1>
                <h1 className="absolute  top-1/4 mt-80 pt-3 left-64 cursor-pointer text-white   text-xl">
                  Contact
                </h1>
                <h1 className="absolute  top-1/3 mt-80 pt-3 left-64 text-white cursor-pointer  text-xl ">
                  Help
                </h1>
                <h1 className="absolute  top-1/3 mt-80 pt-12 left-64 text-white cursor-pointer  text-xl ">
                  Knowledge Base
                </h1>
                <h1 className="absolute  top-1/3 mt-16 left-96  ml-16 text-white font-semibold cursor-pointer text-xl">
                  Product
                </h1>
                <h1 className="absolute  top-1/4 mt-48 left-96  ml-16 text-white cursor-pointer  text-xl">
                  Features
                </h1>
                <h1 className="absolute  top-1/4 mt-60 left-96  ml-16 text-white cursor-pointer  text-xl ">
                  CLI
                </h1>
                <h1 className="absolute top-1/4 mt-72 left-96  ml-16 text-white cursor-pointer  text-xl ">
                  Pricing
                </h1>
              </div>
            </div>
            <div className=" w-8/12">
              <div className="mt-40">
                <Image
                  className=""
                  src="/logo (1).svg"
                  width={70}
                  height={80}
                />
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
              <ul className="flex gap-16 mt-12">
                <li
                  onClick={() => setIsList4(!isList4)}
                  className="pr-8  cursor-pointer relative"
                >
                  <div className="flex items-center gap-3 ">
                    <div className="mt-2">
                      <Image
                        src="/Group 10.svg"
                        width={28}
                        height={28}
                        className=" my-auto"
                      />
                    </div>
                    <a className="font-normal text-base leading-4  pr-2 ">
                      English
                    </a>
                    <div className="mt-2">
                      <Image
                        src="/dropdown.vector.png"
                        width={16}
                        height={16}
                        className=" my-auto"
                      />
                    </div>
                  </div>

                  <ul
                    className={`${
                      isList4 ? "  flex-col drop-shadow-xl" : "hidden"
                    } absolute z-20 bg-white p-6 w-40 mr-6`}
                  >
                    <il className="py-4 text-gray-600 hover:text-blue-600">
                      Arabic
                    </il>
                    <li className="pt-4 text-gray-600 hover:text-blue-600">
                      Spanish
                    </li>
                    <li className="py-4 text-gray-600 hover:text-blue-600">
                      French
                    </li>
                    <li className="text-gray-600 hover:text-blue-600">
                      Russian
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>

      <style>
        {`
         
       }
        body {
          display: flex;
          align-items: center;
          justify-content: center;
          height:full;
          font-family: sans-serif;
       }
        .switch-button {
          border-radius: 50px;
          overflow: hidden;
          width: 540px;
          text-align: center;
          font-size: 15px;
          letter-spacing: 1px;
          color:#374151 ;
          position: relative;
          padding-right: 143px;
          position: relative;
          font-weight:500;
       }
        .switch-button:before {
          content: "Our Differences";
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          width: 130px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 3;
          pointer-events: none;
       }
        .switch-button-checkbox {
          cursor: pointer;
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          z-index: 2;
       }
        .switch-button-checkbox:checked + .switch-button-label:before {
          transform: translateX(175px);
          transition: transform 300ms linear;
       }
        .switch-button-checkbox + .switch-button-label {
          position: relative;
          padding: 20px 0;
          display: block;
          user-select: none;
          pointer-events: none;
       }
        .switch-button-checkbox + .switch-button-label:before {
          content: "";
          background: #fff;
          color:#1e40af;
          height: 100%;
          width: 100%;
          position: absolute;
          left: 0;
          top: 0;
          right:0;
          border-radius: 50px;
          transform: translateX(0);
          transition: transform 300ms;
       }
        .switch-button-checkbox + .switch-button-label .switch-button-label-span {
          position: relative;
       }
              
                     
                `}
      </style>
    </>
  );
};

export default Index;
