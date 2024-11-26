"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Full Satck",
    title: "Vendify",
    description:
      "Comprehensive e-commerce platform supporting 1,000+ products, with features for product management, secure payment integration, and real-time data analytics",
    stack: [
      { name: "ReactJS" },
      { name: "TailwindCSS" },
      { name: "Typescript" },
      { name: "NodeJS" },
      { name: "ExpressJS" },
      { name: "Redis" },
      { name: "AWS" },
      { name: "Docker" },
    ],
    image: "/assets/work/image1.png",
    live: "https://github.com/Anish358/vendify",
    github: "https://github.com/Anish358/vendify",
  },
  {
    num: "02",
    category: "Full Satck",
    title: "StoreIt",
    description:
      "A storage management and file sharing platform that lets users effortlessly upload, organize, and share files. Built with the latest Next.js 15 and the Appwrite Node SDK, utilizing advanced features for seamless file management.",
    stack: [
      { name: "NextJS" },
      { name: "TailwindCSS" },
      { name: "Typescript" },
    ],
    image: "/assets/work/image2.png",
    live: "https://store-it-black.vercel.app/sign-up",
    github: "https://github.com/Anish358/storeIt",
  },
  {
    num: "03",
    category: "Full Satck",
    title: "Finanzo",
    description:
      "Finanzo is a financial SaaS platform that connects to multiple bank accounts, displays transactions in real-time, allows users to transfer money to other platform users, and manages their finances altogether.",
    stack: [
      { name: "NextJS" },
      { name: "TailwindCSS" },
      { name: "Typescript" },
    ],
    image: "/assets/work/image3.png",
    live: "https://github.com/Anish358/Finanzo",
    github: "https://github.com/Anish358/Finanzo",
  },
  {
    num: "04",
    category: "Front-end",
    title: "Xora",
    description:
      "SaaS landing page with modern UI and mobile-first principles while",
    stack: [{ name: "ReactJS" }, { name: "TailwindCSS" }, { name: "Vite" }],
    image: "/assets/work/image3.png",
    live: "https://github.com/Anish358/Finanzo",
    github: "https://github.com/Anish358/xora",
  },
];

const Work = () => {
  const [project, setproject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;

    // update project based on current slide index
    setproject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* text  */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num  */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* Project category  */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>
              {/* project description  */}
              <p className="text-white/60">{project.description}</p>
              {/* stack  */}
              <ul className="flex gap-4 flex-wrap">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma  */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border  */}
              <div className="border border-white/20"></div>
              {/* buttons  */}
              <div className="flex items-center gap-4">
                {/* live project button  */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* gitub project button  */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          {/* slider  */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full rounded-lg">
                    <div className="h-[460px] relative group flex justify-center items-center">
                      {/* overlay  */}
                      <div className="top-0 bottom-0 w-full h-full bg-black/10 z-10 absolute"></div>
                      {/* image  */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover rounded-lg"
                          alt=""
                        ></Image>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider button  */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
