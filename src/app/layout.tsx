import Navbar from "@/components/Navbar";
import "./globals.scss";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const metadata: Metadata = {
  title: "Fiesta",
  themeColor: "fuchsia",
  manifest: "/manifest.json",
  description:
    "We offer professional event management services for all types of occasions, including weddings, corporate events, and parties. Trust Fiesta to handle all aspects of your event planning, from venue selection to decor and entertainment. Make your event a success with us.From intimate gatherings to large-scale events, Fiesta creates experiences that leave a lasting impression. Contact us today to start planning your event.",
  icons: {
    icon: "/F-logo.png",
    apple: "/F-logo.png",
  },
  openGraph: {
    type: "website",
    url: "https://www.fiestaevent.co.in",
    title: "Fiesta - Event Management",
    description:
      "We offer professional event management services for all types of occasions, including weddings, corporate events, and parties. Trust Fiesta to handle all aspects of your event planning, from venue selection to decor and entertainment. Make your event a success with us.From intimate gatherings to large-scale events, Fiesta creates experiences that leave a lasting impression. Contact us today to start planning your event.",
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
      "We offer professional event management services for all types of occasions, including weddings, corporate events, and parties. Trust Fiesta to handle all aspects of your event planning, from venue selection to decor and entertainment. Make your event a success with us.From intimate gatherings to large-scale events, Fiesta creates experiences that leave a lasting impression. Contact us today to start planning your event.",
    title: "Fiesta - Event Management",
    siteId: "fiestaevent",
    creatorId: "fiestaevent",
    creator: "@fiestaevents.co.in",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-[#fffef5]`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
