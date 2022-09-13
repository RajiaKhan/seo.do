import React, { useState } from "react";
import Image from "next/image";
const Index = () => {
  return (
    <>
      <div className="w-full ">
        <div className="flex relative">
          <div className="bg-blue-700 pb-20 w-11/12 ">
            <div className="px-4 pb-96 mb-96 flex">
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
              <h1 className="absolute text-white  top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center  text-7xl font-bold font-white">
                Data Science Meets SEO
              </h1>
              <h1 className="absolute text-white w-full  top-72 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center  text-xl font-medium font-white">
                Find all the SEO secrets of your competitors and track them
              </h1>
              <h1 className="absolute text-white w-full  top-80 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center  text-xl font-medium font-white">
                daily without hours of boring keyword research & grouping
              </h1>
              <form className="absolute w-6/12  top-96 mt-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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
              <div className="flex gap-12 absolute w-6/12  top-2/3 mt-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="text-lg text-white ">. No credit cards</div>
                <div className="text-lg text-white ">
                  . Ready to use in five minutes
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mx-auto container -mt-56">
          <div className="justify-center items-center mx-auto flex ml-12">
            <Image
              className=""
              src="/vector 4.svg"
              width={1439.5}
              height={246}
            />
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Image className="" src="/circle.svg" width={108} height={103} />
            </div>
            <h1 className="absolute  text-center  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-blue-900 text-6xl">
              Features
            </h1>
            <h1 className="text-center text-2xl text-gray-800 absolute top-3/4 mt-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              You found us! Why spend your valuable hours to understand yet
              another rank tracker?
            </h1>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-32">
        <div className="flex gap-12">
          <div className="">
            <Image className="" src="/Group 5.svg" width={40} height={40} />
            <h1 className="text-3xl text-blue-800 font-bold mt-5">
              AI-Based Keyword Grouping
            </h1>
            <h1 className="text-xl text-gray-700">
              We have trained our models by using the power of deep learning to
              find the most relevant keywords.
            </h1>
          </div>
          <div className="">
            <Image className="" src="/Group 5 (1).svg" width={45} height={40} />
            <h1 className="text-3xl text-blue-800 font-bold mt-5">
              AI-Based Keyword Grouping
            </h1>
            <h1 className="text-xl text-gray-700">
              We have trained our models by using the power of deep learning to
              find the most relevant keywords.
            </h1>
          </div>
          <div className="">
            {" "}
            <Image className="" src="/Group 5 (2).svg" width={49} height={40} />
            <h1 className="text-3xl text-blue-800 font-bold mt-5">
              AI-Based Keyword Grouping
            </h1>
            <h1 className="text-xl text-gray-700">
              We have trained our models by using the power of deep learning to
              find the most relevant keywords.
            </h1>
          </div>
          <div className="">
            {" "}
            <Image className="" src="/Group 5 (3).svg" width={42} height={39} />
            <h1 className="text-3xl text-blue-800 font-bold mt-5">
              AI-Based Keyword Grouping
            </h1>
            <h1 className="text-xl text-gray-700">
              We have trained our models by using the power of deep learning to
              find the most relevant keywords.
            </h1>
          </div>
        </div>
        <div className="container mx-auto mt-32 ">
          <div className="flex">
            <div className="w-11/12  text-6xl text-blue-900 font-bold">
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
            <div className="relative">
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
          <div className="flex justify-center items-center gap-16 -mt-80 ">
            <div className="w-1/3  bg-white drop-shadow-2xl">
              <h1 className="text-center mt-12 text-semibold text-xl">
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
                    <div className="">
                      <h1 className="text-gray-700 text-xl">87 Countries</h1>
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
                    <div className="">
                      <h1 className="text-gray-700 text-xl">87 Countries</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white w-1/3 drop-shadow-2xl">
              <h1 className="text-center mt-12 text-semibold text-xl">
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
                    <div className="">
                      <h1 className="text-gray-700 text-xl">87 Countries</h1>
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
                    <div className="">
                      <h1 className="text-gray-700 text-xl">87 Countries</h1>
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
          <div className="justify-center items-center flex mt-32 relative">
            <Image
              className=""
              src="/Vector 41.svg"
              width={1018}
              height={961}
            />
            <div className="absolute top-16 left-0 flex gap-12">
              <div className=" bg-white p-6 border">
                <Image className="" src="/Group 9.svg" width={53} height={40} />
                <h1 className="text-4xl text-blue-900 font-bold w-6/12">
                  Keyword Specific CTR Calculations
                </h1>
                <h1 className="text-2xl text-gray-800 font-semibold mt-12 w-11/12">
                  Most of the rank trackers use fixed CTRs for traffic &
                  visibility. It could be misleading in 2021 but in 2022 it is
                  the trend!
                </h1>
              </div>
              <div className="bg-white p-6 border ">
                <Image className="" src="/Group 9.svg" width={53} height={40} />
                <h1 className="text-4xl text-blue-900 font-bold w-6/12">
                  Keyword Specific CTR Calculations
                </h1>
                <h1 className="text-2xl text-gray-800 font-semibold mt-12 w-11/12">
                  Most of the rank trackers use fixed CTRs for traffic &
                  visibility. It could be misleading in 2021 but in 2022 it is
                  the trend!
                </h1>
              </div>
            </div>
            <div className="absolute bottom-48 left-0 flex gap-12">
              <div className=" bg-white p-6 border">
                <Image className="" src="/Group 9.svg" width={53} height={40} />
                <h1 className="text-4xl text-blue-900 font-bold w-6/12">
                  Keyword Specific CTR Calculations
                </h1>
                <h1 className="text-2xl text-gray-800 font-semibold mt-12 w-11/12">
                  Most of the rank trackers use fixed CTRs for traffic &
                  visibility. It could be misleading in 2021 but in 2022 it is
                  the trend!
                </h1>
              </div>
              <div className="bg-white p-6 border ">
                <Image className="" src="/Group 9.svg" width={53} height={40} />
                <h1 className="text-4xl text-blue-900 font-bold w-6/12">
                  Keyword Specific CTR Calculations
                </h1>
                <h1 className="text-2xl text-gray-800 font-semibold mt-12 w-11/12">
                  Most of the rank trackers use fixed CTRs for traffic &
                  visibility. It could be misleading in 2021 but in 2022 it is
                  the trend!
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-32">
          <div className="relative justify-center items-center flex">
            <Image
              className=""
              src="/section-6.png"
              width={1281}
              height={496}
            />
            <h1 className="absolute text-6xl top-16 font-bold text-white w-6/12 text-center">
              Get Your Custom Analysis in 60 Seconds For Free
            </h1>
            <h1 className="absolute text-white w-6/12 text-2xl text-center">
              Don’t spend hours to find eligible keywords to track. Don’t waste
              yourself in Excel to group those keywords. AI is ready to help
              you.
            </h1>
            <form className="absolute w-4/12  top-80 mt-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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
        <footer>
          <div className="flex">
            <div className="relative">
              <Image
                className=""
                src="/shapes.png"
                width={751.21}
                height={975}
              />
              <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
                Company
              </h1>
              <h1 className="absolute mt-12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
                About
              </h1>
            </div>
            <div className=""></div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
