import { handlee } from "@/components/fonts";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Writer's Desk",
  themeColor: "fuchsia",
  manifest: "/manifest.json",
  description:
    "Hear from what our team has to say about the events we do and how we perfect the balance between glam and comfort.",
  icons: {
    icon: "/F-logo.png",
    apple: "/F-logo.png",
  },
  openGraph: {
    type: "website",
    url: "https://www.fiestaevent.co.in/blogs",
    title: "Fiesta - Event Management",
    description:
      "Hear from what our team has to say about the events we do and how we perfect the balance between glam and comfort.",
    images: [
      {
        url: "https://i.imgur.com/ejceFwQ.png",
        width: 800,
        height: 600,
        alt: "Fiesta - Event Management",
      },
    ],
    siteName: "Fiesta - Event Management",
  },
  twitter: {
    site: "@fiestaevents.co.in",
    card: "summary_large_image",
    images: [
      {
        url: "https://i.imgur.com/ejceFwQ.png",
        width: 800,
        height: 600,
        alt: "Fiesta - Event Management",
      },
    ],
    description:
      "Hear from what our team has to say about the events we do and how we perfect the balance between glam and comfort.",
    title: "Fiesta - Event Management",
    siteId: "fiestaevent",
    creatorId: "fiestaevent",
    creator: "@fiestaevents.co.in",
  },
};
export default async function Blog() {
  const response = await fetch(
    "https://fiesta-server.onrender.com/api/blogs/getAll",
    {
      next: {
        revalidate: 60 * 60 * 24,
      },
    }
  );
  const bookOpen = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="transform: ;msFilter:;"><path d="M21 3h-7a2.98 2.98 0 0 0-2 .78A2.98 2.98 0 0 0 10 3H3a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h5.758a2.01 2.01 0 0 1 1.414.586l1.121 1.121c.009.009.021.012.03.021.086.08.182.15.294.196h.002a.996.996 0 0 0 .762 0h.002c.112-.046.208-.117.294-.196.009-.009.021-.012.03-.021l1.121-1.121A2.01 2.01 0 0 1 15.242 20H21a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 15h-4.758a4.03 4.03 0 0 0-2.242.689V6c0-.551.448-1 1-1h6v13z"></path></svg>`;
  const rightArrow = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="transform: ;msFilter:;"><path d="M11.999 1.993c-5.514.001-10 4.487-10 10.001s4.486 10 10.001 10c5.513 0 9.999-4.486 10-10 0-5.514-4.486-10-10.001-10.001zM12 19.994c-4.412 0-8.001-3.589-8.001-8s3.589-8 8-8.001C16.411 3.994 20 7.583 20 11.994c-.001 4.411-3.59 8-8 8z"></path><path d="M12 10.994H8v2h4V16l4.005-4.005L12 7.991z"></path></svg>`;
  const blogs = await response.json().then((data) => data.blogs);
  return (
    <div className="min-h-screen w-full flex flex-col justify-start">
      <div
        className={`text-2xl lg:text-5xl text-purple-900 font-bold w-11/12 mx-auto text-left mt-32 ${handlee.className}`}
      >
        Writer&apos;s Desk
      </div>
      <div className="flex justify-evenly flex-wrap w-11/12 my-20 mx-auto md:flex">
        {blogs.map((blog: any, index: Number) => (
          <div
            key={blog._id}
            className="flex sm:scale-125 lg:scale-150 flex-col w-56 rounded-lg shadow-sm text-[#fdfdfd] bg-[#fffef5] shadow-rose-900 items-center p-2"
          >
            <div className="h-56 m-3 mb-0 text-sm justify-evenly flex flex-col">
              <Image
                src={blog.Image}
                width={150}
                height={150}
                alt="Blog"
                loading="eager"
                className="object-cover h-28 w-full"
              />
              <div className="font-black text-sm flex-wrap text-rose-700">
                {blog.title}
              </div>
              <div className="text-xs text-fuchsia-900 line-clamp-3">
                {blog.preview}
              </div>
            </div>
            <span className="text-sm text-rose-900">
              <i
                className="fill-fuchsia-900"
                dangerouslySetInnerHTML={{
                  __html: bookOpen,
                }}
              ></i>
              {blog.reads}
            </span>
            <Link
              href={{
                pathname: `/blogs/${blog._id}`,
              }}
              className="p-2 text-rose-500 fill-rose-500 text-xs flex items-center hover:font-bold w-[90%] rounded-sm"
            >
              Continue Reading
              <i
                className="p-1"
                dangerouslySetInnerHTML={{ __html: rightArrow }}
              ></i>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
