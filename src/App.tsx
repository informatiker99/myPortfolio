import Layout from "./components/layout/layout";
import Button from "./components/button/button";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import { MoveDownRight } from "lucide-react";
import ContactMe from "./components/contactMe/contactMe";
import FeaturedProjects from "./components/featuredProjects/featuredProjects";
import { Link } from "react-router-dom";
import mainFoto from "../public/2021-03-23 14.06.04.jpg";

const App = () => {
  return (
    <Layout>
      <section className="flex  flex-col gap-y-10  md:justify-center  md:flex-row w-full bg-generalBg  px-2 md:p-10">
        <div className="flex flex-col items-center justify-center px-4">
          <div className="text-[57px] sm:text-[101px] text-white font-bebasBold text-center md:text-start w-full ">
            <h1
              className={`pt-8 md:pt-2 transition-all duration-200  bg-gradient-to-r from-blue-600 via-red-500 to-Neutral-400  inline-block text-transparent bg-clip-text`}
            >
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
          <div className="flex  w-full pt-6 justify-center md:justify-start items-center">
            <div className="px-2 ">
              <Button
                type="button"
                onClick={() => {
                  window.scrollTo({
                    behavior: "smooth",
                    top: document.body.scrollHeight,
                  });
                }}
                className="p-4 group text-xs font-bold flex items-center justify-between  bg-phosphorusGreen rounded-full "
              >
                CONTACT ME
                <span className="size-2  flex ml-2 items-center justify-center  group-hover:size-6 p-1 transition-all duration-200 ease-out text-white rounded-full bg-black">
                  <MoveDownRight />
                </span>
              </Button>
            </div>
            <div className="px-2">
              <Link
                to={""}
                className="size-14 rounded-full bg-lightDark items-center flex justify-center"
              >
                <span className="text-phosphorusGreen">
                  <Linkedin />
                </span>
              </Link>
            </div>
            <div className="px-2">
              <Link
                target="_blank"
                to={"https://github.com/informatiker99"}
                className="size-14 rounded-full bg-lightDark items-center flex justify-center"
              >
                <span className="text-phosphorusGreen">
                  <Github />
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="basis-1/2 flex items-center justify-center w-full p-4 ">
          <div className="border border-normalText  flex justify-center ">
            <img
              src={mainFoto}
              alt=""
              className=" md:max-w-[30vw] max-w-[70vw] "
            />
          </div>
        </div>
        <div className="flex flex-col items-center fixed gap-y-6 right-12 top-1/2"></div>
      </section>

      <FeaturedProjects></FeaturedProjects>

      <section className="w-full flex-col md:flex items-center justify-center bg-generalBg  px-6 md:p-10 pt-8">
        <div className="flex justify-center md:justify-start md:text-center font-bebasRegular text-white ">
          <h1 className="text-[43px] md:text-[77px] ">My Capabilities</h1>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-1 sm:grid-cols-2 font-Manrope font-bold   justify-center gap-2 w-full pt-10">
          <div className="basis-1/3 capitalize bg-gradient-to-r from-amber-500 to-pink-500   tracking-wider	 rounded-lg p-5 flex-col items-center  ">
            <div className="py-2  px-2 tracking-[.2rem] ">Languages</div>
            <ul className="pl-6 pt-2">
              <li>javascript /+es6</li>
              <li>sass</li>
              <li>typescript</li>
            </ul>
            <div className="bg-blue-300 p-1 rounded-md m-4 ">
              markup Languages
            </div>
            <ul className="pl-6 w-full">
              <li>css 3</li>
              <li>html 5</li>
            </ul>
          </div>
          <div className="basis-1/3 bg-gradient-to-r from-teal-200 capitalize to-teal-500 rounded-lg p-5 flex tracking-wider flex-col items-center">
            <div className="py-2  px-2 text-start w-full tracking-[.2rem]">
              Frameworks & libraries
            </div>
            <ul className="w-full pl-6 pt-2 ">
              <li>react js</li>
              <li>next js</li>
              <li>tailwind</li>
              <li>bootstrap</li>
              <li>redux</li>
            </ul>
          </div>
          <div className="basis-1/3 tracking-wider flex-col items-center bg-gradient-to-r from-amber-200 to-yellow-500 rounded-lg p-5 flex capitalize ">
            <div className="w-full text-start tracking-[.2rem]">Skills</div>
            <ul className="w-full py-2 pl-6">
              <li>git and gitub/gitlab</li>
              <li>rest api</li>
              <li> team work </li>
              <li> Responsive design</li>
              <li> Self-learning</li>
              <li> Problem-solving</li>
              <li> package manager</li>
              <li> fimga</li>
            </ul>
          </div>
          <div className="basis-1/3 bg-gradient-to-r capitalize from-violet-200 to-pink-200 rounded-lg p-5 flex tracking-wider flex-col  ">
            <div className="w-full text-start tracking-[.2rem]">Exploring</div>
            <ul className="w-full pl-6 pt-2 ">
              <li>ci/cd</li>
              <li>ssr</li>
              <li>docker</li>
              <li>react query</li>
              <li>unit testing</li>
            </ul>
          </div>
        </div>
      </section>
      <ContactMe></ContactMe>
    </Layout>
  );
};

export default App;
