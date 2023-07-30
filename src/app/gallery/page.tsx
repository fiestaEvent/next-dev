import GalleryClient from "@/components/Gallery";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Gallery - Fiesta",
  themeColor: "fuchsia",
  manifest: "/manifest.json",
  description:
    "Have a look at the moments we helped create in our clients' lives, spreading happiness effortlessly.",
  icons: {
    icon: "/F-logo.png",
    apple: "/F-logo.png",
  },
  openGraph: {
    type: "website",
    url: "https://www.fiestaevent.co.in/gallery",
    title: "Fiesta - Event Management",
    description:
      "Have a look at the moments we helped create in our clients' lives, spreading happiness effortlessly.",
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
      "Have a look at the moments we helped create in our clients' lives, spreading happiness effortlessly.",
    title: "Fiesta - Event Management",
    siteId: "fiestaevent",
    creatorId: "fiestaevent",
    creator: "@fiestaevents.co.in",
  },
};
export default function Gallery() {
  return <GalleryClient />;
}
