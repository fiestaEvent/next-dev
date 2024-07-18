import About from "@/components/About";
import Contact from "@/components/Contact";
import Landing from "@/components/Landing";
import Services from "@/components/Services";
import Steps from "@/components/Steps";
import Testimonials from "@/components/Testimonials";
import { SpeedInsights } from "@vercel/speed-insights/next"
export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col justify-start">
      <SpeedInsights />
      <Landing />
      <div id="contact" className="section pt-20 -mb-52 md:-mb-20">
        <Contact />
      </div>
      <div id="about" className="section pt-20 -mb-12 md:-mb-20">
        <About />
      </div>
      <div id="services" className="section pt-20 -mb-12">
        <Services />
      </div>
      <div id="steps" className="section pt-20 -mb-12">
        <Steps />
      </div>
      <div id="testimonials" className="section pt-20 mb-20">
        <Testimonials />
      </div>
    </main>
  );
}
