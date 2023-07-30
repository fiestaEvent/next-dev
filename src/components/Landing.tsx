import Image from "next/image";
import HomeCarousel from "./HomeCarousel";
const pts = ["Quality", "Affordable", "Creativity"];

export default function Landing() {
  return (
    <div className="section mt-36">
      <div className="flex flex-col-reverse lg:flex-row justify-evenly items-center">
        <Image
          height={400}
          width={400}
          src="/logo_clean.png"
          className="mt-20 lg:mt-0 h-64 w-64 md:h-96 md:w-96"
          alt="logo"
          title="logo"
          loading="eager"
          placeholder="blur"
          blurDataURL="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
        />
       <HomeCarousel/>
      </div>
      <div className="flex flex-row mt-16 mb-12  justify-center text-center md:justify-evenly min-w-[50vw] max-w-[70vw] m-auto text-fuchsia-900">
        Your one-stop destination for all event management needs. At Fiesta,we
        understand that every event is unique and special. Whether it&apos;s a
        corporate conference, a grand wedding, a milestone celebration, or a
        social gathering, we have the knowledge, resources, and creativity to
        make it an unforgettable experiences within your budget. Don&apos;t just take
        our word for it - see what our satisfied clients have to say in our
        testimonials section and explore our gallery to see our last works.
        Thank you for visiting Fiesta. We look forward to celebrate the event
        with you and turning your dreams into reality.
      </div>
      <div className="flex flex-row mb-10 mt-5 justify-center md:justify-evenly min-w-[50vw] max-w-[70vw] m-auto text-fuchsia-900 font-black">
        {pts.map((pt, index) => (
          <div className="w-fit text-lg items-center" key={index}>
            {/* <i className="bx bxs-bullseye"></i> */}
            {pt}.&nbsp;
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center -mb-12">
        <span className="font-black -mt-4 text-2xl md:text-4xl text-yellow-400">
          Plan your next event with{" "}
        </span>
        <span
          data-aos="zoom-in"
          className="text-3xl text-fuchsia-900 md:text-6xl mt-2 font-black"
        >
          Fiesta
        </span>
      </div>
    </div>
  );
}
