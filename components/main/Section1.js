import Card from "../Card";
import section1Style from "../../stylesheet/layouts/main/section1.css";
import image1 from "../../public/card/1.jpg";
import image2 from "../../public/card/2.jpg";
import image3 from "../../public/card/3.jpg";

const images = [
  { path: image1, alt: "alt image 1" },
  { path: image2, alt: "alt image 2" },
  { path: image3, alt: "alt image 3" },
]

const SectionOne = () => {
  return (
    <div className={`${section1Style.container}`} >
      <div className={section1Style.header}>
        <p>Lorem Ipsum</p>
        <p>Card Lorem Ipsum</p>
      </div>
      <div className={section1Style.cardsContainer}>
        <Card image={images[0].path} alt={images[0].alt} />
        <Card image={images[1].path} alt={images[1].alt} />
        <Card image={images[2].path} alt={images[2].alt} />
      </div>
    </div>
  )
}

export default SectionOne