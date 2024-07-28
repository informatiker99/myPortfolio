import { Link } from "react-router-dom";
import Button from "../button/button";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full flex-col md:flex items-center justify-center bg-generalBg  p-2 md:p-10 pt-8">
      <div className="flex-col md:flex-row items-center justify-center md:flex text-white w-full">
        <div className="text-white flex-col items-center font-bebasRegular md:text-[101px] text-[43px] basis-1/2 px-8 ">
          <h1 className="text-center md:text-start">LET'S CONNECT</h1>
          <p className="text-lg font-Manrope py-8">
            Say hello at{" "}
            <Link
              to={"mailto:hseyedi909@gmail.com"}
              className="underline text-phosphorusGreen"
            >
              hseyedi909@gmail.com
            </Link>
            <br />
            for more info here is my{" "}
            <Link to={""} className="underline">
              resume
            </Link>
          </p>
          <div className="flex w-full">
            <div className="text-phosphorusGreen flex w-full gap-4 px-8">
              <Link
                to={"https://github.com/informatiker99"}
                target="_blank"
                className="size-14 rounded-full bg-lightDark items-center flex justify-center"
              >
                <Github />
              </Link>
              <Link
                to={""}
                className="size-14 rounded-full bg-lightDark items-center flex justify-center"
              >
                <Linkedin />
              </Link>
              <Button className="size-14 rounded-full bg-lightDark items-center flex justify-center">
                <Instagram />
              </Button>
            </div>
          </div>
        </div>
        <div className="basis-1/2 text-base font-Manropepx-8 px-8 pb-8">
          <form
            action=""
            className="flex gap-y-2 flex-col items-center w-full "
          >
            <div className="w-full py-2">
              <label htmlFor="" className="p-2 flex">
                Name
              </label>

              <input
                type="text"
                className="w-full bg-articleBG rounded-md p-3 font-Manrope outline-black"
              />
            </div>
            <div className="w-full py-2">
              <label htmlFor="" className="p-2 flex">
                Email
              </label>

              <input
                type="text"
                className="w-full bg-articleBG rounded-md p-3 font-Manrope outline-black"
              />
            </div>
            <div className="w-full py-2">
              <label htmlFor="" className="p-2 flex">
                Subject
              </label>

              <input
                type="text"
                className="w-full bg-articleBG rounded-md p-3 font-Manrope outline-black"
              />
            </div>
            <div className="w-full py-2">
              <label htmlFor="" className="p-2 flex">
                Message
              </label>

              <textarea
                name=""
                id=""
                className="w-full bg-articleBG rounded-md p-3 font-Manrope outline-black"
              ></textarea>
            </div>
            <div className="flex w-full justify-start pt-4">
              <Button
                type="submit"
                className="py-3 capitalize px-4 text-generalBg font-Manrope  min-h-14   font-bold flex items-center justify-between  bg-phosphorusGreen rounded-full"
              >
                Submit{" "}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
