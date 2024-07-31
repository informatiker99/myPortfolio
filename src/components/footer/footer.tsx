import { Link } from "react-router-dom";
import Button from "../button/button";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import { Instagram } from "lucide-react";
import { Phone } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const formRef = useRef<any>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const sendEmail = (e: any) => {
    e.preventDefault();
    console.log(formRef);
    emailjs
      .sendForm(`service_66smywc`, `template_enu7mz6`, formRef.current, {
        publicKey: "iID4VhKM9qspSAp8M",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("ایمیل شما با موفقیت ارسال شد :) ");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
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
            <a
              href={"/resume/Hossein-Seyedi.pdf"}
              className="underline"
              download
            >
              resume
            </a>
          </p>

          <div className="flex w-full ">
            <div className="text-phosphorusGreen flex w-full justify-start  px-6">
              <div>
                <Link
                  to={"https://github.com/informatiker99"}
                  target="_blank"
                  className="size-12 md:size-14 rounded-full bg-lightDark items-center flex justify-center"
                >
                  <Github />
                </Link>
              </div>
              <div>
                <Link
                  target="_blank"
                  to={
                    "https://www.linkedin.com/in/hossein-seyedi-661028233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  }
                  className="size-12 md:size-14 rounded-full bg-lightDark items-center flex justify-center"
                >
                  <Linkedin />
                </Link>
              </div>
              <div>
                <Button className="size-12 md:size-14 rounded-full bg-lightDark items-center flex justify-center">
                  <Instagram />
                </Button>
              </div>
              <div className="relative flex">
                <Link
                  to={"tel:09384935387"}
                  className="underline text-phosphorusGreen size-12 md:size-14 rounded-full bg-lightDark items-center flex justify-center group"
                >
                  <Phone />
                  {/*                   <div className=" absolute min-w-32 -translate-y-1/2 left-14  top-1/2 grow text-center group-hover:opacity-100 transition-opacity duration-500 ease-out opacity-0 bg-lightDark rounded-full font-Manrope text-sm p-4 tracking-[.2rem]	">
                    <p>+98 938 493 53 87</p>
                  </div> */}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/2 text-base font-Manropepx-8 px-8 pb-8">
          <form
            ref={formRef}
            onSubmit={sendEmail}
            action=""
            className="flex gap-y-2 flex-col items-center w-full "
          >
            <div className="w-full py-2">
              <label htmlFor="" className="p-2 flex">
                Name
              </label>

              <input
                type="text"
                name="from_name"
                onChange={(e) =>
                  setFormState((prev) => ({ ...prev, name: e.target.value }))
                }
                value={formState.name}
                className="w-full bg-articleBG rounded-md p-3 font-Manrope outline-black"
              />
            </div>
            <div className="w-full py-2">
              <label htmlFor="" className="p-2 flex">
                Email
              </label>

              <input
                name="from_name"
                onChange={(e) =>
                  setFormState((prev) => ({ ...prev, email: e.target.value }))
                }
                type="text"
                value={formState.email}
                className="w-full bg-articleBG rounded-md p-3 font-Manrope outline-black"
              />
            </div>
            <div className="w-full py-2">
              <label htmlFor="" className="p-2 flex">
                Subject
              </label>

              <input
                name="subject"
                onChange={(e) =>
                  setFormState((prev) => ({ ...prev, subject: e.target.value }))
                }
                value={formState.subject}
                type="text"
                className="w-full bg-articleBG rounded-md p-3 font-Manrope outline-black"
              />
            </div>
            <div className="w-full py-2">
              <label htmlFor="" className="p-2 flex">
                Message
              </label>

              <textarea
                name="message"
                id=""
                onChange={(e) =>
                  setFormState((prev) => ({ ...prev, message: e.target.value }))
                }
                value={formState.message}
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
