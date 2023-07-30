const data = [
  {
    name: "Meghana & Sidhanth",
    designation: "Bride & Groom",
    description:
      "We are overjoyed with our entire wedding planning experience with Fiesta. As a couple from different cities we were initially unsure how to bring our dream wedding together. From the vibrant and modern haldi celebration to the dreamy engagement and finally with a traditional wedding, everything turned out exactly as we had imagined. Every details from the tiniest cake topper to the complete catering arrangement was flawlessly taken care. Fiesta team exceeded our expectation creating a magical memories. Thank you for making our dream come true. We definitely want Fiesta to plan your big day.",
  },
  {
    name: "Vinutha",
    designation: "Mother",
    description:
      "A big shoutout to Fiesta for the epic Blippi-themed birthday party you organized for our 2-year-old. It was a total hit! You really nailed it by keeping the kids entertained and making sure us parents had a great time too. The decorations were on point and brought the whole Blippi world to life. We'll be recommending Fiesta to all our friends and family without a doubt.",
  },
  {
    name: "Anish & Pratibha",
    designation: "Bride & Groom",
    description:
      "Wanted to say a big thank you to Fiesta for planning and executing our wedding flawlessly. The way Sristi amd her team blended both North and South Indian cultures was incredible! From the lively Haldi and rocking Sangeet to the beautiful wedding in Gurgaon, everyone felt included and had a blast.We highly recommend to choose team Fiesta to plan your big day.",
  },
  {
    name: "Ms Sashi",
    designation: "Mother",
    description:
      "A heartfelt appreciation to Fiesta for organizing my son's post-wedding puja ceremony. It was exactly what I had in mind - minimal and classy. From the elegant decorations to the smooth coordination, everything was on point. The intimate and serene atmosphere created was exactly what we wanted. It was a beautiful and memorable experience for all of us.",
  },
];

export default function Testimonials() {
  return (
    <div className="">
      <div className="text-rose-700 text-xl md:text-3xl font-bold m-auto w-fit pt-4 mb-10">
        Love from our <span className="text-yellow-400">Clients</span>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center">
        {data.map((item, index) => (
          <div
            data-aos="zoom-in"
            className="group scale-90 md:scale-100 text-fuchsia-900 bg-[#fdfdfd] relative min-h-[300px] w-80 border border-fuchsia-900 m-2 md:m-3 flex flex-col justify-evenly"
            key={index}
          >
            <div className="absolute h-full w-full -top-2 -left-2 border border-fuchsia-900"></div>
            <div className="text-sm text-left font-semibold mt-4 ml-10">
              {item.name}
            </div>
            <div className="text-right text-xs font-light mr-10">
              {item.designation}
            </div>
            <div className="text-center text-xs leading-tight p-4 justify-center">
              &quot; {item.description} &quot;
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
