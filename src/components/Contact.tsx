"use client";
import { useState } from "react";
// import { baseUrl } from "../utils/api";
import Link from "next/link";
import { handlee } from "./fonts";

function ContactForm() {
  const [state, setState] = useState(null);
  // const [state, handleSubmit] = useForm("mvonqejy");
  const [data, setData] = useState({
    email: "",
    phone: "",
    message: "",
    eventDate: "",
  });
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetch(`https://fiesta-server.onrender.com/api/query`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    console.log(result);
    setState(result.succeeded);
  };
  // if (state.succeeded) {
  if (state === true) {
    return (
      <div className="flex flex-col justify-center items-center">
        <p className="max-w-4xl w-72 md:w-84 text-center mt-20 lg:w-96 my-3 p-4 border-4 text-[#fdfdfd] border-fuchsia-900 m-auto">
          Thank you! Someone will reach out to you soon!
        </p>
        <Link
          href="/gallery"
          className="bg-[#fdfdfd] text-fuchsia-900 hover:scale-105 mx-auto p-2 hover:border-4 border-fuchsia-100 rounded-sm"
        >
          Check our Fiesta Moments
        </Link>
      </div>
    );
  }
  if (state === false) {
    return (
      <p className="max-w-4xl w-72 md:w-84 text-center mt-20 lg:w-96 my-3 p-4 border-4 border-fuchsia-900 m-auto">
        Something went wrong. Please try again later.
      </p>
    );
  }
  return (
    <form
      onSubmit={(e)=>handleSubmit(e)}
      className="contactForm relative flex flex-col md:flex-row justify-center items-center m-auto max-w-[80vw]"
    >
      <div
        className="md:absolute top-28 left-[10vw] flex flex-col min-w-[100%] md:min-w-[35vw] max-w-[80%] md:max-w-[300px] md:bg-rose-600 p-10 text-[#fdfdfd] rounded-lg"
      >
        <input
          className="w-[90%] my-1 md:my-3 p-1 bg-fuchsia-900 md:bg-rose-600 border-b text-xs m-auto"
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <input
          className="w-[90%] my-1 md:my-3 p-1 bg-fuchsia-900 md:bg-rose-600 border-b text-xs m-auto"
          id="phone"
          type="phone"
          name="phone"
          placeholder="Phone"
          required
          onChange={(e) => setData({ ...data, phone: e.target.value })}
        />
        {/* <ValidationError prefix="Email" field="email" errors={state.errors} /> */}
        <select
          title="Timeline"
          className="w-[90%] my-1 md:my-3 p-1 bg-fuchsia-900 md:bg-rose-600 border-b text-xs m-auto"
          id="eventDate"
          name="eventDate"
          placeholder="Event Date"
          required
          onChange={(e) => setData({ ...data, eventDate: e.target.value })}
        >
          <option className="" value="N/A">
            Event Timeline
          </option>
          <option className="" value="<2 Months">
            Within next 2 Months
          </option>
          <option className="" value="<6 Months">
            Within next 6 Months
          </option>
          <option className="" value="1+ Year">
            Next 1 Year
          </option>
          <option className="" value="N/A">
            Not yet decided
          </option>
        </select>
        <textarea
          className="w-[90%] my-1 md:my-3 p-1 bg-fuchsia-900 md:bg-rose-600 border-b text-xs m-auto"
          id="message"
          name="message"
          placeholder="Message"
          onChange={(e) => setData({ ...data, message: e.target.value })}
        />
        {/* <ValidationError prefix="Message" field="message" errors={state.errors} /> */}
      </div>
      <button
        className={`${handlee.className} md:absolute whitespace-nowrap top-40 left-[50vw] lg:left-[50vw] bg-rose-200 text-fuchsia-900 my-3 py-2 px-12 text-2xl font-extralight rounded-sm shadow-sm shadow-rose-600 transition-all duration-300 m-auto`}
        type="submit"
      >
        Get A Quote
      </button>
    </form>
  );
}
export default function Contact() {
  return (
    <div>
      <div className="bg-fuchsia-900 h-[26rem]">
        <div className="text-[#fdfdfd] text-xl md:text-3xl font-bold m-auto w-fit pt-4">
          Reach out to <span className="text-yellow-400">Us</span>
        </div>
        <ContactForm />
      </div>
      <div className="h-40"></div>
    </div>
  );
}
