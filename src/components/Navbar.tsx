"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Handlee } from "next/font/google";
const handlee = Handlee({
  subsets: ["latin"],
  weight: ["400"],
});
const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/#about",
  },
  {
    name: "Services",
    path: "/#services",
  },
  {
    name: "Testimonials",
    path: "/#testimonials",
  },
  {
    name: "Contact",
    path: "/#contact",
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
  {
    name: "Blogs",
    path: "/blogs",
  },
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="absolute z-50"
      onClick={() => {
        if (open) setOpen(!open);
      }}
    >
      <div className="fixed h-20 shadow-sm bg-[#fdfdfd] w-full flex flex-row items-center justify-center">
        <Link className={`text-fuchsia-900 pl-5"`} href="/">
          <Image
            src="/logo_clean_head.png"
            alt="logo"
            width={150}
            height={50}
            className="h-12 sm:h-16 sm:ml-4 inline"
          />
        </Link>
        <span
          className={`${handlee.className} text-amber-500 text-sm h-0 font-bold`}
        >
          <i className="bx bx-right-arrow text-base"></i>
          Celebrate every moment
        </span>
        <div
          id="lg+"
          className="ml-auto hidden lg:flex flex-row justify-evenly w-3/5 min-w-fit align-middle"
        >
          {routes.map((route, index) => (
            <Link
              key={index}
              href={route.path}
              className={`text-fuchsia-900 transition-all duration-300 ease-in-out hover:font-bold hover:test-fuchsia-900`}
            >
              {route.name}
            </Link>
            //   <Link
            //   key={index}
            //   href={route.path}
            //   className={`text-fuchsia-900 transition-all duration-300 ease-in-out hover:font-bold hover:test-fuchsia-900`}
            // >
            //   {route.name}
            // </Link>
          ))}
        </div>
        <div
          id="lg-"
          className="ml-auto lg:hidden p-3 text-fuchsia-900 rounded-full mt-1 mr-1"
          onClick={() => setOpen(!open)}
        >
          {!open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </div>
      </div>

      <div
        id="dropdown"
        className={`fixed top-0 pt-12 h-screen w-3/4 max-w-[250px] lg:hidden ${
          open ? "translate-x-0" : "-translate-x-72"
        }
         transition-all ease-in-out duration-500 flex flex-col bg-slate-50`}
      >
        {routes.map((route, index) => (
          <Link
            key={index}
            href={route.path}
            className={`text-fuchsia-900 py-4 px-4 transition-all duration-300 ease-in-out hover:font-bold hover:test-fuchsia-900`}
          >
            {route.name}
          </Link>
        ))}
        <h1 className="bottom-16 fixed text-black">&copy;Fiesta Events 2023</h1>
      </div>
    </div>
  );
}
