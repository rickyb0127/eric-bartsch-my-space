import Bio from "./Bio";
import Blurbs from "./Blurbs";
import Contact from "./Contact";
import Employers from "./Employers";
import Interests from "./Interests";
import Projects from "./Projects";
import Schools from "./Schools";
import Skills from "./Skills";

function Profile() {
  return (
    <div className="mobile:block tablet:flex desktop:flex bg-white">
      <div className="flex flex-col mobile:w-full tablet:w-[40%] desktop:w-[40%] p-4 gap-[20px]">
        <Bio />
        <Contact />
        <div className="border-[1px] border-main-blue p-[5px]">
          <div className="font-bold">LinkedIn URL:</div>
          <div className="overflow-hidden">
            <a href="https://www.linkedin.com/in/bartsched/" target="blank" className="pl-[5px] hover:text-dark-blue cursor-pointer">https://www.linkedin.com/in/bartsched/</a>
          </div>
          <div className="font-bold pt-[10px]">GitHub URL:</div>
          <div className="overflow-hidden">
            <a href="https://github.com/rickyb0127/" target="blank" className="pl-[5px] hover:text-dark-blue cursor-pointer">https://github.com/rickyb0127/</a>
          </div>
        </div>
        <Interests />
        <Schools />
      </div>
      <div className="flex flex-col mobile:w-full tablet:w-[60%] desktop:w-[60%] p-4 gap-[20px]">
        <div className="border-[2px] border-black p-[30px] font-bold text-center">Eric is open to job opportunities</div>
        <Projects />
        <Blurbs />
        <Skills />
        <Employers />
      </div>
    </div>
  )
}

export default Profile;