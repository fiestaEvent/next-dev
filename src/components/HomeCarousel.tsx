"use client";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
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
  // "/gallery/g25.jpg",
  // "/gallery/g26.jpg",
  // "/gallery/g27.jpg",
  // "/gallery/g13.jpg",
  // "/gallery/g14.jpg",
  // "/gallery/g15.jpg",
  // "/gallery/g17.jpg",
  // "/gallery/g28.jpg",
  // "/gallery/g29.jpg",
  // "/gallery/g30.jpg",
  // "/gallery/g31.jpg",
  // "/gallery/g32.jpg",
  // "/gallery/g33.jpg",
  // "/gallery/g1.jpg",
  // "/gallery/g2.jpg",
  // "/gallery/g3.jpg",
  // "/gallery/g4.jpg",
  // "/gallery/g5.jpg",
  // "/gallery/g6.jpg",
  // "/gallery/g7.jpg",
  // "/gallery/g8.jpg",
  // "/gallery/g9.jpg",
  // "/gallery/g10.jpg",
  // "/gallery/g11.jpg",
  // "/gallery/g12.jpg",
  // "/gallery/g16.jpg",
];
export default function HomeCarousel() {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={1400}
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      showArrows={true}
      swipeable={false}
      className="max-w-xl"
    >
      {sources.map((source, index) => (
        <div className="max-w-xl" id={`${index}`} key={index}>
          <Image
            className="h-[300px] relative overflow-hidden max-w-[60vw] lg:max-w-lg bg-cover object-cover object-center"
            src={source}
            alt="@Fiesta Events"
            title={`Gallery Image ${index + 1}`}
            loading="eager"
            width={300}
            quality={50}
            height={400}
            priority={true}
          />
        </div>
      ))}
    </Carousel>
  );
}
