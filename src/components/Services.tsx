import Image from "next/image";
import Link from "next/link";

const stats = [
  {
    tag: "Concept Planning",
    desc: "Share your ideas, choose a theme and set the foundation.",
    img: "/services/idea.png",
  },
  {
    tag: "Venue Selection",
    desc: "Find out the right space within your budget.",
    img: "/services/location.png",
  },
  {
    tag: "Logistic Support",
    desc: "We handle all the logistics, ensuring seamless support for your event.",
    img: "/services/logistics.png",
  },
  {
    tag: "Decoration",
    desc: "Creative and attractive quality decor matching with your theme and event.",
    img: "/services/decor.png",
  },
  {
    tag: "Food & Beverage",
    desc: "Delicious culinary experience with diverse range of cuisines for both buffet and à la carte.",
    img: "/services/food.png",
  },
  {
    tag: "Entertainment",
    desc: "From Djs and traditional performance  to engaging fun activities we have it all.",
    img: "/services/entertainment.png",
  },
  {
    tag: "Photography/ Videography",
    desc: "High quality traditional and modern shots are taken to cover the entire event.",
    img: "/services/videocam.png",
  },
  {
    tag: "Makeup & Styling",
    desc: "Talented MUA who ensure you look your best.",
    img: "/services/mua.png",
  },
  {
    tag: "Invite",
    desc: "Creative e-invite with videos and themed hard copy setting the tone.",
    img: "/services/invite.png",
  },
  {
    tag: "Gifting",
    desc: "Assistance in selecting guest favors that perfectly align with your event's theme.",
    img: "/services/gift.png",
  },
  {
    tag: "Onsite Support Staff",
    img: "/services/support.png",
  },
];

export default function Services() {
  return (
    <div className="bg-[#fdfdfd]">
      <div className="text-rose-700 text-xl md:text-3xl font-bold m-auto w-fit pt-4">
        Services we <span className="text-yellow-400">Provide</span>
      </div>
      <div className="flex flex-row flex-wrap max-w-[1000px] mx-auto items-center justify-center mt-5 md:mt-20 ">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="relative w-56 h-56 m-3 p-3 text-rose-900 flex flex-col items-end justify-between transition-all duration-200 bg-yellow-20 rounded-sm"
          >
            <Image
              src={stat.img}
              width={64}
              height={64}
              className="w-16 mx-auto p-2 outline-double"
              alt="icon"
              title={stat.tag}
              loading="lazy"
              placeholder="blur"
              blurDataURL="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
            />
            <div className="h-44 m-auto flex flex-col justify-evenly">
              <div className="font-bold text-[10pt] text-center">
                {stat.tag}
              </div>
              <div className="font-light text-sm text-center">{stat.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full h-80 md:h-96 bg-fuchsia-900 text-[#fdfdfd] flex flex-col justify-evenly mt-10 md:mt-20">
        <div className="text-4xl md:text-6xl font-bold max-w-xl text-center align-middle mx-auto">
          PLANNING YOUR NEXT EVENT?
        </div>
        <div className="w-full flex justify-center items-center text-xs font-bold">
          <Link
            href="/#contact"
            className="text-fuchsia-900 mr-2 bg-[#fdfdfd] border-2 border-[#fdfdfd] w-fit p-3 transition-all duration-700 hover:bg-transparent hover:text-[#fdfdfd]"
          >
            Let&apos;s Talk
          </Link>
          <Link
            href="/#testimonials"
            className="text-[#fdfdfd] border-2 border-[#fdfdfd] w-fit p-3 transition-all duration-700 hover:bg-[#fdfdfd] hover:text-fuchsia-900"
          >
            Hear from our Clients
          </Link>
        </div>
      </div>
    </div>
  );
}
