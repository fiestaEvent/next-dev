import Image from "next/image";
export default function About() {
  return (
    <div className="pb-10">
      <div className="text-rose-700 text-xl md:text-3xl font-bold m-auto w-fit pt-4">
        What We <span className="text-yellow-400">Do</span>
      </div>
      <div className="flex flex-col justify-center mt-10 items-center">
        <div className="flex flex-col md:flex-row w-full justify-evenly items-center mb-20 md:mb-10">
          <div className="text-xl md:text-xl font-[700] h-fit bg-fuchsia-900 md:bg-transparent text-white md:text-fuchsia-900 flex flex-row md:flex-col p-4 ">
            <div className="md:text-2xl">Corporate&nbsp;</div>
            <div className="md:text-rose-600 underline-offset-4 md:underline">
              Events
            </div>
          </div>
          <div>
            <Image
              height={500}
              width={500}
              src="/corporate.png"
              data-aos="zoom-in-left"
              alt="logo"
              className="w-[80vw] h-[50vw] md:w-[35vw] md:h-[26vw] object-cover object-center mt-8"
              title="data"
              loading="lazy"
              placeholder="blur"
              blurDataURL="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
            />
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row w-full justify-evenly items-center">
          <div>
            <Image
              src="/social.png"
              data-aos="zoom-in-right"
              height={500}
              width={500}
              alt="logo"
              className="w-[80vw] h-[50vw] md:w-[35vw] md:h-[26vw] object-cover object-center mt-8 md:mt-0"
              title="data"
              loading="lazy"
              placeholder="blur"
              blurDataURL="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
            />
          </div>
          <div className="text-xl md:text-xl font-[700] h-fit bg-fuchsia-900 md:bg-transparent text-white md:text-fuchsia-900 flex flex-row md:flex-col p-4 ">
            <div className="md:text-2xl">Social&nbsp;</div>
            <div className="md:text-rose-600 underline-offset-4 md:underline">
              Events
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
