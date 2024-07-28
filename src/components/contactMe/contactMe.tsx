import { Link } from "react-router-dom";

const ContactMe = () => {
  return (
    <section className="w-full flex items-center justify-center bg-generalBg  p-2 md:p-10 pt-8">
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
            exploring Nextjs, Webflow and a bit of Python programming . While I
            am not programming, I enjoy playing listening to music , photography
            and playing vollyball. Learning more to improve skill.
          </p>
          <p className="text-phosphorusGreen underline text-base font-Manrope pt-8 flex">
            <Link to={""}>MORE ABOUT ME</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
