import React, { useRef } from "react";
import Layout from "./components/layout/layout";
import Button from "./components/button/button";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import { MoveUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const App = () => {
  const images = [
    { src: "./public/Git-Icon-1788C 1.png", lable: "git" },
    { src: "./public/css.svg", lable: "css" },
    { src: "./public/sass.svg", lable: "sass" },
    { src: "./public/ts.png", lable: "type script" },
    { src: "./public/next.js.png", lable: "next.js" },
    { src: "./public/React_.svg", lable: "react.js" },
    { src: "./public/logo-javascript.svg", lable: "java script" },
    { src: "./public/bootstrap-.png", lable: "bootstrap" },
    { src: "./public/redux-logo.svg", lable: "redux" },
    { src: "./public/tailwind.svg", lable: "tailwind" },
    { src: "./public/HTML5_Badge.svg.png", lable: "html" },
  ];
  const refOne = useRef<HTMLElement>(null);
  const refTwo = useRef<HTMLElement>(null);
  const refThree = useRef<HTMLElement>(null);
  const refFour = useRef<HTMLElement>(null);

  return (
    <Layout>
      <section className="flex  flex-col gap-y-10  md:justify-center  md:flex-row w-full bg-generalBg  px-2 md:p-10">
        <div className="flex flex-col items-center justify-center px-4">
          <div className="text-[57px] sm:text-[101px] text-white font-bebasBold text-center md:text-start w-full ">
            <h1 className="">
              HI, I AM <br />
              HOSSEIN SEYEDI.
            </h1>
          </div>
          <div className="text-normalText font-Manrope text-sm sm:text-lg text-center md:text-start w-full">
            <p>
              A Mashhad based fron-end developer passionate about building{" "}
              <br /> accessible and use friendly websites
            </p>
          </div>
          <div className="flex w-full pt-6 justify-center md:justify-start items-center">
            <div className="px-2 ">
              <Button
                type="button"
                className="py-3 px-4  min-h-14 w-[160px] md:w-[187px]  font-bold flex items-center justify-between  bg-phosphorusGreen rounded-full "
              >
                CONTACT ME
                <span className="size-2 flex items-center justify-center hover:size-8 transition-all duration-200 ease-out text-white rounded-full bg-black">
                  <MoveUpRight />
                </span>
              </Button>
            </div>
            <div className="px-2">
              <Button className="size-14 rounded-full bg-lightDark items-center flex justify-center">
                <span className="text-phosphorusGreen">
                  <Linkedin />
                </span>
              </Button>
            </div>
            <div className="px-2">
              <Button className="size-14 rounded-full bg-lightDark items-center flex justify-center">
                <span className="text-phosphorusGreen">
                  <Github />
                </span>
              </Button>
            </div>
          </div>
        </div>
        <div className="basis-1/2 flex items-center justify-center w-full p-4 ">
          <div className="border border-normalText  flex justify-center ">
            <img
              src="/public/2021-03-23 14.06.04.jpg"
              alt=""
              className=" md:max-w-[30vw] max-w-[70vw] "
            />
          </div>
        </div>
        <div className="flex flex-col items-center fixed gap-y-6 right-12 top-1/2"></div>

        {/* <Scroller steps={4}></Scroller> */}
      </section>

      <section
        id="one"
        ref={refOne}
        className="bg-generalBg w-full flex flex-col items-center p-4 md:p-10 gap-y-12"
      >
        <div className="w-full text-white pb-14">
          <h1 className="font-bebasRegular text-[43px] md:text-[76px]">
            FEATURED PROJECTS{" "}
          </h1>
          <p className="font-Manrope text-normalText md:text-lg text-[16px]">
            Here are some of the selected projects that snowcase my passion for{" "}
            <br /> front-end development.{" "}
          </p>
        </div>
        <article className=" md:flex justify-center items-center w-full p-2 ">
          <div className="bg-articleBG basis-1/2 p-4 w-full rounded-lg flex justify-center items-center">
            <img src="./public/project1png.png" alt="pic" className="w-3/4" />
          </div>
          <div className="w-full flex flex-col items-center text-white p-4">
            <div className="font-Manrope  text-[24px] md:text-[32px] pb-4">
              Promotional landing page for book ordering
            </div>
            <div>
              <p className="text-lg font-Manrope text-left">
                Teamed up with a designer to breathe life into a promotional
                webpage for book publishers . Delivered a fully responsive
                design with dynamic content capabilities, seamlessly integrating
                a newsletter feature to keep book lovers with the latest
                adventures.
              </p>
            </div>
            <div className="flex items-start w-full flex-col text-base font-Manrope divide-y divide-white text-white ">
              <div className=" p-4">
                <p>PROJECT INFO</p>
              </div>
              <div className="w-full p-4 flex justify-between">
                <div>Year</div>
                <div>2023</div>
              </div>
              <div className="w-full p-4 flex justify-between">
                <div>Role</div>
                <div>Front-end Developer</div>
              </div>
            </div>
          </div>
        </article>
        {/* this section musst change  */}
        <article
          className=" md:flex justify-center items-center w-full p-2 "
          ref={refTwo}
        >
          <div className="bg-articleBG basis-1/2 p-4 w-full rounded-lg flex justify-center items-center">
            <img src="./public/project1png.png" alt="pic" className="w-3/4 " />
          </div>
          <div className="w-full flex flex-col items-center text-white p-4">
            <div className="font-Manrope  text-[24px] md:text-[32px] pb-4">
              Promotional landing page for book ordering
            </div>
            <div>
              <p className="text-lg font-Manrope text-left">
                Teamed up with a designer to breathe life into a promotional
                webpage for book publishers . Delivered a fully responsive
                design with dynamic content capabilities, seamlessly integrating
                a newsletter feature to keep book lovers with the latest
                adventures.
              </p>
            </div>
            <div className="flex items-start w-full flex-col text-base font-Manrope divide-y divide-white text-white ">
              <div className=" p-4">
                <p>PROJECT INFO</p>
              </div>
              <div className="w-full p-4 flex justify-between">
                <div>Year</div>
                <div>2023</div>
              </div>
              <div className="w-full p-4 flex justify-between">
                <div>Role</div>
                <div>Front-end Developer</div>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section
        className="w-full flex-col md:flex items-center justify-center bg-generalBg  p-2 md:p-10 pt-8"
        ref={refThree}
      >
        <div className="flex justify-center md:justify-start md:text-center font-bebasRegular text-white ">
          <h1 className="text-[43px] md:text-[77px] ">My Capabilities</h1>
        </div>
        <div className="flex justify-center gap-4 flex-wrap pt-10">
          {images.map((item) => {
            return (
              <div className="flex w-72 border border-gray-50 p-3 justify-between items-center rounded-xl hover:opacity-100 relative">
                <img src={item.src} alt="alt" className="size-20 " />
                <div className="text-white font-Manrope text-base capitalize pt-2">
                  {item.lable}
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section
        className="w-full flex items-center justify-center bg-generalBg  p-2 md:p-10 pt-8"
        ref={refFour}
      >
        <div className="flex-col md:flex-row items-center justify-center md:flex text-white ">
          <div className="text-white flex justify-start text-start w-full basis-1/2 font-bebasRegular md:text-[101px] text-[43px]">
            <h1 className="px-8">ABOUT ME</h1>
          </div>
          <div className="p-8 basis-1/2">
            <p className="font-Manrope text-3xl text-start ">
              I am a passionated front-end developer based in Mashhad.
            </p>
            <p className="text-lg text-start pt-8">
              I am a front-end developer based in Mashhad looking for exciting
              opportunities. Likes to focus on accessibility when developing.
              Passionate and curious about solving problems. Currently, I’m
              exploring Nextjs, Webflow and a bit of Python programming . While
              I am not programming, I enjoy playing listening to music ,
              photography and playing vollyball. Learning more to improve skill.
            </p>
            <p className="text-phosphorusGreen underline text-base font-Manrope pt-8 flex">
              <Link to={""}>MORE ABOUT ME</Link>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default App;
