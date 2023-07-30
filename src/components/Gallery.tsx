"use client";
import { handlee } from "@/components/fonts";
import FsLightbox from "fslightbox-react";
import Image from "next/image";
import { useState } from "react";
const sources = [
  "/gallery/g34.jpg",
  "/gallery/g35.jpg",
  "/gallery/g36.jpg",
  "/gallery/g37.jpg",
  "/gallery/g38.jpg",
  "/gallery/g39.jpg",
  "/gallery/g40.jpg",
  "/gallery/g18.jpg",
  "/gallery/g19.jpg",
  "/gallery/g20.jpg",
  "/gallery/g21.jpg",
  "/gallery/g22.jpg",
  "/gallery/g23.jpg",
  "/gallery/g24.jpg",
  "/gallery/g25.jpg",
  "/gallery/g26.jpg",
  "/gallery/g27.jpg",
  "/gallery/g13.jpg",
  "/gallery/g14.jpg",
  "/gallery/g15.jpg",
  "/gallery/g17.jpg",
  "/gallery/g28.jpg",
  "/gallery/g29.jpg",
  "/gallery/g30.jpg",
  "/gallery/g31.jpg",
  "/gallery/g32.jpg",
  "/gallery/g33.jpg",
  "/gallery/g1.jpg",
  "/gallery/g2.jpg",
  "/gallery/g3.jpg",
  "/gallery/g4.jpg",
  "/gallery/g5.jpg",
  "/gallery/g6.jpg",
  "/gallery/g7.jpg",
  "/gallery/g8.jpg",
  "/gallery/g9.jpg",
  "/gallery/g10.jpg",
  "/gallery/g11.jpg",
  "/gallery/g12.jpg",
  "/gallery/g16.jpg",
];
export default function GalleryClient() {
  const [toggler, setToggler] = useState({
    toggler: false,
    slide: 1,
  });
  return (
    <div className="min-h-screen w-full flex flex-col justify-start">
      <div
        className={`text-2xl lg:text-5xl text-purple-900 font-bold w-11/12 mx-auto text-left mt-32 ${handlee.className}`}
      >
        Glimpes from our Past Events
      </div>
      <div className="justify-center flex-wrap w-11/12 my-20 mx-auto flex">
        {sources.map((source, index) => (
          <div
            className="h-28 w-36 sm:h-52 sm:w-72 md:h-72 md:w-96 m-2 relative overflow-hidden rounded-md"
            key={index}
          >
            <Image
              className="h-full group w-full object-cover rounded-md hover:scale-125 transition-all duration-300"
              src={source}
              height={200}
              width={160}
              quality={50}
              alt={`${index}`}
              id={`${index}`}
              onClick={() =>
                setToggler({ toggler: !toggler.toggler, slide: index + 1 })
              }
              title={`Click to view image ${index + 1} in full screen`}
              loading={"lazy"}
              placeholder="blur"
              blurDataURL="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
            />
          </div>
        ))}
      </div>{" "}
      <FsLightbox
        toggler={toggler.toggler}
        sources={sources}
        slide={toggler.slide}
      />
    </div>
  );
}
