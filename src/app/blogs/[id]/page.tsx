"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { marked } from "marked";
import EmailCollectModal from "@/components/Modals/emailCollectModal";
import ApiModal from "@/components/Modals/apiModal";
import Image from "next/image";
export default function BlogView() {
  const [show, setShow] = useState(false);
  const [doneSubmit, setDoneSubmit] = useState(false); //eslint-disable-line
  const [blog, setBlog] = useState(null);
  const [state, setState] = useState("");
  const [loading, setLoading] = useState(false);
  let [read, setRead] = useState(false);
  const params = usePathname();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    const b = params.split("/")[2];
    async function getData() {
      setLoading(true);
      const res = await fetch(
        `https://fiesta-server.onrender.com/api/blogs/${b}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await res.json();
      setBlog(result.blog);
      const html = marked.parse(result.blog?.body);
      setState(html);
      setLoading(false);
      setShow(true);
    }
    getData();
  }, [params]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function updateReads() {
    const res = await fetch(
      `https://fiesta-server.onrender.com/api/blogs/${b}/read`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const result = await res.json();
    console.log(result);
  }
  useEffect(() => {
    if (read === true) updateReads();
  }, [read]);
  window?.addEventListener("scroll", () => {
    if (read === false && window.scrollY > (5 * window.innerHeight) / 6) {
      console.log("read", read);
      setRead(true);
      window.removeEventListener("scroll", () => {});
    }
  });
  return (
    <div className="min-h-screen w-full flex flex-col justify-start py-20">
      {loading && <ApiModal />}
      <div className="w-full h-60 overflow-hidden">
        <Image
          height={600}
          width={1200}
          className="w-full object-cover"
          src={blog?.Image}
          alt="Header"
          title="modalImage"
          loading="eager"
          placeholder="blur"
          blurDataURL="https://i.imgur.com/W4AnJYe.png"
        />
      </div>
      {show === true && (
        <EmailCollectModal
          setShow={setShow}
          setDoneSubmit={setDoneSubmit}
          show={show}
        />
      )}
      <article
        className="m-4 unreset"
        dangerouslySetInnerHTML={{ __html: state }}
      ></article>
      {show === true && (
        <EmailCollectModal
          setShow={setShow}
          setDoneSubmit={setDoneSubmit}
          show={show}
        />
      )}
    </div>
  );
}
