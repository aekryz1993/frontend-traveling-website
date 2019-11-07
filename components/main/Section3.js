import section3Style from "../../stylesheet/layouts/main/section3.css";
import bgpic from "../../public/cntpic.jpg";
import Form from "../Form";

const SectionThree = () => {

  const myStyle = (picture) => ({
    backgroundImage: `url(${picture})`,
  })

  return (
    <div className={`${section3Style.container} ${section3Style.clearfix}`} style={myStyle(bgpic)}>
      <div className={section3Style.info}>
        <img className={section3Style.logo} src="/logo.svg" />
        <p className={section3Style.head}>contact us</p>
        <p className={section3Style.text}>1500 NE 50th</p>
        <p className={section3Style.text}>Gdyel Oran City, OK 31017</p>
        <p className={section3Style.text}>Toll Free:</p>
        <p className={section3Style.text}>03-77-77-88-44</p>
        <p className={section3Style.text}>09-45-68-54-55</p>
      </div>
      <Form/>
    </div>
  )
}

export default SectionThree