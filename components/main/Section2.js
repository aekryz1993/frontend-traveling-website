import ItemLogo from "../ItemLogo";
import section2Style from "../../stylesheet/layouts/main/section2.css";
import logo1 from "../../public/logos/1.svg";
import logo2 from "../../public/logos/2.svg";
import logo3 from "../../public/logos/3.svg";
import logo4 from "../../public/logos/4.svg";

const logos = [
  {path: logo1, alt: 'Cruises', title: 'cruises'},
  {path: logo2, alt: 'Tours', title: 'tours'},
  {path: logo3, alt: 'Packages', title: 'packages'},
  {path: logo4, alt: 'Resorts', title: 'resorts'},
]

const SectionTwo = () => {
  return (
    <div className={`${section2Style.container} ${section2Style.clearfix}`}>
      <ItemLogo logo={logos[0].path} alt={logos[0].alt} title={logos[0].title}/>
      <ItemLogo logo={logos[1].path} alt={logos[1].alt} title={logos[1].title}/>
      <ItemLogo logo={logos[2].path} alt={logos[2].alt} title={logos[2].title}/>
      <ItemLogo logo={logos[3].path} alt={logos[3].alt} title={logos[3].title}/>
    </div>
    
  )
}

export default SectionTwo