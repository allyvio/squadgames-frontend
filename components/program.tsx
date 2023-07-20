"use client";

import React, { Fragment } from "react";
import { Tab } from "@headlessui/react";
import { programData } from "@/config/program";
import Link from "next/link";
import Image from "next/image";
import pic2 from "@/public/images/foto2.jpeg";
import pic3 from "@/public/images/foto3.jpeg";
import pic4 from "@/public/images/foto4.jpeg";
import { HiArrowLongRight } from "react-icons/hi2";

const Program = () => {
  return (
    <div className="">
      <Tab.Group vertical>
        {programData?.map((data, i) => (
          <div key={i} className="grid grid-cols-[1fr_3fr]">
            <Tab.List as="div" className="flex flex-col">
              {data?.tabs?.map((tab, i) => (
                <Tab
                  key={i}
                  className="border-b  ui-selected:border-b-darkPurple md:ui-selected:bg-darkPurple md:ui-selected:text-white ui-not-selected:text-black flex p-3 mr-3 md:mr-[3rem] outline-none md:rounded"
                >
                  {tab}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels as="div" className="">
              {/* {data?.panels?.map((panel, i) => (
                <div key={i}>
                  <Tab.Panel className="flex flex-col bg-orange">
                    <h2>{panel.title}</h2>
                    <p>{panel.desc}</p>
                    <p>{panel.link}</p>
                  </Tab.Panel>
                </div>
              ))} */}
              <Tab.Panel className="flex flex-col md:flex-row h-full gap-5">
                <div className="flex flex-col md:max-w-[50%] gap-5">
                  {/* <div className="flex flex-col gap-5"> */}
                  <h1 className="text-xl md:text-2xl font-bold">
                    Softskills Training With Experiential Learning Approach
                  </h1>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quia similique laudantium praesentium. Optio, consectetur
                    sequi delectus quisquam minus consequatur ea exercitationem,
                    at sint commodi id sapiente earum eligendi quae enim?
                  </p>
                  <div className="text-darkPurple">
                    <Link
                      href="/softskill-training"
                      className="flex items-center gap-2 hover:translate-x-2 ease-in-out duration-500"
                    >
                      <span className="hover:underline">
                        Lihat selengkapnya
                      </span>
                      <span className="text-lg scale-x-150">
                        <HiArrowLongRight />
                      </span>
                    </Link>
                  </div>
                  {/* </div> */}
                </div>
                <div className="flex">
                  <Image
                    src={pic4}
                    alt="image"
                    className="object-cover w-full h-56 md:h-72 rounded-md"
                  />
                </div>
              </Tab.Panel>

              <Tab.Panel className="flex flex-col md:flex-row h-full gap-5">
                <div className="flex flex-col gap-5 md:max-w-[50%]">
                  <h1 className="text-xl md:text-2xl font-bold">
                    In-Venue Team Building
                  </h1>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quia similique laudantium praesentium. Optio, consectetur
                    sequi delectus quisquam minus consequatur ea exercitationem,
                    at sint commodi id sapiente earum eligendi quae enim?
                  </p>
                  <div className="text-darkPurple">
                    <Link
                      href="/softskill-training"
                      className="flex items-center gap-2 hover:translate-x-2 ease-in-out duration-500"
                    >
                      <span className="hover:underline">
                        Lihat selengkapnya
                      </span>
                      <span className="text-lg scale-x-150">
                        <HiArrowLongRight />
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="flex">
                  <Image
                    src={pic2}
                    alt="image"
                    className="object-cover w-full h-56 md:h-72 rounded-md"
                  />
                </div>
              </Tab.Panel>

              <Tab.Panel className="flex flex-col md:flex-row h-full gap-5">
                <div className="flex flex-col gap-5 md:max-w-[50%]">
                  <h1 className="text-xl md:text-2xl font-bold">
                    Team Building in City
                  </h1>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quia similique laudantium praesentium. Optio, consectetur
                    sequi delectus quisquam minus consequatur ea exercitationem,
                    at sint commodi id sapiente earum eligendi quae enim?
                  </p>
                  <div className="text-darkPurple">
                    <Link
                      href="/softskill-training"
                      className="flex items-center gap-2 hover:translate-x-2 ease-in-out duration-500"
                    >
                      <span className="hover:underline">
                        Lihat selengkapnya
                      </span>
                      <span className="text-lg scale-x-150">
                        <HiArrowLongRight />
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="flex">
                  <Image
                    src={pic3}
                    alt="image"
                    className="object-cover w-full h-56 md:h-72 rounded-md"
                  />
                </div>
              </Tab.Panel>

              <Tab.Panel className="flex flex-col md:flex-row h-full gap-5">
                <div className="flex flex-col gap-5 md:max-w-[50%]">
                  <h1 className="text-xl md:text-2xl font-bold">
                    Corporate Event
                  </h1>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quia similique laudantium praesentium. Optio, consectetur
                    sequi delectus quisquam minus consequatur ea exercitationem,
                    at sint commodi id sapiente earum eligendi quae enim?
                  </p>
                  <div className="text-darkPurple">
                    <Link
                      href="/softskill-training"
                      className="flex items-center gap-2 hover:translate-x-2 ease-in-out duration-500"
                    >
                      <span className="hover:underline">
                        Lihat selengkapnya
                      </span>
                      <span className="text-lg scale-x-150">
                        <HiArrowLongRight />
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="flex">
                  <Image
                    src={pic4}
                    alt="image"
                    className="object-cover w-full h-56 md:h-72 rounded-md"
                  />
                </div>
              </Tab.Panel>

              <Tab.Panel className="flex flex-col md:flex-row h-full gap-5">
                <div className="flex flex-col gap-5 md:max-w-[50%]">
                  <h1 className="text-xl md:text-2xl font-bold">
                    Family Gathering
                  </h1>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quia similique laudantium praesentium. Optio, consectetur
                    sequi delectus quisquam minus consequatur ea exercitationem,
                    at sint commodi id sapiente earum eligendi quae enim?
                  </p>
                  <div className="text-darkPurple">
                    <Link
                      href="/softskill-training"
                      className="flex items-center gap-2 hover:translate-x-2 ease-in-out duration-500"
                    >
                      <span className="hover:underline">
                        Lihat selengkapnya
                      </span>
                      <span className="text-lg scale-x-150">
                        <HiArrowLongRight />
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="flex">
                  <Image
                    src={pic2}
                    alt="image"
                    className="object-cover w-full h-56 md:h-72 rounded-md"
                  />
                </div>
              </Tab.Panel>

              <Tab.Panel className="flex flex-col md:flex-row h-full gap-5">
                <div className="flex flex-col gap-5 md:max-w-[50%]">
                  <h1 className="text-xl md:text-2xl font-bold">
                    Retirement Preparation
                  </h1>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quia similique laudantium praesentium. Optio, consectetur
                    sequi delectus quisquam minus consequatur ea exercitationem,
                    at sint commodi id sapiente earum eligendi quae enim?
                  </p>
                  <div className="text-darkPurple">
                    <Link
                      href="/softskill-training"
                      className="flex items-center gap-2 hover:translate-x-2 ease-in-out duration-500"
                    >
                      <span className="hover:underline">
                        Lihat selengkapnya
                      </span>
                      <span className="text-lg scale-x-150">
                        <HiArrowLongRight />
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="flex">
                  <Image
                    src={pic4}
                    alt="image"
                    className="object-cover w-full h-56 md:h-72 rounded-md"
                  />
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </div>
        ))}
      </Tab.Group>
    </div>
  );
};

export default Program;
