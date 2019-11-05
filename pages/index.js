import Layout from '../components/Layout'
import homeStyle from '../stylesheet/components/home.css'
import React, { useRef } from 'react';
import scrollIntoView from 'scroll-into-view';
import { polyfill } from 'scroll-behaviour'
import Header from "../components/Header";

polyfill()

export default () => {
  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);

  const scrollToSection = (sectionRef) => scrollIntoView(sectionRef.current, {time: 1000})

  return (
    <Layout>
      <Header/>
      {/* <div className={homeStyle.main}>
        <section className={homeStyle.sec1} id="#section1" ref={section1}>
          <div className={homeStyle.bloc}></div>
          <button onClick={() => scrollToSection(section2)}>section2</button>
        </section>
        <section className={homeStyle.sec2} id="#section2" ref={section2}>
          <button onClick={() => scrollToSection(section3)}>section3</button>
        </section>
        <section className={homeStyle.sec3} id="#section3" ref={section3}>
          <button onClick={() => scrollToSection(section1)}>section1</button>
        </section>
      </div> */}
    </Layout>
  )
}