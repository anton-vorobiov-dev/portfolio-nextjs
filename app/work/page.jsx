"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Boxing portal and CMS",
    title: "project 1",
    description:
      "Ready to Fight develops technologies and offers services facilitating user connections, and boxing community building. As Lead Front-End Developer, I guided the front-end team, led code reviews, and fostered collaboration to build scalable, maintainable features. Together, we delivered a modern, responsive UI with real-time updates, strong UX, and SSR support.",
    stack: [{ name: "HTML 5" }, { name: "Typescript" }, { name: "Nuxt 3" }, { name: "Vue 3" }, { name: "Tailwind" }, { name: "GSAP Animations" }, { name: "Vuetify 3" }, { name: "Pinia" }, { name: "REST API" }, { name: "WebSockets" }],
    image: "/assets/work/thumb01.webp",
    live: "https://rtfight.com/",
    github: "NDA",
  },
  {
    num: "02",
    category: "Casino and betting platform",
    title: "project 2",
    description:
      "This project is a robust and high-performance casino and betting platform. As the Lead Front-End Developer, my role involved designing and developing clean, efficient, scalable, and maintainable code. I focused on creating a seamless user experience with a modern, responsive interface, integrating real-time updates using WebSockets, and ensuring cross-browser compatibility.",
    stack: [{ name: "HTML 5" }, { name: "Typescript" }, { name: "Nuxt 3" }, { name: "Tailwind" }, { name: "GSAP Animations" }, { name: "Vuetify 3" }, { name: "Pinia" }, { name: "WebSockets" }],
    image: "/assets/work/thumb1.webp",
    live: "https://4rabetsite.com/",
    github: "NDA",
  },
  {
    num: "03",
    category: "Global Country Race",
    title: "project 3",
    description:
      "This project is a dynamic and interactive visualization platform that showcases global data comparisons and analytics. The platform allows users to explore various metrics and statistics through an engaging and visually rich interface, with the ability to zoom, filter, and analyze data in real-time.",
    stack: [{ name: "HTML 5" }, { name: "Vue 3" }, { name: "amCharts" }, { name: "SCSS" }, { name: 'Typescript' }, { name: "Pinia" }],
    image: "/assets/work/thumb2.webp",
    live: "https://greatpowerinfluence.com/",
    github: "NDA",
  },
  {
    num: "04",
    category: "CMS for Automotive Services, Sales, and Warehouse Management",
    title: "project 4",
    description:
      "This project is a comprehensive Content Management System (CMS) tailored for car service centers and factories. It enables seamless management of goods and services, warehouse control, and operational workflows. The platform focuses on efficiency, scalability, and user-friendly navigation, providing an all-in-one solution for managing daily business activities.",
    stack: [{ name: "HTML 5" }, { name: "Vue 3" }, { name: "SCSS" }, { name: 'GraphQL'}, { name: "Typescript" }, { name: "Pinia" }, { name: "SvelteKit" }, { name: "SharedWorkers" }, { name: 'IndexDB' }],
    image: "/assets/work/thumb3.webp",
    live: "https://app.fixiq.pro/#/",
    github: "NDA",
  },
  {
    num: "05",
    category: "Case opening and trading platform for CS:GO/CS2",
    title: "project 5",
    description:
      "This project is a cutting-edge platform designed for CS:GO/CS2 enthusiasts, offering a seamless case-opening and trading experience. Built with players in mind, the platform features a Provably Fair system for transparency and fairness. Users can explore an extensive collection of CS2 skins and engage in dynamic case battles and trading, creating a highly interactive and engaging experience.",
    stack: [{ name: "HTML 5" }, { name: "Nuxt 3" }, { name: "GSAP Animations" }, { name: "Typescript" }, { name: "Pinia" }, { name: "WebSockets" }],
    image: "/assets/work/thumb4.webp",
    live: "https://skin.club/",
    github: "NDA",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline-accent">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex flex-wrap gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center  bg-accent/80">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover object-left"
                          alt={project.title}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
