import projectFoto from "../../../public/project1png.png"
import alisProject from "../../../public/alis.png"

const FeaturedProjects = () => {
  return (
    <section
      id="one"
      className="bg-generalBg  w-full flex flex-col items-center p-4 md:p-10 gap-y-12"
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
          <img src={projectFoto} alt="pic" className="w-3/4" />
        </div>
        <div className="w-full flex flex-col items-center text-white p-4">
          <div className="font-Manrope  text-[24px] md:text-[32px] pb-4">
            Promotional landing page for book ordering
          </div>
          <div>
            <p className="text-lg font-Manrope text-left">
              Teamed up with a designer to breathe life into a promotional
              webpage for book publishers . Delivered a fully responsive design
              with dynamic content capabilities, seamlessly integrating a
              newsletter feature to keep book lovers with the latest adventures.
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
      <article className=" md:flex justify-center items-center w-full p-2 ">
        <div className="bg-articleBG basis-1/2 p-4 w-full rounded-lg flex justify-center items-center">
          <img src={alisProject} alt="pic" className="w-3/4 " />
        </div>
        <div className="w-full flex flex-col items-center text-white p-4">
          <div className="font-Manrope  text-[24px] md:text-[32px] pb-4">
            Promotional landing page for book ordering
          </div>
          <div>
            <p className="text-lg font-Manrope text-left">
             Developed and launched a customer club website for Alis industrial company, featuring a personalized dashboard, loyalty program integration, and exclusive content access. This initiative improved customer engagement and loyalty, driving repeat business and enhancing user experience.
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
  );
};

export default FeaturedProjects;
