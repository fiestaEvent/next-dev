import Image from "next/image";
import React, { useState } from "react";
import { handlee } from "../fonts";
export default function EmailCollectModal(props: any) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  async function handleSubmit(e: any) {
    e.preventDefault();
    if (email === "") {
      setError("Please enter your email address");
      return;
    }
    setLoading(true);
    const res = await fetch(
      `https://fiesta-server.onrender.com/api/newsletter/addMail`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );
    const result = await res.json();
    if (result.error) {
      setError(result.error);
    } else {
      setError("");
      setEmail("");
      setResponse("Thanks for subscribing!");
      //   props.setShow(false);
      props.setDoneSubmit(true);
    }
    setLoading(false);
  }
  return (
    <div
      className={`${handlee.className} bg-fuchsia-50 rounded-sm p-3 shadow-sm shadow-rose-900 my-3 min-h-fit max-h-[75vh] m-auto w-[90vw] max-w-xl`}
    >
      <div className="relative flex flex-col md:flex-row justify-center h-full items-center">
        <Image
          height={200}
          width={200}
          src="https://i.imgur.com/W4AnJYe.png"
          alt="header"
          className=" object-cover h-36 w-36 md:h-48 md:w-48"
          title="modalImage"
          loading="eager"
          placeholder="blur"
          blurDataURL="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
        />
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-evenly items-center w-full"
        >
          <h1 className="text-[16px] font-bold text-fuchsia-900">
            Get your wedding planner template & checklist
          </h1>
          <input
            type="email"
            placeholder="Enter your email address"
            className="bg-fuchsia-500 rounded-md p-2 m-2 w-11/12 text-xs font-bold"
            onFocus={(e) => (
              (e.target.style.backgroundColor = "#FDF4ff"),
              (e.target.style.color = "#701a75")
            )}
            onBlur={(e) => (e.target.style.backgroundColor = "#d946ef")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="flex">
            <input
              title="Agree"
              placeholder="Check"
              type="checkbox"
              className="m-2"
            />
            <p className="text-fuchsia-900 text-xs">
              I agree to receive email communications from Fiesta
            </p>
          </div>
          {response === null && (
            <button
              type="submit"
              className="bg-fuchsia-900 text-white rounded-md p-2 m-2 w-11/12 text-xs font-bold"
            >
              {loading ? "Loading..." : "Submit"}
            </button>
          )}
          {response !== null && (
            <p className="text-fuchsia-900 text-lg font-bold">{response}</p>
          )}

          {error && <p className="text-red-500">{error}</p>}
        </form>
      </div>
    </div>
    // </div>
  );
}
