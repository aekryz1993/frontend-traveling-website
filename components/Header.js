import headerStyle from "../stylesheet/layouts/header.css";
import picture1 from "../public/header/hPic1.jpg";
import picture2 from "../public/header/hpic2.jpg";
import picture3 from "../public/header/hpic3.jpg";
import picture4 from "../public/header/hpic4.jpg";

const Header = () => {
  const myStyle = (picture) => ({
    backgroundImage: `url(${picture})`,
  })

  return (
    <section className={headerStyle.headerSec}>
      <div className={headerStyle.container} style={myStyle(picture1)}>
        <div className={headerStyle.fItem1}>
          <div className={headerStyle.htitle}>
            <p>travel to the world -</p>
            <p>fast, economical,</p>
            <p>comfortable</p>
          </div>
          <div className={headerStyle.buttonMore}>more</div>
        </div>
        <div className={`${headerStyle.csimg}`} style={myStyle(picture2)}></div>
        <div className={`${headerStyle.csimg}`} style={myStyle(picture3)}></div>
        <div className={`${headerStyle.csimg}`} style={myStyle(picture4)} src={picture4}></div>
      </div>
    </section>
  )
}

export default Header