import LinkedInLogo from "../assets/figma_svg/social_media/linkedInLogo.svg?react";
import GithubLogo from "../assets/figma_svg/social_media/GitHubLogo.svg?react";
import FigmaLogo from "../assets/figma_svg/social_media/figmaLogo.svg?react";



function Footer() {
  return (
    <div className="flex justify-between border-t-1 p-5 md:px-5 lg:px-10"> 
        <div>
            <h2>Located</h2>
            <h2 className=" mt-2 ">Berlin, Germany</h2>
        </div>  
        <div className="text-center">
          <div className="">
            <h3>Find me on</h3>
            <div className="flex flex-row gap-5 mt-2 ">
              <a
                href="https://github.com/handebayuek"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubLogo className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/hande-bayuk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInLogo className="w-6 h-6" />
              </a>
              <a
                href="https://www.figma.com/@handee"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <FigmaLogo className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer